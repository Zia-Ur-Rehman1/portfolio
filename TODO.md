# Portfolio TODO

## AI guide chatbot (bottom-right corner)

**Status (2026-10-21):** built and tested locally with a fake Gemini server (`chat-worker/`, `src/components/ChatWidget/`). Remaining: real Gemini key test, `wrangler login`, deploy the worker, set `NEXT_PUBLIC_CHAT_ENDPOINT` for production.

An AI chat assistant that guides visitors: answers questions about Zia's experience, skills, projects and availability, and points them to the right section, the resume or the contact form.

Notes for when we build it:

- **Placement:** bottom-right corner. That spot currently holds the floating "Book a call" button (`src/components/BookCallFab`), so either merge the two (chat bubble with a "Book a call" action inside) or move one of them.
- **Backend:** the site is static on GitHub Pages, so the API key cannot live in the frontend. Proxy requests through a Cloudflare Worker, like the existing contact-form worker in `worker/`.
- **Knowledge:** answer only from the portfolio's own content (`src/constants/constants.js`, `src/constants/sideQuests.js`, resume) so it never invents experience.
- **Model:** Google Gemini free tier. Order: 3.5 Flash-Lite → latest Flash-Lite → latest Flash, with multiple API keys as fallback (`chat-worker/wrangler.toml`, `GEMINI_API_KEYS` secret).
- **Guardrails:** rate limiting per IP, short answers, a clear "I'm an AI assistant" label, and a fallback to email / WhatsApp / Calendly.
- **Mobile:** must not cover content or the navbar menu on small screens.
