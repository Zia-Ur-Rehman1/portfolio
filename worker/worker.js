// Cloudflare Worker that proxies portfolio contact-form submissions to Resend.
// Deploy with: wrangler deploy
// Set secrets with: wrangler secret put RESEND_API_KEY (and CONTACT_RECIPIENT, RESEND_FROM)

const DEFAULT_FROM = 'Portfolio Contact <onboarding@resend.dev>';

const ALLOWED_ORIGINS = [
  'https://zia-ur-rehman1.github.io',
  'http://localhost:3000',
  'http://localhost:3001',
];

const escapeHtml = (str) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const corsHeaders = (origin) => {
  const allow = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
};

const json = (body, status, cors) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', ...cors },
  });

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const cors = corsHeaders(origin);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method Not Allowed' }, 405, cors);
    }

    if (!env.RESEND_API_KEY || !env.CONTACT_RECIPIENT) {
      return json({ error: 'Email service not configured.' }, 500, cors);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: 'Invalid JSON body.' }, 400, cors);
    }

    const { name, email, company, message, website } = body || {};

    // Honeypot — bots fill `website`. Pretend success.
    if (website) {
      return json({ success: true }, 200, cors);
    }

    if (!name || !email || !message) {
      return json({ error: 'Name, email, and message are required.' }, 400, cors);
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company || 'N/A');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    const fromAddress = env.RESEND_FROM || DEFAULT_FROM;

    const resendResp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromAddress,
        to: env.CONTACT_RECIPIENT,
        reply_to: email,
        subject: `New inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'N/A'}\n\nMessage:\n${message}`,
        html: `
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Company:</strong> ${safeCompany}</p>
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        `,
      }),
    });

    if (!resendResp.ok) {
      const errBody = await resendResp.text().catch(() => '');
      console.error('Resend rejected:', resendResp.status, errBody);
      return json({ error: 'Email provider rejected the request.' }, 502, cors);
    }

    return json({ success: true }, 200, cors);
  },
};
