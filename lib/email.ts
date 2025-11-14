import nodemailer from "nodemailer";

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: EmailData) {
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(process.env.SMTP_PORT || "587"),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Email template
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #00d9ff 0%, #00b8d9 100%);
            padding: 30px;
            border-radius: 10px 10px 0 0;
            text-align: center;
          }
          .header h1 {
            color: white;
            margin: 0;
            font-size: 24px;
          }
          .content {
            background: #f9fafb;
            padding: 30px;
            border: 1px solid #e5e7eb;
            border-top: none;
          }
          .field {
            margin-bottom: 20px;
          }
          .field-label {
            font-weight: 600;
            color: #6b7280;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
          }
          .field-value {
            color: #111827;
            font-size: 16px;
          }
          .message-box {
            background: white;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            margin-top: 10px;
          }
          .footer {
            background: #111827;
            padding: 20px;
            border-radius: 0 0 10px 10px;
            text-align: center;
            color: #9ca3af;
            font-size: 12px;
          }
          .footer a {
            color: #00d9ff;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>📧 New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">From</div>
            <div class="field-value">${data.name}</div>
          </div>
          <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value">
              <a href="mailto:${data.email}" style="color: #00d9ff; text-decoration: none;">
                ${data.email}
              </a>
            </div>
          </div>
          <div class="field">
            <div class="field-label">Subject</div>
            <div class="field-value">${data.subject || "No subject"}</div>
          </div>
          <div class="field">
            <div class="field-label">Message</div>
            <div class="message-box">
              ${data.message.replace(/\n/g, "<br>")}
            </div>
          </div>
        </div>
        <div class="footer">
          Sent from <a href="https://azadpatel.in">azadpatel.in</a> portfolio contact form
        </div>
      </body>
    </html>
  `;

  const plainTextContent = `
New Contact Form Submission

From: ${data.name}
Email: ${data.email}
Subject: ${data.subject || "No subject"}

Message:
${data.message}

---
Sent from azadpatel.in portfolio contact form
  `;

  // Send email
  try {
    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER || "azadpatelc@gmail.com",
      subject: `Portfolio Contact: ${data.subject || "New Message"}`,
      text: plainTextContent,
      html: htmlContent,
      replyTo: data.email,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email send error:", error);
    throw new Error("Failed to send email");
  }
}
