import { NextRequest, NextResponse } from "next/server";
import { addDoc, collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase/config";
import { sanitizeString } from "@/lib/utils";
import { checkRateLimit } from "@/lib/services/rateLimit";

// POST /api/enquiries - Submit a new enquiry
export async function POST(req: NextRequest) {
  try {
    // 1. Extract and check client IP for rate limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    
    // Rate Limit: 10 requests per minute per IP for enquiries submission to avoid spam
    const limitResult = checkRateLimit(ip, 10, 60 * 1000);
    if (!limitResult.success) {
      const retryAfter = Math.ceil((limitResult.reset - Date.now()) / 1000);
      return new NextResponse(
        JSON.stringify({ error: "Too many enquiries. Please try again later." }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": retryAfter.toString(),
          },
        }
      );
    }

    // 2. Parse request body
    const body = await req.json();
    const { name, company, email, phone, service, budget, message, honeypot } = body;

    // Honeypot spam prevention
    if (honeypot) {
      console.warn("Spam enquiry blocked via honeypot field.");
      return NextResponse.json({ success: true, message: "Faux success for spam bot." });
    }

    // 3. Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json({ error: "Name must be at least 2 characters long." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email)) {
      return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json({ error: "Message must be at least 10 characters long." }, { status: 400 });
    }

    // 4. Sanitization
    const cleanName = sanitizeString(name);
    const cleanCompany = company ? sanitizeString(company) : "";
    const cleanEmail = email.trim().toLowerCase();
    const cleanPhone = phone ? sanitizeString(phone) : "";
    const cleanService = service ? sanitizeString(service) : "Custom Website Design";
    const cleanBudget = budget ? sanitizeString(budget) : "Not Specified";
    const cleanMessage = sanitizeString(message);
    const userAgent = req.headers.get("user-agent") || "Unknown";

    // 5. Structure Enquiry Data
    const enquiryData = {
      name: cleanName,
      company: cleanCompany,
      email: cleanEmail,
      phone: cleanPhone,
      service: cleanService,
      budget: cleanBudget,
      message: cleanMessage,
      createdAt: new Date().toISOString(),
      status: "New", // Default status
      ip,
      userAgent,
    };

    // 6. Save in Cloud Firestore
    const docRef = await addDoc(collection(db, "enquiries"), enquiryData);

    // 7. Send Email Notification via Resend API
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Express Webcraft <onboarding@resend.dev>",
            to: "sayedozair25@gmail.com",
            subject: `New Enquiry from ${cleanName} - Express Webcraft`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
                <h2 style="color: #c9a227; text-transform: uppercase; border-bottom: 2px solid #c9a227; padding-bottom: 10px;">New Website Enquiry</h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; width: 150px; color: #555;">Name:</td>
                    <td style="padding: 8px 0; color: #111;">${cleanName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td>
                    <td style="padding: 8px 0; color: #111;">${cleanCompany || "Not Specified"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
                    <td style="padding: 8px 0; color: #111;"><a href="mailto:${cleanEmail}" style="color: #c9a227; text-decoration: none;">${cleanEmail}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
                    <td style="padding: 8px 0; color: #111;">${cleanPhone || "Not Specified"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #555;">Selected Service:</td>
                    <td style="padding: 8px 0; color: #111;">${cleanService}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #555;">Budget Range:</td>
                    <td style="padding: 8px 0; color: #111;">${cleanBudget}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #555; vertical-align: top;">Message:</td>
                    <td style="padding: 8px 0; color: #111; line-height: 1.5; background: #f9f9f9; padding: 10px; border-radius: 4px;">${cleanMessage.replace(/\n/g, "<br>")}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #555;">Submission Time:</td>
                    <td style="padding: 8px 0; color: #111;">${new Date().toLocaleString("en-US", { timeZone: "UTC" })} UTC</td>
                  </tr>
                </table>
                <div style="margin-top: 30px; font-size: 11px; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 15px;">
                  Sent from IP ${ip} using ${userAgent.substring(0, 50)}...
                </div>
              </div>
            `,
          }),
        });

        if (!emailResponse.ok) {
          const errText = await emailResponse.text();
          console.error("Resend API failed:", errText);
        } else {
          console.log("Email notification sent successfully.");
        }
      } catch (emailErr) {
        console.error("Error sending email via Resend:", emailErr);
      }
    } else {
      console.warn("RESEND_API_KEY environment variable is missing. Email notification skipped.");
    }

    return NextResponse.json({
      success: true,
      enquiryId: docRef.id,
      message: "Enquiry submitted successfully.",
    });

  } catch (error: any) {
    console.error("Error in POST /api/enquiries:", error);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
