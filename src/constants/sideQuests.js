// Content for the Side Quests page (/side-quests).
// To add something new, append an entry to the matching list below.
//   status: 'cleared' (shipped) | 'active' (still experimenting) | 'locked' (coming soon) | 'played' (games I play)

const GH = 'https://github.com/Zia-Ur-Rehman1';
// Local images need the GitHub Pages base path in production
const asset = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;

export const StatusWindow = {
  name: 'Zia Ur Rehman',
  className: 'Backend Mage',
  level: 4,
  xpLabel: '4+ yrs in production',
  title: 'PSEB Registered Freelancer',
  location: 'Pakistan · PKT',
  mainGame: 'CoD4: Modern Warfare',
  stats: [
    { label: 'Ruby on Rails', value: 5 },
    { label: 'Real-time (ActionCable)', value: 4 },
    { label: 'AI & Agents', value: 4 },
    { label: 'React', value: 3 },
    { label: 'Hardware tinkering', value: 2 },
  ],
  special: 'N+1 Hunter',
};

export const Games = [
  {
    title: 'Chess Battle',
    year: '2026',
    status: 'cleared',
    image: asset('/images/games/chess-battle.jpg'),
    description:
      'Both players secretly deploy chess-piece armies on a 3D battlefield of forests, mountains and rivers, then watch them fight it out. Terrain is the weapon: high ground, ambushes in the trees, choke points through mountain passes.',
    tags: ['Godot 4', 'GDScript', '3D', 'Online by room code'],
    links: [],
    note: 'Released for Windows, macOS, Linux and Android',
  },
  {
    title: 'Shooter Buddies',
    year: '2026',
    status: 'cleared',
    image: asset('/images/games/shooter-buddies.jpg'),
    description:
      'Online arena shooter for Android where everyone gets the same gun: movement, timing, map knowledge and one special power decide who wins. 15 arenas with lasers, toxic floors, portals and line-of-sight stealth.',
    tags: ['Godot 4', 'Android', '1v1 online', 'Bots'],
    links: [],
    note: 'Playable v0.3',
  },
  {
    title: 'Siegeworks',
    year: '2026',
    status: 'active',
    image: asset('/images/games/siegeworks.jpg'),
    description:
      'A 1v1 fortress duel: five minutes to build, two minutes to find the hole in your rival’s defences. Lockstep netcode keeps two devices in perfect sync over WiFi, and it plays offline against the computer.',
    tags: ['TypeScript', 'Canvas 2D', 'Web + Android', 'Lockstep netcode'],
    links: [],
    note: 'Prototype',
  },
  {
    title: 'Snails: Human vs AI',
    year: '2020',
    status: 'cleared',
    description:
      'Turn-based grid game where you race an AI snail to claim the most squares. The AI plans its moves with a minimax search and a few heuristics: grab empty cells, hold the centre, pressure the opponent.',
    tags: ['Python', 'Arcade', 'Minimax AI'],
    links: [{ label: 'Repo', href: `${GH}/AI-based-Snails-Game` }],
    note: 'Co-built with Ali Raza Khan',
  },
  {
    title: 'Connect Four',
    year: '2024',
    status: 'cleared',
    description: 'The classic drop-four game, built in Rails to practise modelling game state and rules.',
    tags: ['Ruby', 'Rails', 'RSpec'],
    links: [{ label: 'Repo', href: `${GH}/Connect_four_app` }],
  },
  {
    title: 'Call of Duty 4: Modern Warfare',
    year: 'University',
    status: 'played',
    description: 'Not one I built, but the one I played the most: four years of CoD4 multiplayer through university.',
    tags: ['FPS', 'Multiplayer'],
    links: [],
    note: '4 years on the battlefield',
  },
  {
    title: 'Next game',
    status: 'locked',
    description: 'A new game is in the works. Check back soon.',
    tags: [],
    links: [],
  },
];

export const Arcs = [
  {
    title: 'Game Relay',
    year: '2026',
    status: 'cleared',
    description:
      'A tiny WebSocket server that pairs two players by a 5-letter room code and forwards their traffic without reading it, so one relay powers online play for all my games.',
    tags: ['Node.js', 'WebSockets', 'Docker'],
    links: [],
    note: 'Live, serving Chess Battle and Shooter Buddies',
  },
  {
    title: 'WhatsApp × Website',
    year: '2026',
    status: 'active',
    description:
      'Connecting WhatsApp to a Rails site through the Cloud API: each business plugs in its own number, messages land live in a web inbox, and staff reply from the browser.',
    tags: ['Rails', 'WhatsApp Cloud API', 'Webhooks', 'Turbo Streams'],
    links: [],
    note: 'Working on it right now',
  },
  {
    title: 'WhatsApp Travel Agent',
    year: '2026',
    status: 'active',
    description:
      'An OpenClaw AI agent on WhatsApp that answers Umrah and flight questions by driving supplier portals in a real browser.',
    tags: ['OpenClaw', 'AI agent', 'Browser automation'],
    links: [{ label: 'Repo', href: `${GH}/whatsapp_agent` }],
  },
  {
    title: 'Personal AI Assistant',
    year: '2026',
    status: 'active',
    description:
      'My own OpenClaw assistant with skills for Google Calendar, LinkedIn and Sonos, plus a Chrome automation extension tested with Playwright.',
    tags: ['OpenClaw', 'Skills', 'Chrome extension', 'Playwright'],
    links: [{ label: 'Repo', href: `${GH}/open_claw_setup` }],
  },
  {
    title: 'MCP on Rails',
    year: '2026',
    status: 'active',
    description:
      'A Rails app template that lets AI assistants work with your Rails models through the Model Context Protocol.',
    tags: ['Rails', 'MCP', 'AI tooling'],
    links: [{ label: 'Repo', href: `${GH}/MCP_Rails` }],
  },
  {
    title: 'extendable-rails',
    year: '2026',
    status: 'active',
    description: 'A Ruby gem with generators that scaffold features designed to be extended, with a full integration guide.',
    tags: ['Ruby gem', 'Rails generators'],
    links: [{ label: 'Repo', href: `${GH}/Behavior-evaluation` }],
  },
  {
    title: 'Job Aggregator',
    status: 'cleared',
    description: 'A daily n8n workflow that scrapes new job listings, logs them to Google Sheets and emails an AI-written shortlist.',
    tags: ['n8n', 'Apify', 'OpenAI'],
    links: [],
  },
  {
    title: 'Linux Quran Reader',
    year: '2025',
    status: 'cleared',
    description: 'The Quran PDF I read from would not fit my screen, so I built a small Linux desktop reader I can adjust to my needs.',
    tags: ['Python', 'GTK'],
    links: [{ label: 'Repo', href: `${GH}/Linux_Quran_PDF` }],
  },
  {
    title: 'Create Task by AI',
    year: '2025',
    status: 'cleared',
    description: 'Rails 8 app that turns a plain-English request into structured tasks with ChatGPT, kept clean with single-responsibility services.',
    tags: ['Rails 8', 'OpenAI', 'Docker'],
    links: [{ label: 'Repo', href: `${GH}/Create-Task-by-AI` }],
  },
];

export const EarlyArcs = [
  {
    title: 'Line-Following Car',
    year: '2022',
    status: 'cleared',
    description: 'An Arduino car that follows a track on its own using IR sensors and an L298N motor driver.',
    tags: ['Arduino', 'C++', 'IR sensors'],
    links: [
      { label: 'Demo', href: 'https://youtube.com/shorts/twKGXRqeInM' },
      { label: 'Repo', href: `${GH}/Line-Following-Car` },
    ],
  },
  {
    title: 'Face-Mask Detection',
    year: '2022',
    status: 'cleared',
    description: 'A Keras model that spots whether someone is wearing a mask, running live in the browser through the webcam.',
    tags: ['Keras', 'TensorFlow', 'OpenCV'],
    links: [
      { label: 'Demo', href: 'https://youtu.be/oNcrpbqnpvY' },
      { label: 'Repo', href: `${GH}/Web-based-FaceMask-Detection` },
    ],
  },
  {
    title: 'Evolutionary Template Matching',
    year: '2021',
    status: 'cleared',
    description: 'Finds where a small template image sits inside a larger photo by evolving candidate matches with natural-selection rules: fitness, selection, crossover, mutation.',
    tags: ['Python', 'Genetic algorithm'],
    links: [{ label: 'Repo', href: `${GH}/Evolutionary_Algorithm` }],
    note: 'Led a team of three',
  },
];

// { title, genre, note?, badge?, image?, imagePosition?, link? }  (remote covers from AniList, local ones in public/images/anime)
export const Watchlist = [
  {
    title: 'Naruto',
    genre: 'Shōnen · Ninja',
    note: 'The classic that never gets old.',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20-dE6UHbFFg1A5.jpg',
    imagePosition: 'center 85%',
    link: 'https://anilist.co/anime/20',
  },
  {
    title: 'Ling Cage: Incarnation',
    genre: 'Sci-fi · Post-apocalyptic',
    note: 'Survival in a ruined future, with stunning 3D animation.',
    image: asset('/images/anime/ling-cage-incarnation.jpg'),
    imagePosition: 'center 25%',
    link: 'https://anilist.co/anime/110459',
  },
  {
    title: 'Solo Leveling',
    genre: 'Action · Dark fantasy',
    note: 'The weakest hunter levels up alone. This page’s System windows are a nod to it.',
    image: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-it355ZgzquUd.png',
    link: 'https://anilist.co/anime/151807',
  },
];
export const WATCHLIST_SLOTS = 3;

// The story, told RPG-style
export const QuestLog = [
  {
    label: 'Ch. 1',
    title: 'A world of imagination',
    text: 'Once upon a time, everything in this world was just imagination. Protons, atoms, things no one could show me: I had to picture it all in my mind, with nothing real to touch.',
  },
  {
    label: 'Ch. 2',
    title: 'The first dungeon',
    text: 'Then I found a dungeon. After clearing it, I was rewarded with an ancient book written in an ancient language: code. For the first time, what I imagined answered back. Cast a spell, watch it work. Break it, see exactly what broke.',
  },
  {
    label: 'Ch. 3',
    title: 'Beginner mage',
    text: 'I started learning the spells inside it and became a beginner mage. My early experiments were reckless: Android ROMs and kernels, then my first apps.',
  },
  {
    label: 'Ch. 4',
    title: 'Choosing a class',
    text: 'As time went on, I kept exploring and trained in every class. In this world they go by other names: the Mage is Backend, the Knight is Frontend, and the Blacksmith is DevOps.',
  },
  {
    label: 'Ch. 5',
    title: 'Country-level mage',
    text: 'Today I am a country-level Mage: my spells run production systems that real people depend on. My sword arm holds its own, and I can still forge my own gear when the party needs it. The adventure continues.',
  },
];

// Rank scale, highest first: Country-level > City-level > Town-level
export const Classes = [
  {
    name: 'Mage',
    world: 'Backend',
    rank: 'Country-level',
    level: 5,
    main: true,
    icon: 'mage',
    lore: 'Main class. Bends data, queues and real-time channels to my will.',
    skills: ['Ruby on Rails', 'PostgreSQL', 'Redis', 'Background jobs', 'REST & GraphQL', 'ActionCable', 'FastAPI'],
  },
  {
    name: 'Knight',
    world: 'Frontend',
    rank: 'City-level',
    level: 4,
    icon: 'knight',
    lore: 'Holds the front line: the screens people actually touch.',
    skills: ['React', 'Hotwire (Turbo, Stimulus)', 'Tailwind CSS', 'TypeScript'],
  },
  {
    name: 'Blacksmith',
    world: 'DevOps',
    rank: 'Town-level',
    level: 3,
    icon: 'blacksmith',
    lore: 'Forges and repairs the gear: servers, pipelines and deploys.',
    skills: ['Docker', 'AWS', 'Hetzner', 'Kamal', 'Capistrano', 'GitHub Actions'],
  },
];
