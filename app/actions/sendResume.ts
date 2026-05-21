"use server";

import { Resend } from "resend";
import fs from "fs";
import path from "path";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendResumeAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;

  if (!name || !email || !subject) {
    return { success: false, error: "All fields are required." };
  }

  try {
    // Read PDF from public folder
    const filePath = path.join(process.cwd(), "public", "resume", "shivam_shetty_resume.pdf");

    const pdfBuffer = fs.readFileSync(filePath);

    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: email,
      subject: `Requested Resume: ${subject}`,
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for your interest! Please find my resume attached.</p>
        <p>Best regards,<br/>Shivam Shetty</p>
      `,
      attachments: [
        {
          filename: "ShivamShettyResume.pdf",
          content: pdfBuffer,
        },
      ],
    });

    console.log("Email sent:", data);

    return { success: true, data };
  } catch (error: any) {
    console.error("Resend Error:", error);

    return {
      success: false,
      error: error.message || "Failed to dispatch email.",
    };
  }
}