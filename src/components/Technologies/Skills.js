import { DiJavascript1,  DiRuby, DiPostgresql, DiPython, DiDjango } from "react-icons/di";
import { SiTypescript, SiFlutter, SiGraphql, SiDocker, SiJenkins, SiHeroku, SiShopify,SiBootstrap, SiMui, SiRedis, SiDigitalocean, SiAmazonwebservices, SiFirebase, SiTailwindcss, SiNgrok, SiDart, SiHetzner, SiCloudflare, SiCaddy } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

export const Skills = [
  {
    category: "Languages",
    skills: [
      {
        slug: "ruby",
        Component: DiRuby,
        title: "Ruby",
        usedIn: ["Escrow.sa", "AgencyPortal", "EcoLink", "Intellirent", "PC - Product Customization", "Biomark"],
        Description: () => <>Backend development with Ruby on Rails</>,
      },
      {
        slug: "python",
        Component: DiPython,
        title: "Python",
        usedIn: ["Local Serv", "Mindrift (Tendem Data Collection)"],
        Description: () => <>Scripting and automation tasks</>,
      },
      {
        slug: 'dart',
        Component: SiDart,
        title: "Dart",
        Description: () => <>Programming language for Flutter development</>,
      },
      {
        slug: "javascript",
        Component: DiJavascript1,
        title: "JavaScript",
        usedIn: ["Escrow.sa", "AgencyPortal", "EcoLink", "Intellirent", "PC - Product Customization", "Biomark", "Local Serv"],
        Description: () => <>Proficient in ES6+ for web and app development</>,
      },
      {
        slug: "typescript",
        Component: SiTypescript,
        title: "TypeScript",
        usedIn: ["PC - Product Customization", "Portfolio"],
        Description: () => <>Strongly typed JavaScript for scalable applications</>,
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      {
        slug: "rails",
        Component: DiRuby,
        title: "Rails",
        usedIn: ["Escrow.sa (Rails 8)", "AgencyPortal (Rails 8)", "EcoLink", "Intellirent", "PC - Product Customization", "Biomark"],
        Description: () => <>Web application framework for Ruby</>,
      },
      {
        slug: 'django',
        Component: DiDjango,
        title: "Django",
        Description: () => <>Web framework for Python</>,
      },
      {
        slug: "react",
        Component: RiReactjsLine,
        title: "React.js",
        usedIn: ["Intellirent", "PC - Product Customization", "Portfolio"],
        Description: () => <>Frontend development for dynamic web apps</>,
      },
      {
        slug: "flutter",
        Component: SiFlutter,
        title: "Flutter",
        Description: () => <>Cross-platform app development</>,
      },
      {
        slug: "material-ui",
        Component: SiMui,
        title: "Material-UI",
        Description: () => <>UI components for applications</>,
      },
      {
        slug: "bootstrap",
        Component: SiBootstrap,
        title: "Bootstrap",
        usedIn: ["Escrow.sa", "Intellirent"],
        Description: () => <>CSS framework for responsive design</>,
      },
      {
        slug: "tailwind",
        Component: SiTailwindcss,
        title: "Tailwind CSS",
        usedIn: ["Escrow.sa", "AgencyPortal (v4)", "EcoLink", "PC - Product Customization"],
        Description: () => <>Utility-first CSS framework for rapid UI development</>,
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        slug: "postgresql",
        Component: DiPostgresql,
        title: "PostgreSQL",
        usedIn: ["Escrow.sa", "AgencyPortal (4 logical DBs: primary/cache/queue/cable)", "EcoLink", "Intellirent", "PC - Product Customization", "Biomark"],
        Description: () => <>Relational database management</>,
      },
      {
        slug: "mysql",
        Component: DiPostgresql,
        title: "MySQL",
        Description: () => <>Relational database management</>,
      },
      {
        slug: "firebase",
        Component: SiFirebase,
        title: "Firebase",
        Description: () => <>Real-time database and authentication</>,
      },
      {
        slug: "redis",
        Component: SiRedis,
        title: "Redis",
        usedIn: ["EcoLink", "Intellirent", "PC - Product Customization"],
        Description: () => <>In-memory data structure store</>,
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      {
        slug: "aws",
        Component: SiAmazonwebservices,
        title: "AWS",
        usedIn: ["EcoLink", "Intellirent"],
        Description: () => <>Cloud services for hosting and deployment</>,
      },
      {
        slug: "hetzner",
        Component: SiHetzner,
        title: "Hetzner Cloud",
        usedIn: ["AgencyPortal", "PC - Product Customization"],
        Description: () => <>Production VPS hosting with cost-efficient compute</>,
      },
      {
        slug: "cloudflare",
        Component: SiCloudflare,
        title: "Cloudflare (R2 + Analytics)",
        usedIn: ["AgencyPortal"],
        Description: () => <>Object storage, edge analytics, and DNS for tenants</>,
      },
      {
        slug: "caddy",
        Component: SiCaddy,
        title: "Caddy",
        usedIn: ["AgencyPortal"],
        Description: () => <>On-demand TLS for tenant custom domains</>,
      },
      {
        slug: "heroku",
        Component: SiHeroku,
        title: "Heroku",
        usedIn: ["Intellirent"],
        Description: () => <>Cloud platform for app deployment</>,
      },
      {
        slug: "digitalocean",
        Component: SiDigitalocean,
        title: "DigitalOcean",
        usedIn: ["PC - Product Customization"],
        Description: () => <>Cloud services for hosting and deployment</>,
      },
      {
        slug: "docker",
        Component: SiDocker,
        title: "Docker",
        usedIn: ["Biomark"],
        Description: () => <>Containerization for development and deployment</>,
      },
      {
        slug: "jenkins",
        Component: SiJenkins,
        title: "Jenkins",
        usedIn: ["Biomark"],
        Description: () => <>CI/CD pipelines for automated deployments</>,
      },
    ],
  },
  {
    category: "Tools & APIs",
    skills: [
      {
        slug: "shopify",
        Component: SiShopify,
        title: "Shopify API",
        usedIn: ["PC - Product Customization"],
        Description: () => <>E-commerce platform integration</>,
      },
      {
        slug: "graphql",
        Component: SiGraphql,
        title: "GraphQL",
        usedIn: ["Intellirent", "PC - Product Customization"],
        Description: () => <>Efficient data querying and API integration</>,
      },
      {
        slug: "ngrok",
        Component: SiNgrok,
        title: "Ngrok",
        usedIn: ["Biomark"],
        Description: () => <>Secure tunneling for local development</>,
      },
      {
        slug: "postman",
        Component: DiPostgresql,
        title: "Postman",
        usedIn: ["Biomark"],
        Description: () => <>API testing and documentation</>,
      }
    ],
  },
];