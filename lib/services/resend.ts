import { Resend } from "resend";

let resendClient: Resend | null = null;

/**
 * Returns a lazily initialized Resend client.
 * This prevents app startup crashes if the key is not set.
 */
export function getResendClient(): Resend {
  if (!resendClient) {
    const key = process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("RESEND_API_KEY environment variable is required");
    }
    resendClient = new Resend(key);
  }
  return resendClient;
}

interface SendEmailParams {
  from?: string;
  to: string;
  subject: string;
  html: string;
}

/**
 * Helper function to send an email using the Resend client.
 */
export async function sendEmail({ from = "onboarding@resend.dev", to, subject, html }: SendEmailParams) {
  const resend = getResendClient();
  return resend.emails.send({
    from,
    to,
    subject,
    html,
  });
}
