# Portfolio Contact Worker

Tiny Cloudflare Worker that proxies contact-form submissions from the static GitHub Pages site to Resend. Frontend is at `https://zia-ur-rehman1.github.io/portfolio/`; the Worker accepts CORS POSTs from there and from `localhost` for dev.

## One-time setup

```bash
cd worker
npm install
npx wrangler login          # opens browser → log into your Cloudflare account
npx wrangler secret put RESEND_API_KEY
npx wrangler secret put CONTACT_RECIPIENT
npx wrangler secret put RESEND_FROM       # optional; default is onboarding@resend.dev
npx wrangler deploy
```

After `deploy`, Wrangler prints a URL like:

```
https://portfolio-contact.<your-subdomain>.workers.dev
```

Copy that URL — paste it as `NEXT_PUBLIC_CONTACT_ENDPOINT` in the portfolio's `.env.local` and again at GitHub Pages build time, then redeploy the portfolio.

## Local dev

```bash
npm run dev
# Worker runs at http://localhost:8787
```

For local secrets, create `worker/.dev.vars` (gitignored):

```
RESEND_API_KEY=re_xxx
CONTACT_RECIPIENT=zia.rehman.web@gmail.com
RESEND_FROM=Portfolio Contact <onboarding@resend.dev>
```

## Watch logs in production

```bash
npm run tail
```

## Cost

Cloudflare Workers free tier: 100,000 requests/day. Resend free tier: 100 emails/day. A portfolio contact form will use ~0% of either.
