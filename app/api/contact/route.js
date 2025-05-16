import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();
    console.log("Received request body:", body);

    // Validate the form data
    const { name, email, phone, description } = body;

    if (!name || !email || !phone || !description) {
      console.log("Missing required fields:", {
        name,
        email,
        phone,
        description,
      });
      return NextResponse.json(
        { error: "جميع الحقول مطلوبة" },
        { status: 400 }
      );
    }

    console.log("Attempting to send email with Resend...");
    console.log("API Key present:", !!process.env.RESEND_API_KEY);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev", // Use this for testing
      to: "zakonoziko@gmail.com",
      subject: "رسالة جديدة من نموذج الاتصال",
      react: EmailTemplate({ name, email, phone, description }),
    });

    if (error) {
      console.error("Detailed Resend error:", error);
      return NextResponse.json(
        { error: "حدث خطأ أثناء إرسال البريد الإلكتروني", details: error },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", data);

    // Return a success response
    return NextResponse.json(
      { success: true, message: "تم استلام رسالتك بنجاح" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Detailed error in contact form processing:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء معالجة النموذج", details: error.message },
      { status: 500 }
    );
  }
}
