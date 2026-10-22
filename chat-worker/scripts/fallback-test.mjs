// Checks the key/model fallback order against a simulated Gemini that fails on
// purpose: model "busy-model" always returns 503, key "spent-key" always 429.
// Usage: node scripts/fallback-test.mjs
import http from 'node:http';
import worker from '../src/worker.js';

const calls = [];
const server = http.createServer((req, res) => {
  const model = decodeURIComponent(req.url.split('/models/')[1].split(':')[0]);
  const key = req.headers['x-goog-api-key'];
  calls.push(`${model}/${key}`);
  if (model === 'busy-model') {
    res.writeHead(503).end('{"error":{"code":503,"message":"high demand"}}');
  } else if (key === 'spent-key') {
    res.writeHead(429).end('{"error":{"code":429,"message":"quota"}}');
  } else {
    res.writeHead(200, { 'Content-Type': 'text/event-stream' });
    res.end(`data: ${JSON.stringify({ candidates: [{ content: { parts: [{ text: `answered by ${model} with ${key}` }] } }] })}\n\n`);
  }
});
await new Promise((r) => server.listen(8798, r));

const ask = async (env) => {
  calls.length = 0;
  const res = await worker.fetch(
    new Request('http://local/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Origin: 'http://localhost:3000' },
      body: JSON.stringify({ messages: [{ role: 'user', text: 'Is Zia available?' }] }),
    }),
    { GEMINI_BASE_URL: 'http://localhost:8798', ...env }
  );
  const text = res.ok ? (await res.text()).match(/"t":"([^"]*)"/)?.[1] : `HTTP ${res.status}`;
  return { text, calls: [...calls] };
};

const cases = [
  ['busy model -> next model', { GEMINI_MODELS: 'busy-model,good-model', GEMINI_API_KEYS: 'key-a,key-b' }],
  ['spent key -> next key', { GEMINI_MODELS: 'good-model', GEMINI_API_KEYS: 'spent-key,key-b' }],
  ['both at once', { GEMINI_MODELS: 'busy-model,good-model', GEMINI_API_KEYS: 'spent-key,key-b' }],
  ['everything down', { GEMINI_MODELS: 'busy-model', GEMINI_API_KEYS: 'key-a' }],
];
for (const [name, env] of cases) {
  const { text, calls: c } = await ask(env);
  console.log(`${name}\n  tried: ${c.join(' -> ')}\n  result: ${text}`);
}
server.close();
