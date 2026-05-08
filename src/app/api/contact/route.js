import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Get current date and time
    const now = new Date();
    const dateTime = now.toLocaleString();

    // Get IP address
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || req.connection?.remoteAddress || 'Unknown';

    // Get user agent
    const userAgent = req.headers.get('user-agent') || 'Unknown';

    // Parse device type
    const isMobile = /Mobile|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    const deviceType = isMobile ? 'Mobile' : 'Laptop/Desktop';

    // Parse browser
    let browser = 'Unknown';
    if (userAgent.includes('Chrome')) browser = 'Chrome';
    else if (userAgent.includes('Firefox')) browser = 'Firefox';
    else if (userAgent.includes('Safari')) browser = 'Safari';
    else if (userAgent.includes('Edge')) browser = 'Edge';
    else if (userAgent.includes('Opera')) browser = 'Opera';

    // Get location from IP
    let location = 'Unknown';
    try {
      const locationResponse = await fetch(`https://ipapi.co/${ip}/json/`);
      const locationData = await locationResponse.json();
      if (locationData.city && locationData.country_name) {
        location = `${locationData.city}, ${locationData.country_name}`;
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    }

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use your verified domain
      to: process.env.RESEND_MAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; color: #1f2937; background: #f9fafb; margin: 0; padding: 20px; }
    .container { width: 100%; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 24px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
    
    /* Header with Brand Accent */
    .header { background: #111827; padding: 40px 24px; text-align: center; border-bottom: 4px solid #f27f0c; }
    .header h1 { margin: 0; font-size: 22px; color: #ffffff; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 900; }
    
    .section { padding: 32px 24px; }
    .section-title { margin: 0 0 24px; font-size: 14px; color: #f27f0c; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 800; border-bottom: 1px solid #f3f4f6; padding-bottom: 8px; }
    
    .field { margin-bottom: 20px; }
    .field-title { display: block; margin-bottom: 4px; font-size: 11px; font-weight: 700; color: #9ca3af; text-transform: uppercase; letter-spacing: 0.1em; }
    .field-value { margin: 0; font-size: 16px; color: #111827; line-height: 1.5; }
    
    /* Message specific styling */
    .message-box { background: #f8fafc; padding: 20px; border-radius: 16px; border-left: 4px solid #f27f0c; margin-top: 8px; font-style: italic; color: #374151; }
    
    .grid { display: flex; flex-wrap: wrap; gap: 20px; }
    .grid-item { flex: 1; min-width: 200px; }
    
    .footer { padding: 24px; background: #111827; color: #9ca3af; font-size: 12px; text-align: center; }
    .footer strong { color: #f27f0c; }
    
    .meta-pre { background: #1f2937; color: #e5e7eb; padding: 16px; border-radius: 12px; font-family: 'JetBrains Mono', monospace; font-size: 11px; line-height: 1.4; overflow-x: auto; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Inquiry</h1>
    </div>

    <div class="section">
      <h2 class="section-title">Contact Information</h2>
      <div class="grid">
        <div class="grid-item">
          <div class="field">
            <span class="field-title">Full Name</span>
            <p class="field-value"><strong>${name}</strong></p>
          </div>
        </div>
        <div class="grid-item">
          <div class="field">
            <span class="field-title">Email Address</span>
            <p class="field-value">${email}</p>
          </div>
        </div>
      </div>

      <div class="field" style="margin-top: 10px;">
        <span class="field-title">Message</span>
        <div class="message-box">
          ${message.replace(/\n/g, '<br />')}
        </div>
      </div>
    </div>

    <div class="section" style="background: #fcfcfc; border-top: 1px solid #f3f4f6;">
      <h2 class="section-title">Metadata & Technical Specs</h2>
      <div class="grid">
        <div class="grid-item">
          <div class="field">
            <span class="field-title">Timestamp</span>
            <p class="field-value" style="font-size: 13px;">${dateTime}</p>
          </div>
          <div class="field">
            <span class="field-title">Location / IP</span>
            <p class="field-value" style="font-size: 13px;">${location} (${ip})</p>
          </div>
        </div>
        <div class="grid-item">
          <div class="field">
            <span class="field-title">Device / Browser</span>
            <p class="field-value" style="font-size: 13px;">${deviceType} — ${browser}</p>
          </div>
        </div>
      </div>
      
      <div class="field">
        <span class="field-title">Full User Agent</span>
        <div class="meta-pre">${userAgent}</div>
      </div>
    </div>

    <div class="footer">
      This is an automated notification from your <strong>Portfolio System</strong>.
    </div>
  </div>
</body>
</html>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}