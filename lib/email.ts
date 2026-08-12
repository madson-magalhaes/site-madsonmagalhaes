import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  industry: string;
  message: string;
  timestamp: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(data: ContactFormData) {
  const emailHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: #FF6700;
            padding: 30px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .content {
            padding: 30px 20px;
          }
          .field {
            margin-bottom: 20px;
            border-bottom: 1px solid #e0e0e0;
            padding-bottom: 15px;
          }
          .field:last-child {
            border-bottom: none;
          }
          .label {
            font-weight: 600;
            color: #FF6700;
            font-size: 14px;
            text-transform: uppercase;
            margin-bottom: 5px;
          }
          .value {
            color: #333;
            font-size: 15px;
            line-height: 1.5;
            word-break: break-word;
          }
          .footer {
            background-color: #f9f9f9;
            padding: 20px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
            font-size: 12px;
            color: #666;
          }
          .timestamp {
            color: #999;
            font-size: 12px;
            margin-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📩 Novo Contato Recebido</h1>
          </div>

          <div class="content">
            <div class="field">
              <div class="label">Nome</div>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>

            <div class="field">
              <div class="label">Email</div>
              <div class="value">
                <a href="mailto:${escapeHtml(data.email)}" style="color: #FF6700; text-decoration: none;">
                  ${escapeHtml(data.email)}
                </a>
              </div>
            </div>

            <div class="field">
              <div class="label">Empresa</div>
              <div class="value">${escapeHtml(data.company)}</div>
            </div>

            <div class="field">
              <div class="label">Setor/Indústria</div>
              <div class="value">${escapeHtml(data.industry)}</div>
            </div>

            <div class="field">
              <div class="label">Mensagem</div>
              <div class="value">${escapeHtml(data.message).replace(/\n/g, "<br>")}</div>
            </div>
          </div>

          <div class="footer">
            <p>Este é um email automático do seu site de consultoria em IA.</p>
            <div class="timestamp">Recebido em: ${new Date(data.timestamp).toLocaleString("pt-BR")}</div>
          </div>
        </div>
      </body>
    </html>
  `;

  const emailText = `
Nova Submissão de Contato
========================

Nome: ${data.name}
Email: ${data.email}
Empresa: ${data.company}
Setor: ${data.industry}

Mensagem:
${data.message}

---
Recebido em: ${new Date(data.timestamp).toLocaleString("pt-BR")}
  `.trim();

  try {
    const info = await transporter.sendMail({
      from: `"Consultoria em IA" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO,
      subject: `Novo Contato: ${data.name} - ${data.company}`,
      text: emailText,
      html: emailHtml,
      replyTo: data.email,
    });

    console.log("Email sent successfully:", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
