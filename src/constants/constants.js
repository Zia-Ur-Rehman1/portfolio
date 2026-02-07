import { FaCalendar, FaUsers, FaClock, FaCogs, FaServer } from 'react-icons/fa';
import { FiTarget } from "react-icons/fi";
export const ProjectsData = [
  {
    title: 'EcoLink',
    category: 'Insurance Communications',
    description: 'Cloud communications platform for insurance agencies that connects RingCentral with AMS360 and EPIC to unify calls, SMS, voicemail, and compliance logging.' ,
    tags: ['Ruby on Rails', 'JavaScript', 'Slim', 'Turbo', 'ActionCable', 'PostgreSQL', 'Sidekiq', 'Redis', 'RingCentral', 'AMS360', 'Epic', 'Infobip', '8x8', 'Slack', 'WebSockets', 'Multi-Tenancy', 'AWS ( EC2, S3 )'],
    visit: 'https://ecolink.inteveo.com',
    id: 0,
  },
  {
    title: 'Intellirent',
    category: 'Real Estate & Rental Marketing',
    description: 'Paperless rental marketing and tenant screening platform used by residential leasing teams to collect applications, documents, and Experian-backed reports in one place.',
    tags: ['Ruby', 'Rails', 'React', 'AWS (S3, EventBridge, Lambda)', 'JavaScript', 'Jira', 'Heroku','HAML','HTML/CSS (Bootstrap)', 'Atlassian', 'Stripe', 'PostgreSQL', 'Redis', 'PDF Prawn/Wicked', 'Experian', 'Hubspot'],
    visit: 'https://myintellirent.com',
    id: 1,
  },
  {
    title: 'PC - Product Customization',
    category: 'SaaS & E-Commerce',
    description: 'Shopify app that lets merchants offer deep product customization (engraving, swatches, image uploads, pricing rules) with interactive visuals, boosting AOV and personalization.',
    tags: [
      'Rails', 'PostgreSQL', 'Ruby', 'React', 'Shopify',
      'Remix', 'Polaris', 'Redis', 'JavaScript (ES6)', 'TypeScript',
      'DigitalOcean', 'Hetzner', 'Coolify', 'Sidekiq', 'GraphQL', 'Azure', 'Tailwind CSS'
    ],
    visit: 'https://apps.shopify.com/product-customizer',
    id: 2,
  },
  {
    title: 'Biomark',
    category: 'HealthCare',
    description: 'Healthcare connectivity platform that keeps patients, doctors, and labs in sync through secure, HL7-powered data pipelines and dashboards.',
    tags: ['Rails', 'Ruby', 'Docker', 'PostMan', 'Ngrok', 'Jenkins', 'JavaScript (ES6)', 'PostgreSQL', 'Sidekiq', 'HL7'],
    visit: 'https://biomarking.com',
    id: 3,
  },
  {
    title: 'Local Serv',
    category: 'AI Automation',
    description: 'AI-powered service marketplace built with Databutton that lets customers book local services (car wash, home renovation, etc.) via conversational AI flows.',
    tags: ['Prompt Engineering', 'Generative AI', 'Databutton', 'OpenAI GPT', 'API Integrations', 'Rapid Prototyping', 'JavaScript', 'Python', 'Figma'],
    visit: 'https://barhoumholdings.databutton.app/local-serv',
    id: 4,
  },
  // {
  // title: 'Evolutionary Algorithm',
  // category: 'Academic / AI Project',
  // description: 'An AI-driven evolutionary algorithm implementation that mimics natural selection to solve optimization problems. It evolves a population of solutions via fitness evaluation, selection, crossover, and mutation—demonstrating core concepts in action.',
  // tags: ['Python', 'Genetic Algorithm', 'Optimization', 'Evolutionary Computation', 'Fitness Function'],
  // visit: 'https://github.com/Zia-Ur-Rehman1/Evolutionary_Algorithm',
  // id: 5,
  // },
  // {
  //   title: 'Tickting Umrah Reserve Portal',
  //   description: 'A comprehensive web-based system for managing Umrah travel bookings. It enables users to handle ticket reservations, process service requests & payments. Uses AI-powered document parsing and a secure, live & transparent payment tracking system.',
  //   tags: ['Django', 'Python', 'PostgreSQL', 'Docker', 'REST API', 'Tesseract OCR', 'PDF Parsing', 'CI/CD'],
  //   category: 'Ticket & Umrah Reservation',
  //   visit: 'https://github.com/Zia-Ur-Rehman1/Tickting_Umrah_Reserve_Portal',
  //   id: 6,
  // },
  // {
  //   title: 'Namhal',
  //   category: 'CRM | Residency Complaint Management',
  //   description: 'An Android application tailored for managing residency complaint workflows. Namhal enables administrators, managers, and staff to log, track, and resolve resident service requests, featuring real-time dashboards with actionable statistics for effective decision-making.',
  //   tags: ['Flutter (Dart)', 'Firebase', 'Android', 'Figma', 'Balsamiq', 'UX/UI Design'],
  //   visit: 'https://github.com/Zia-Ur-Rehman1/namhal',
  //   id: 7
  // }
];

export const AccomplishmentsData = [
  {
    title: 'Devsinc',
    role: 'Senior Software Engineer',
    duration: 'Jan 2024 – Present',
  },
  {
    title: 'Intellirent',
    role: 'Full Stack Software Engineer',
    duration: 'Jan 2023 – Dec 2024',
  },
  {
    title: 'Biomark',
    role: 'Software Engineer',
    duration: 'June 2022 – Jan 2023',
  },
  {
    title: 'Saas LTV Growth Fund',
    role: 'Software Engineer',
    duration: 'June 2021 – June 2022',
  }
];

// export const statistics = [
//   { id: 1, value: "4+", label: "Years Experience", icon: <FaCalendar /> },
//   { id: 2, value: "15+", label: "Projects Delivered", icon: <FiTarget /> },
//   { id: 3, value: "4+", label: "Live Products", icon: <FaUsers /> },
//   { id: 4, value: "150+", label: "Features Integrated", icon: <FaCogs /> },
//   { id: 5, value: "3+", label: "Production Experience", icon: <FaServer /> },
//   { id: 6, value: "24/7", label: "Support Available", icon: <FaClock /> },
// ];
export const statistics = [
  { id: 1, value: "4+", label: "Years of Full‑Stack Experience", icon: <FaCalendar /> },
  { id: 2, value: "15+", label: "Projects Shipped", icon: <FiTarget /> },
  { id: 3, value: "4", label: "Long‑Running Products", icon: <FaUsers /> },
  { id: 4, value: "30–70%", label: "Performance Improvements", icon: <FaCogs /> },
];

export const TimeLineData = [
  { year: 2016, text: 'Started my journey as a developer.', },
  { year: 2017, text: 'Worked intensively on ROMs & Kernels.', },
  { year: 2018, text: 'Learned Android app development.', },
  { year: 2019, text: 'Finished Diploma in Computer Engineering.', },
  { year: 2020, text: 'Aquired new skills while trying not to catch COVID-19', },
  { year: 2021, text: 'Survived COVID-19 and got my first Job at Primebook.', },
  { year: 2022, text: 'Completed B.Tech in Information Technology.', },
  { year: 2023, text: 'Year under progress....', },
];

export const AchievementsData = [
  {
    role: 'Full-Stack Engineer',
    company: 'Ecolink – Communication Platform for Insurance Agencies',
    location: 'California – Remote',
    duration: 'Dec 2024 – Present',
    achievements: [
      'Designed multi-tenant real-time call, SMS, and chat workflows using ActionCable, WebSockets, and Turbo Streams for insurance agencies.',
      'Integrated RingCentral, AMS360, and Applied EPIC into a unified communication and compliance platform.',
      'Built a Slack reporting bot (PDF/CSV) that automated bi-weekly usage reports and cut manual reporting effort by ~80%.',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Intellirent – Real Estate & Rental Marketing',
    location: 'Texas – Remote',
    duration: 'Jan 2023 – Dec 2024',
    achievements: [
      'Revamped a 10-year legacy PDF system in Rails, reducing memory allocations by 77% and execution time by 63% (Scout APM).',
      'Integrated Experian-based fraud and identity checks, reducing manual verification time by roughly 90%.',
      'Redesigned the React + GraphQL front-end, cutting API load by ~40% and improving responsiveness by ~55%, while DRY refactors delivered ~33% performance gains and lower server costs.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Biomark – Healthcare Connectivity Platform',
    location: 'Singapore – Remote',
    duration: 'June 2022 – Jan 2023',
    achievements: [
      'Developed HIPAA-aware data pipelines using HL7 APIs for secure data exchange between labs, doctors, and patients.',
      'Designed modular microservice-style components and automated onboarding flows, boosting developer efficiency by ~30%.',
      'Helped establish a scalable Rails API architecture with clear separation of concerns and security in mind.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'SaaS LTV Growth – E-commerce Revenue Optimization',
    location: 'Wilmington – Remote',
    duration: 'June 2021 – June 2022',
    achievements: [
      'Migrated key REST endpoints to Shopify GraphQL and added GitHub Actions CI/CD, reducing server load by ~36% and speeding releases.',
      'Optimized Redis-backed background jobs to eliminate N+1 queries, improving overall resource utilization by ~43%.',
      'Improved storefront performance by reducing LCP by ~72% via Redis caching and backend query tuning, and built subscription workflows that stabilized recurring revenue.',
    ],
  },
];

export const CurrentFocusData = [
  {
    title: 'Model Context Protocol (MCP)',
    hook: 'Building specialized servers and web apps that bridge AI models with local data sources and third-party APIs for secure, context-aware interactions.',
  },
  {
    title: 'AI-Driven Automation',
    hook: 'Architecting intelligent chat systems and workflows that leverage LLMs to automate complex task management and multi-channel data handling.',
  },
  {
    title: 'Modern Rails UX (Hotwire/Turbo)',
    hook: 'Deep-diving into Turbo Streams and Stimulus to build reactive, real-time interfaces that minimize JavaScript overhead and maximize performance.',
  },
  {
    title: 'Scalable System Architecture',
    hook: 'Optimizing Rails performance through service-oriented design, background processing strategies, and custom scaffolding to ensure long-term maintainability.',
  }
];

export const TestimonialsData = [
  {
    name: 'Azan Arif',
    role: 'Mob / Web / Application Development · AWS',
    text: 'I managed Zia Ur Rehman and worked closely with him on real production features. He’s a reliable full-stack developer who consistently delivers solid work using Ruby on Rails and React. Zia handled backend logic, frontend updates, and deployments with minimal supervision and a strong sense of ownership. He communicates clearly, works well in a remote setup, and can be trusted to get things done. I’d happily work with him again :)',
    id: 0,
  },
  {
    name: 'Salman Saeed',
    role: 'Ruby on Rails · Hotwire · Django · React · AWS (Co‑founder cto.sa)',
    text: 'I had the pleasure of working with Zia and can confidently say he is one of the most reliable and supportive engineers on a team. He is the kind of person who never hesitates to step in and help others, whether it’s solving a complex technical issue or unblocking a teammate under pressure. Zia takes full ownership of his work and handles challenges with a calm, problem-solving mindset. No matter how difficult the task, he approaches it with responsibility and determination, always focusing on delivering high-quality results. His technical skills in Ruby on Rails and full-stack development are strong, but what truly sets him apart is his attitude. He is collaborative, proactive, and genuinely invested in the success of the team and the product. Any team would benefit from having Zia onboard. He is not just a skilled engineer, but also a dependable team player you can trust with critical work.',
    id: 1,
  },
  {
    name: 'Rabbiya Noor',
    role: 'Software Engineer | ROR | React',
    text: 'I’ve had the chance to work with Zia, and it’s been an absolute pleasure. He is smart, reliable, and just genuinely great to work with. Whether it’s solving tough problems or helping teammates, Zia shows up with clarity, care, and a can-do attitude. It’s rare to find someone who’s both technically sharp and such a positive team presence. I’d happily work with him again—and any team would be lucky to have him on board. Highly recommended',
    id: 2,
  },
  {
    name: 'Abdul Wahab',
    role: 'Programme Officer · QA / UAT / Business Analysis',
    text: "Zia was a QA's dream at Intellirent. His clean Ruby on Rails code simplified test automation, while his robust RESTful APIs reduced edge cases by 40%. By modernizing legacy systems, he cut crashes by 33% and fixed N+1 queries that tripled our performance testing efficiency. His quality-first approach - anticipating failure points and thorough documentation - elevated our entire testing process. I recommend Zia for any role requiring a strong technical and quality-first mindset. He would be an asset to any forward-thinking engineering team.",
    id: 3,
  },
  {
    name: 'Muhammad Ali Raza',
    role: 'Software Engineer · Full Stack (Nuxt/Next/Node/Nest)',
    text: 'I highly recommend Zia ur Rehman as an excellent developer and a true team player. He consistently delivers high-quality work, approaches problems with a strong technical mindset, and is always willing to support teammates. His collaborative attitude and dedication make him a valuable asset to any team. It’s a pleasure working with him.',
    id: 4,
  },
  {
    name: 'Ali Raza Khan',
    role: 'SSE - Full Stack | Node.js | AWS',
    text: "Zia Ur Rehman was an amazing colleague, and person! He is very motivated and hard working and inspires the team. Zia has consistently overachieved his targets. I worked closely with Zia for, around, 3½ years during my Bachelors, he was always a professional, approachable and helping. He is self driven and wants to reach his goals while still enabling others to succeed. Zia is also very creative and always wants to find new and innovative ways when it problem solving.",
    id: 2,
  }
];