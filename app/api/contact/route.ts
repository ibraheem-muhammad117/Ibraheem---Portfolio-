import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, phone, message } = body

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // This is Resend's default sender for free accounts
      to: ["ibraheemmuhammad117@gmail.com"],
      subject: `New Portfolio Contact: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
          <div style="background: linear-gradient(135deg, #64748b 0%, #475569 100%); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Contact</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h2 style="color: #334155; margin: 0 0 10px 0; font-size: 18px;">Contact Information</h2>
              <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; border-left: 4px solid #64748b;">
                <p style="margin: 5px 0; color: #475569;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0; color: #475569;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
                ${company ? `<p style="margin: 5px 0; color: #475569;"><strong>Company:</strong> ${company}</p>` : ""}
                ${phone ? `<p style="margin: 5px 0; color: #475569;"><strong>Phone:</strong> ${phone}</p>` : ""}
              </div>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h2 style="color: #334155; margin: 0 0 10px 0; font-size: 18px;">Message</h2>
              <div style="background: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">
                <p style="margin: 0; color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #64748b; font-size: 14px;">
                Sent from your portfolio website • ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Portfolio Contact from ${name}

Contact Information:
- Name: ${name}
- Email: ${email}
${company ? `- Company: ${company}` : ""}
${phone ? `- Phone: ${phone}` : ""}

Message:
${message}

Sent: ${new Date().toLocaleString()}
      `,
    })

    console.log("Email sent successfully:", emailData)

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
      emailId: emailData.data?.id,
    })
  } catch (error) {
    console.error("Email sending failed:", error)

    // Fallback: still log the contact for admin dashboard
    console.log("=== CONTACT FORM SUBMISSION (EMAIL FAILED) ===")
    console.log("Contact form data:", {
      name: (await request.json()).name,
      email: (await request.json()).email,
      company: (await request.json()).company,
      phone: (await request.json()).phone,
      message: (await request.json()).message,
      timestamp: new Date().toISOString(),
    })
    console.log("==========================================")

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send message. Please try emailing directly at ibraheemmuhammad117@gmail.com",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
