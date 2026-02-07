import { FaCalendar, FaUsers, FaClock, FaCogs, FaServer } from 'react-icons/fa';
import { FiTarget } from "react-icons/fi";
export const ProjectsData = [
  {
    title: 'EcoLink',
    category: 'Insurance Communications',
    description: 'EcoLink is a cloud communications platform integrating RingCentral with agency management systems like AMS360, enabling seamless call routing, SMS, voicemails, and compliance for insurance agencies.',
    tags: ['Ruby on Rails', 'JavaScript', 'Slim', 'Turbo', 'ActionCable', 'PostgreSQL', 'Sidekiq', 'Redis', 'RingCentral', 'AMS360', 'Epic', 'Infobip', '8x8', 'Slack', 'WebSockets', 'Multi-Tenancy', 'AWS ( EC2, S3 )'],
    visit: 'https://ecolink.inteveo.com',
    id: 0,
  },
  {
    title: 'Intellirent',
    category: 'Real Estate & Rental Marketing',
    description: 'Intellirent is a B2B paperless transactions software for residential leasing. Automated rental marketing and tenant screening software providing secure paperless transactions for residential leasing.',
    tags: ['Ruby', 'Rails', 'React', 'AWS (S3, EventBridge, Lambda)', 'JavaScript', 'Jira', 'Heroku','HAML','HTML/CSS (Bootstrap)', 'Atlassian', 'Stripe', 'PostgreSQL', 'Redis', 'PDF Prawn/Wicked', 'Experian', 'Hubspot'],
    visit: 'https://myintellirent.com',
    id: 1,
  },
  {
    title: 'PC - Product Customization',
    category: 'SaaS & E-Commerce',
    description: 'PC enabling merchants to offer unlimited product customization, including custom fields like engravings, color swatches, image uploads, and more, with interactive visuals and premium upcharges, boosting revenue and personalization.',
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
    description: 'BioMark is a platform that helps patients, doctors, and labs stay connected and updated with secure data transmission between them.',
    tags: ['Rails', 'Ruby', 'Docker', 'PostMan', 'Ngrok', 'Jenkins', 'JavaScript (ES6)', 'PostgreSQL', 'Sidekiq', 'HL7'],
    visit: 'https://biomarking.com',
    id: 3,
  },
  {
    title: 'Local Serv',
    category: 'AI Automation',
    description: 'Local Serv is an AI-powered service marketplace that enables customers to seamlessly book and purchase local services such as car washing and home renovation through natural AI-driven conversations. Built with Databutton, it showcases rapid prototyping with generative AI—transforming service discovery into an intuitive, conversational experience.',
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

export const statistics = [
  { id: 1, value: "4+", label: "Years Experience", icon: <FaCalendar /> },
  { id: 2, value: "15+", label: "Projects Delivered", icon: <FiTarget /> },
  { id: 3, value: "4+", label: "Live Products", icon: <FaUsers /> },
  { id: 4, value: "150+", label: "Features Integrated", icon: <FaCogs /> },
  { id: 5, value: "3+", label: "Production Experience", icon: <FaServer /> },
  { id: 6, value: "24/7", label: "Support Available", icon: <FaClock /> },
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
      'Architected multi-tenant real-time workflows using ActionCable and Turbo Streams for live call routing and compliance logging.',
      'Integrated and enhanced complex CRM ecosystems including RingCentral, AMS360, and Applied EPIC.',
      'Automated bi-weekly user reporting via a custom Slack bot (PDF/CSV), reducing manual data compilation by 80%.',
      'Adopted a TDD approach with Stimulus and Agile methodologies to ensure high-velocity, bug-free feature delivery.'
    ],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Intellirent – Real Estate & Rental Marketing',
    location: 'Texas – Remote',
    duration: 'Jan 2023 – Dec 2024',
    achievements: [
      'Revamped a 10-year-old legacy PDF system, achieving a 77% memory reduction and 63% faster execution, verified by Scout APM.',
      'Built automated fraud/identity checks via Experian APIs, reducing manual verification time by 90%.',
      'Redesigned React front-end with GraphQL integration, reducing API load by 40% and improving responsiveness by 55%.',
      'Refactored legacy Rails architecture using DRY principles, delivering 33% performance gains and 20% lower server costs.'
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Biomark – Healthcare Connectivity Platform',
    location: 'Singapore – Remote',
    duration: 'June 2022 – Jan 2023',
    achievements: [
      'Developed HIPAA-compliant data pipelines using HL7 APIs, reducing manual data processing by 47%.',
      'Designed modular healthcare microservices and automated onboarding, boosting developer efficiency by 30%.',
      'Applied Rails best practices for separation of concerns to build a foundation for scalable, secure API architecture.'
    ],
  },
  {
    role: 'Software Engineer',
    company: 'SaaS LTV Growth – E-commerce Revenue Optimization',
    location: 'Wilmington – Remote',
    duration: 'June 2021 – June 2022',
    achievements: [
      'Migrated REST endpoints to Shopify GraphQL API and implemented GitHub Actions CI/CD, reducing server load by 36%.',
      'Optimized Redis batch processing to eliminate N+1 queries, improving overall resource utilization by 43%.',
      'Reduced Largest Contentful Paint (LCP) by 72% through strategic Redis caching and database query optimization.',
      'Developed subscription management workflows for merchant plan upgrades and usage tracking, stabilizing recurring revenue.'
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
    name: 'Rabbiya Noor',
    role: 'Software Engineer | ROR | React',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQF0tC9YyX-xrg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1718210350686?e=1743638400&v=beta&t=Zz2wW-g6gQ0wW-g6gQ0wW-g6gQ0wW-g6gQ0wW-g6gQ0', // Placeholder or use if user provided, sticking to text for now if no image provided, but user copied from LinkedIn so maybe I can find placeholders or just use initials
    text: "I’ve had the chance to work with Zia, and it’s been an absolute pleasure. He is smart, reliable, and just genuinely great to work with. Whether it’s solving tough problems or helping teammates, Zia shows up with clarity, care, and a can-do attitude. It’s rare to find someone who’s both technically sharp and such a positive team presence. I’d happily work with him again—and any team would be lucky to have him on board. Highly recommended",
    id: 0,
  },
  {
    name: 'Abdul Wahab',
    role: 'Programme Officer | QA Engineer',
    text: "Zia was a QA's dream at Intellirent. His clean Ruby on Rails code simplified test automation, while his robust RESTful APIs reduced edge cases by 40%. By modernizing legacy systems, he cut crashes by 33% and fixed N+1 queries that tripled our performance testing efficiency. His quality-first approach - anticipating failure points and thorough documentation - elevated our entire testing process. I recommend Zia for any role requiring a strong technical and quality-first mindset.",
    id: 1,
  },
  {
    name: 'Ali Raza Khan',
    role: 'SSE - Full Stack | Node.js | AWS',
    text: "Zia Ur Rehman was an amazing colleague, and person! He is very motivated and hard working and inspires the team. Zia has consistently overachieved his targets. I worked closely with Zia for, around, 3½ years during my Bachelors, he was always a professional, approachable and helping. He is self driven and wants to reach his goals while still enabling others to succeed. Zia is also very creative and always wants to find new and innovative ways when it problem solving.",
    id: 2,
  }
];