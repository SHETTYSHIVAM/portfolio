import { NextResponse } from "next/server";
import { Resend } from "resend";
import portfolio from "@/data/portfolio";

// Initialize Resend securely using your system environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    // Basic server-side sanitization validation checks
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required form field entry values." },
        { status: 400 }
      );
    }

    const destinationInbox = portfolio.personal.email;

    const data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>", // Change to your verified domain once ready
      to: destinationInbox,
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: monospace; padding: 24px; color: #111; background-color: #fafafa; border: 1px solid #eee;">
          <h2 style="border-bottom: 1px solid #ccc; padding-bottom: 8px; font-size: 16px;">// New Connection Message</h2>
          <p><strong>Sender Name:</strong> ${name}</p>
          <p><strong>Sender Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 16px; background-color: #fff; border-left: 3px solid #0070f3;">
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Internal server messaging processing breakdown." },
      { status: 500 }
    );
  }
}