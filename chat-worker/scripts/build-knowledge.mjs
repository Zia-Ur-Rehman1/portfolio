// Builds src/knowledge.js: a plain-text fact sheet about Zia, generated from the
// portfolio's own data files so the chat assistant never drifts from the site.
// Run: npm run knowledge   (also runs automatically before dev/deploy)
import { build } from 'esbuild';
import { writeFile, mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const src = (p) => path.join(root, 'src', p);

// The data files import icons and JSX. Stub them: we only need the text.
const stubPlugin = {
  name: 'stub-ui',
  setup(b) {
    b.onResolve({ filter: /^(react|react\/jsx-runtime|react-icons\/.*)$/ }, (args) => ({
      path: args.path,
      namespace: 'stub',
    }));
    b.onLoad({ filter: /.*/, namespace: 'stub' }, () => ({
      contents:
        'const h = () => null; module.exports = new Proxy({ jsx: h, jsxs: h, Fragment: h, createElement: h }, { get: (t, k) => (k in t ? t[k] : h) });',
      loader: 'js',
    }));
  },
};

const entry = `
export * from ${JSON.stringify(src('constants/constants.js'))};
export * as SQ from ${JSON.stringify(src('constants/sideQuests.js'))};
export { Availability } from ${JSON.stringify(src('constants/availability.js'))};
export { Skills } from ${JSON.stringify(src('components/Technologies/Skills.js'))};
export { PSEB_CREDENTIAL } from ${JSON.stringify(src('constants/site.js'))};
`;

const dir = await mkdtemp(path.join(tmpdir(), 'knowledge-'));
const outfile = path.join(dir, 'data.mjs');
await build({
  stdin: { contents: entry, resolveDir: root, loader: 'js' },
  bundle: true,
  format: 'esm',
  platform: 'node',
  outfile,
  jsx: 'automatic',
  loader: { '.js': 'jsx' },
  plugins: [stubPlugin],
  logLevel: 'error',
});
const d = await import(pathToFileURL(outfile).href);
await rm(dir, { recursive: true, force: true });

const lines = [];
const out = (s = '') => lines.push(s);
const list = (arr) => arr.forEach((x) => out(`- ${x}`));

const A = d.Availability;
out('# Zia Ur Rehman: facts for the portfolio assistant');
out();
out('## Profile');
out('- Senior Ruby on Rails engineer based in Pakistan. Builds the backends that real businesses run on.');
out('- Main stack: Ruby on Rails. Also ships React frontends and Python services (Django, FastAPI).');
out('- 4+ years building SaaS, real-time apps and integrations for teams in the US, UAE and Saudi Arabia.');
out('- Builds with Claude Code every day for routine work, spending his own time on design, review and hard problems.');
out(`- ${d.PSEB_CREDENTIAL.label} (${d.PSEB_CREDENTIAL.issuer}), registration ${d.PSEB_CREDENTIAL.registrationNo}, valid till ${d.PSEB_CREDENTIAL.validTill}.`);
out();
out('## Availability');
out(`- Status: ${A.status}`);
out(`- Open to: ${A.openTo.join('; ')}.`);
out(`- Work mode: ${A.workMode}`);
out(`- Working hours: ${A.workingHours}`);
out(`- ${A.startDate.partTime}`);
out(`- ${A.startDate.fullTime}`);
out(`- Rates: ${A.rates}`);
out(
  `- Contact: email ${A.contact.email}; book a 30-min call ${A.contact.calendly}; LinkedIn ${A.contact.linkedin}; GitHub ${A.contact.github}.`
);
out();
out('## Work experience');
d.AchievementsData.forEach((j) => {
  out(`### ${j.role}, ${j.company} (${j.duration}, ${j.location})`);
  list(j.achievements);
});
out();
out('## Independent products (built on his own)');
d.AiNativeProjectsData.forEach((p) => {
  out(`### ${p.role}, ${p.company} (${p.location})${p.link ? `, live at ${p.link}` : ''}`);
  list(p.achievements);
});
out();
out('## Projects shown on the portfolio');
d.ProjectsData.forEach((p) => out(`- ${p.title} (${p.category}): ${p.description} Link: ${p.visit}`));
out();
out('## AI and automation pipelines he has built');
d.AutomationData.forEach((a) =>
  out(`- ${a.title} (${a.project}, ${a.status}): ${a.description} Outcome: ${a.outcome}. Stack: ${a.stack.join(', ')}.`)
);
out();
out('## Services he offers');
d.ServicesData.forEach((s) => out(`- ${s.title}: ${s.description}`));
out();
out('## Skills (tier: daily = primary stack on live products, production = shipped in at least one project, fluent = working knowledge)');
d.Skills.forEach((c) => {
  const items = c.skills.map((s) => {
    const n = s.usedIn?.length || 0;
    const tier = s.tier || (n >= 4 ? 'daily' : n >= 1 ? 'production' : 'fluent');
    return `${s.title} (${tier})`;
  });
  out(`- ${c.category}: ${items.join(', ')}`);
});
out();
out('## What colleagues say (testimonials)');
d.TestimonialsData.forEach((t) => out(`- ${t.name}, ${t.role}: "${t.text}"`));
out();
out('## Side projects and interests (from his Side Quests page)');
d.SQ.Games.filter((g) => g.status !== 'locked').forEach((g) =>
  out(`- Game: ${g.title}${g.year ? ` (${g.year})` : ''}: ${g.description}`)
);
d.SQ.Arcs.forEach((a) => out(`- Experiment: ${a.title}: ${a.description}`));
out(`- Anime he watches: ${d.SQ.Watchlist.map((w) => w.title).join(', ')}.`);

const text = lines.join('\n');
const target = path.join(here, '../src/knowledge.js');
await writeFile(
  target,
  `// GENERATED by scripts/build-knowledge.mjs. Do not edit by hand.\nexport const KNOWLEDGE = ${JSON.stringify(text)};\n`
);
console.log(`knowledge.js written: ${text.length} chars, ~${Math.round(text.length / 4)} tokens`);
