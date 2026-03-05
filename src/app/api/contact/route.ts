import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

export async function POST(request: Request) {
  if (!resend) {
    return NextResponse.json(
      { message: 'Server email is not configured.' },
      { status: 500 },
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  if (!toEmail) {
    return NextResponse.json(
      { message: 'CONTACT_TO_EMAIL is missing in environment variables.' },
      { status: 500 },
    );
  }

  try {
    const body = (await request.json()) as {
      fullName?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    const fullName = body.fullName?.trim() || '';
    const email = body.email?.trim() || '';
    const phone = body.phone?.trim() || '';
    const message = body.message?.trim() || '';

    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 },
      );
    }

    const safeFullName = escapeHtml(fullName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');
    const submittedAt = new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    await resend.emails.send({
      from: `WEFI Contact <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New Contact Form Message from ${fullName}`,
      text: `
New Contact Form Message

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Submitted: ${submittedAt}

Message:
${message}
      `.trim(),
      html: `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0;padding:0;background:#eef3ff;font-family:Arial,Helvetica,sans-serif;">
          <tr>
            <td align="center" style="padding:24px 12px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;background:#ffffff;border:1px solid #dbe6ff;border-radius:14px;overflow:hidden;">
                <tr>
                  <td style="padding:18px 24px;background:linear-gradient(135deg,#1b48d4 0%,#2a66f1 100%);color:#ffffff;">
                    <p style="margin:0;font-size:12px;letter-spacing:1.6px;text-transform:uppercase;opacity:0.9;">WEFI - Institute</p>
                    <h2 style="margin:6px 0 0;font-size:22px;line-height:1.3;font-weight:700;">New Contact Form Submission</h2>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 24px 8px;color:#1f2a44;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:separate;border-spacing:0 10px;">
                      <tr>
                        <td style="width:140px;font-size:14px;color:#6b7a99;"><strong>Name</strong></td>
                        <td style="font-size:15px;color:#1f2a44;">${safeFullName}</td>
                      </tr>
                      <tr>
                        <td style="width:140px;font-size:14px;color:#6b7a99;"><strong>Email</strong></td>
                        <td style="font-size:15px;color:#1f2a44;">${safeEmail}</td>
                      </tr>
                      <tr>
                        <td style="width:140px;font-size:14px;color:#6b7a99;"><strong>Phone</strong></td>
                        <td style="font-size:15px;color:#1f2a44;">${safePhone}</td>
                      </tr>
                      <tr>
                        <td style="width:140px;font-size:14px;color:#6b7a99;"><strong>Submitted</strong></td>
                        <td style="font-size:15px;color:#1f2a44;">${submittedAt}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 24px 24px;">
                    <div style="border:1px solid #d7e2ff;border-radius:10px;background:#f8faff;padding:14px;">
                      <p style="margin:0 0 8px;font-size:14px;color:#36529b;font-weight:700;">Message</p>
                      <p style="margin:0;font-size:15px;line-height:1.7;color:#1f2a44;">${safeMessage}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:14px 24px 22px;border-top:1px solid #e7edff;background:#fbfcff;">
                    <p style="margin:0 0 6px;font-size:12px;line-height:1.5;color:#7a879f;">
                      This email was generated from the WEFI website contact form.
                    </p>
                    <p style="margin:0;font-size:12px;line-height:1.5;color:#7a879f;">
                      Website: <a href="https://wefi.institute" style="color:#2a66f1;text-decoration:none;">wefi.institute</a>
                      &nbsp;|&nbsp; Phone: +91 9633 687 336
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form mail failed:', error);

    return NextResponse.json(
      { message: 'Failed to send message. Please try again.' },
      { status: 500 },
    );
  }
}
