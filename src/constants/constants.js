import { FaCalendar, FaUsers, FaClock, FaCogs, FaServer } from 'react-icons/fa';
import { FiTarget } from "react-icons/fi";
export const ProjectsData = [
  {
    title: 'EcoLink',
    category: 'Insurance Communications',
    description: 'EcoLink is a cloud communications platform integrating RingCentral with agency management systems like AMS360, enabling seamless call routing, SMS, voicemails, and compliance for insurance agencies.',
    tags: ['Ruby on Rails', 'JavaScript', 'Slim', 'Turbo', 'ActionCable', 'PostgreSQL', 'Sidekiq', 'Redis', 'RingCentral API', 'AMS360', 'Epic', 'Slack', 'WebSockets', 'Multi-Tenancy', 'AWS ( EC2, S3 )'],
    visit: 'https://ecolink.inteveo.com',
    id: 0,
  },
  {
    title: 'Intellirent',
    category: 'Real Estate & Rental Marketing',
    description: 'Intellirent is a B2B paperless transactions software for residential leasing. Automated rental marketing and tenant screening software providing secure paperless transactions for residential leasing.',
    tags: ['Ruby', 'Rails', 'AWS (S3, EventBridge, Lambda)', 'JavaScript', 'Jira', 'Heroku','HAML','HTML/CSS (Bootstrap)', 'Atlassian', 'Stripe', 'PostgreSQL', 'Redis', 'PDF Prawn/Wicked', 'Experian', 'Hubspot'],
    visit: 'https://myintellirent.com',
    id: 1,
  },
  {
    title: 'PC - Product Customization',
    category: 'SaaS & E-Commerce',
    description: 'PC enabling merchants to offer unlimited product customization, including custom fields like engravings, color swatches, image uploads, and more, with interactive visuals and premium upcharges, boosting revenue and personalization.',
    tags: [
      'Rails', 'PostgreSQL', 'Ruby', 'React.js', 'Shopify',
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
      'Built multi-tenant real-time communication workflows using ActionCable, WebSockets, and Turbo Streams for live call routing, chat, SMS, and compliance logging.',
      'Developed scalable Rails architecture supporting integrations with RingCentral and AMS360.',
      'Delivered responsive UI/UX using the Bootstrap framework, improving engagement by 50%.',
      'Integrated Slack bot to automate bi-weekly user reports (PDF/CSV), reducing manual effort by 80%.',
      'Extended session duration from day to week and re-engineered the subscription reset and refresh flow to ensure long-term integration stability',
      'Collaborated cross-functionally in Agile sprints with design, product, and QA teams.',
    ],
  },
  {
    role: 'Full-Stack Engineer',
    company: 'Intellirent – Real Estate & Rental Marketing',
    location: 'Texas – Remote',
    duration: 'Jan 2023 – Dec 2024',
    achievements: [
      'Refactored legacy Rails architecture using DRY principles, delivering a 33% performance gain.',
      'Automated applicant screening via REST API integrations (Stripe, Experian), reducing manual work by 30%.',
      'Optimized relational schemas with ActiveRecord, improving memory use by 23%.',
      'Accelerated debugging by 50% using structured logging and monitoring (Papertrail, Airbrake).',
      'Enhanced test coverage with RSpec for critical modules, reducing production bugs.'
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Biomark – Healthcare Connectivity Platform',
    location: 'Singapore – Remote',
    duration: 'June 2022 – Jan 2023',
    achievements: [
      'Reduced codebase size by 12% using hash-based metaprogramming, achieving O(1) complexity in key workflows.',
      'Developed HIPAA-compliant pipelines using HL7 APIs, reducing manual data processing by 47%.',
      'Automated onboarding workflows and modularized healthcare microservices, improving productivity by 70%.'
    ],
  },
  {
    role: 'Software Engineer',
    company: 'SaaS LTV Growth – E-commerce Revenue Optimization',
    location: 'Wilmington – Remote',
    duration: 'June 2021 – June 2022',
    achievements: [
      'Migrated REST endpoints to Shopify GraphQL API and implemented CI/CD via GitHub Actions, reducing server load by 36%.',
      'Optimized Redis batch processing queues, resolving N+1 queries and improving efficiency by 43%.',
      'Delivered product customization features (engraving, swatches, uploads), increasing customer engagement by 37%.',
      'Reduced LCP by 72% using Redis caching and database indexing optimizations.'
    ],
  },
];
