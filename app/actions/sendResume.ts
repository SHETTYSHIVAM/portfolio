"use server";

import { Resend } from "resend";
import { portfolio } from "@/data/portfolio";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendResumeAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;

  if (!name || !email || !subject) {
    return { success: false, error: "All fields are required." };
  }

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shivamshetty.tech";
    const resumePublicUrl = `${baseUrl}/resume/shivam_shetty_resume.pdf`;

    // CRUCIAL CHANGE: Destructure BOTH { data, error } from the SDK response
    const { data, error } = await resend.emails.send({
      from: "Shivam Shetty <resume@shivamshetty.tech>",
      to: [email], // The SDK prefers an array or clean string array
      replyTo: portfolio.personal.email,
      subject: `Requested Resume: ${subject}`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for your interest! Please find my resume attached.</p>
        <p>Best regards,<br/>Shivam Shetty</p>
      `,
      attachments: [
        {
          filename: "ShivamShettyResume.pdf",
          path: resumePublicUrl, 
        },
      ],
    });

    // Capture the hidden API error manually
    if (error) {
      console.error("Resend API Validation Error:", error);
      return { success: false, error: error.message };
    }

    console.log("Email dispatched successfully! ID:", data?.id);
    return { success: true, data };

  } catch (err: any) {
    // This only catches network drops/crashes, not API rejections
    console.error("Fatal Server Error:", err);
    return { success: false, error: err.message || "Failed to dispatch email." };
  }
}