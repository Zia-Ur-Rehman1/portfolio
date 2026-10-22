# Portfolio Chat Worker

Cloudflare Worker behind the portfolio's "Ask about Zia" chat bubble. It holds the
Gemini API key, adds Zia's facts (generated from the site's own data), keeps answers
to availability and expertise, rate-limits visitors (6 messages/min per IP) and
streams the reply back to the browser.

## How the knowledge stays in sync
`npm run knowledge` reads `src/constants/*.js` and `Skills.js` from the portfolio and
writes `src/knowledge.js`. It runs automatically before `dev` and `deploy`, so after
editing the site's content, redeploying the worker updates the bot.
Availability lives in `src/constants/availability.js`.

## Local test
1. Get a key at https://aistudio.google.com/apikey
2. Put your keys into `.dev.vars` as `GEMINI_API_KEYS=key1,key2` (primary first). Never commit it.
3. `npm install && npm run dev` (serves on http://localhost:8787)
4. In the portfolio, `.env.local` has `NEXT_PUBLIC_CHAT_ENDPOINT=http://localhost:8787`
5. `npm run test:scope` asks on- and off-topic questions and prints the answers.

## Deploy
```bash
npx wrangler login                    # once, opens the browser
npx wrangler secret put GEMINI_API_KEYS   # paste key1,key2 (comma-separated, primary first)
npm run deploy                        # prints https://portfolio-chat.<subdomain>.workers.dev
```
Then set `NEXT_PUBLIC_CHAT_ENDPOINT` to that URL in the portfolio's `.env.local`
and rebuild/deploy the site.

## Settings
- Models: `GEMINI_MODELS` in `wrangler.toml`, tried in order
  (`gemini-3.5-flash-lite,gemini-flash-lite-latest,gemini-flash-latest`).
- Fallback: within each model every key is tried in order. Quota/auth errors (429/401/403)
  move to the next key; overload/outage errors (503/5xx, unreachable) move to the next model.
  If everything is overloaded it waits 1.5s and retries the primary once.
- `GEMINI_THINKING_LEVEL` (default `low`) keeps answers fast; `off` omits it.
- Tests: `node scripts/fallback-test.mjs` (simulated failures, no network),
  `node scripts/node-run.mjs` (real Gemini, runs the worker in Node).
- Rate limit: `[[unsafe.bindings]]` in `wrangler.toml`.
- Testing without a key: run `node scripts/fake-gemini.mjs` and add
  `GEMINI_BASE_URL=http://localhost:8799` to `.dev.vars`.
