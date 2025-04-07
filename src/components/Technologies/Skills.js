import { DiJavascript1,  DiRuby, DiPostgresql } from "react-icons/di";
import { SiTypescript, SiFlutter, SiGraphql, SiDocker, SiJenkins, SiHeroku, SiShopify,SiBootstrap, SiMui, SiRedis, SiDigitalocean, SiAmazonwebservices, SiFirebase, SiTailwindcss, SiNgrok } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";

export const Skills = [
  {
    category: "Languages",
    skills: [
      {
        slug: "javascript",
        Component: DiJavascript1,
        title: "JavaScript",
        Description: () => <>Proficient in ES6+ for web and app development</>,
      },
      {
        slug: "typescript",
        Component: SiTypescript,
        title: "TypeScript",
        Description: () => <>Strongly typed JavaScript for scalable applications</>,
      },
      {
        slug: "ruby",
        Component: DiRuby,
        title: "Ruby",
        Description: () => <>Backend development with Ruby on Rails</>,
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      {
        slug: "react",
        Component: RiReactjsLine,
        title: "React.js",
        Description: () => <>Frontend development for dynamic web apps</>,
      },
      {
        slug: "flutter",
        Component: SiFlutter,
        title: "Flutter",
        Description: () => <>Cross-platform app development</>,
      },
      {
        slug: "rails",
        Component: DiRuby,
        title: "Rails",
        Description: () => <>Web application framework for Ruby</>,
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
        Description: () => <>CSS framework for responsive design</>,
      },
      {
        slug: "tailwind",
        Component: SiTailwindcss,
        title: "Tailwind CSS",
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
        Description: () => <>Cloud services for hosting and deployment</>,
      },
      {
        slug: "heroku",
        Component: SiHeroku,
        title: "Heroku",
        Description: () => <>Cloud platform for app deployment</>,
      },
      {
        slug: "digitalocean",
        Component: SiDigitalocean,
        title: "DigitalOcean",
        Description: () => <>Cloud services for hosting and deployment</>,
      },
      {
        slug: "docker",
        Component: SiDocker,
        title: "Docker",
        Description: () => <>Containerization for development and deployment</>,
      },
      {
        slug: "jenkins",
        Component: SiJenkins,
        title: "Jenkins",
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
        Description: () => <>E-commerce platform integration</>,
      },
      {
        slug: "graphql",
        Component: SiGraphql,
        title: "GraphQL",
        Description: () => <>Efficient data querying and API integration</>,
      },
      {
        slug: "ngrok",
        Component: SiNgrok,
        title: "Ngrok",
        Description: () => <>Secure tunneling for local development</>,
      },
      {
        slug: "postman",
        Component: DiPostgresql,
        title: "Postman",
        Description: () => <>API testing and documentation</>,
      }
    ],
  },
];