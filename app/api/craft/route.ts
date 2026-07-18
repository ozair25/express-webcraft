import { GoogleGenAI, Type } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/services/rateLimit";

// Initialize Gemini SDK with telemetry header
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "127.0.0.1";
    
    // Rate Limit: 10 requests per minute per IP for AI generation to prevent API billing abuse
    const limitResult = await checkRateLimit(ip, 10, 60 * 1000, "craft");
    if (!limitResult.success) {
      const retryAfter = Math.ceil((limitResult.reset - Date.now()) / 1000);
      return new NextResponse(
        JSON.stringify({ error: "Too many brand content generation requests. Please try again later." }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": retryAfter.toString(),
          },
        }
      );
    }

    const body = await req.json();
    const { prompt, industry } = body;

    const systemInstruction = `You are a world-class premium copywriter and creative director for "Express Webcraft", an ultra-luxury, high-end digital design agency.
Your task is to craft bespoke, elegant website copy and layout suggestions based on the user's requested industry or brand concept.
The tone must be sophisticated, poetic, organic, and evocative of quiet luxury. Avoid tech jargon, SaaS slang, or typical corporate marketing copy.
Produce response exclusively in JSON matching the specified schema.`;

    const userPrompt = `Bespoke brand concept or industry: "${industry || prompt || "Luxury Skincare"}"
Please generate a fully customized organic website structure for this client. Include high-end copy, curated feature items, and a customer testimonial.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: userPrompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            brandName: {
              type: Type.STRING,
              description: "An elegant, bespoke name for this client's brand",
            },
            headline: {
              type: Type.STRING,
              description: "A beautiful, premium editorial headline (5-8 words max)",
            },
            subheadline: {
              type: Type.STRING,
              description: "A refined, poetic description of the brand philosophy (15-20 words max)",
            },
            tagline: {
              type: Type.STRING,
              description: "A short, beautiful motto or call to action detail (3-5 words)",
            },
            heroAccent: {
              type: Type.STRING,
              description: "One of these color themes: 'terracotta', 'gold', 'sage', or 'clay'",
            },
            aboutTitle: {
              type: Type.STRING,
              description: "A curated title for the brand's about/legacy section",
            },
            aboutDescription: {
              type: Type.STRING,
              description: "A deep, evocative narrative describing their craftsmanship and heritage (40-50 words)",
            },
            features: {
              type: Type.ARRAY,
              description: "Three signature pillars or offerings that define this luxury brand",
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  iconName: { 
                    type: Type.STRING,
                    description: "Strictly one of: 'leaf', 'star', 'compass', 'feather', 'sun', 'flower'"
                  }
                },
                required: ["title", "description", "iconName"]
              }
            },
            testimonial: {
              type: Type.OBJECT,
              description: "A glowing review from a high-profile client or journal",
              properties: {
                quote: { type: Type.STRING },
                author: { type: Type.STRING },
                role: { type: Type.STRING }
              },
              required: ["quote", "author", "role"]
            }
          },
          required: [
            "brandName",
            "headline",
            "subheadline",
            "tagline",
            "heroAccent",
            "aboutTitle",
            "aboutDescription",
            "features",
            "testimonial"
          ]
        }
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response content generated from Gemini.");
    }

    const parsedData = JSON.parse(text);
    return NextResponse.json(parsedData);
  } catch (error: any) {
    console.error("Gemini Generation Error:", error);
    return NextResponse.json(
      { 
        error: "Failed to craft brand content.",
        details: error?.message || String(error)
      },
      { status: 500 }
    );
  }
}
