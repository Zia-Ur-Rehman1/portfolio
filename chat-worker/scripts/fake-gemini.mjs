// Local stand-in for the Gemini streaming API, for testing the worker and chat
// widget without a real key. Usage: node scripts/fake-gemini.mjs  (port 8799)
// then put GEMINI_BASE_URL=http://localhost:8799 in .dev.vars
import http from 'node:http';

const answer =
  'Yes, Zia is available now. He is open to full-time, part-time and freelance work, fully remote, and works 12 PM to 4 AM Pakistan time. Book a call at https://calendly.com/zia-rehman-web/30min or email zia.rehman.web@gmail.com.';

http
  .createServer((req, res) => {
    let body = '';
    req.on('data', (c) => (body += c));
    req.on('end', async () => {
      res.writeHead(200, { 'Content-Type': 'text/event-stream' });
      for (const word of answer.split(/(?<= )/)) {
        res.write(`data: ${JSON.stringify({ candidates: [{ content: { parts: [{ text: word }] } }] })}\n\n`);
        await new Promise((r) => setTimeout(r, 25));
      }
      res.end();
    });
  })
  .listen(8799, () => console.log('fake gemini on :8799'));
