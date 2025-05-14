import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate the form data
    const { name, email, phone, description } = body;

    if (!name || !email || !phone || !description) {
      return NextResponse.json(
        { error: "جميع الحقول مطلوبة" },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Swift Contact Form <onboarding@resend.dev>",
      to: "zakonoziko@gmail.com",
      subject: "رسالة جديدة من نموذج الاتصال",
      react: EmailTemplate({ name, email, phone, description }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "حدث خطأ أثناء إرسال البريد الإلكتروني" },
        { status: 500 }
      );
    }

    // Return a success response
    return NextResponse.json(
      { success: true, message: "تم استلام رسالتك بنجاح" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);

    return NextResponse.json(
      { error: "حدث خطأ أثناء معالجة النموذج" },
      { status: 500 }
    );
  }
}
