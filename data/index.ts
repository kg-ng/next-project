// Central content store for the portfolio. Edit this file to update copy —
// components read from here so design and content stay decoupled.
// Synced against Keith_Ng_CV.pdf — keep this file in step whenever the CV changes.

import { SECTION_ID } from "@/constants";

export const navItems = [
  { name: "About", link: `#${SECTION_ID.ABOUT}` },
  { name: "Stack", link: `#${SECTION_ID.STACK}` },
  { name: "Experience", link: `#${SECTION_ID.EXPERIENCE}` },
  { name: "Projects", link: `#${SECTION_ID.PROJECTS}` },
  { name: "Contact", link: `#${SECTION_ID.CONTACT}` },
];

export const profile = {
  name: "Keith Ng",
  role: "Senior Agentic AI & Cloud-Native Full-Stack Engineer",
  tagline: "I build cozy, cloud-native software that just works — with AI agents doing the grind.",
  bio: "3+ years architecting secure, high-performance systems on AWS and Azure. I specialize in modernizing legacy platforms into event-driven, cloud-native architectures, and designing multi-agent AI systems that automate code review, security remediation, and DevSecOps so engineers can focus on the interesting problems.",
  location: "Philippines · Remote-friendly, working across global time zones",
  email: "keithng.dev@gmail.com",
  phone: "+63 917 797 8956",
  resumeHref: "/Keith_Ng_CV.pdf",
  githubHref: "https://github.com/kg-ng",
  linkedinHref: "https://www.linkedin.com/in/keith-geoffrey-ng-698b3820a/",
};

// Headline impact metrics — pulled from CV highlights, gives the "senior" signal at a glance.
export const impactStats = [
  { id: 1, value: "3+", label: "years shipping production systems" },
  { id: 2, value: "85", label: "AI agents architected across 4 repos" },
  { id: 3, value: "26+", label: "reusable agent skill pipelines" },
  { id: 4, value: "0", label: "vulnerabilities at last security audit" },
];

// Skills grouped by domain — gives recruiters/engineers a quick map of depth vs. breadth.
export const skillGroups = [
  {
    id: "languages",
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Go", "Python"],
  },
  {
    id: "frontend",
    title: "Frontend",
    items: ["React", "Next.js", "Angular", "Redux", "Tailwind CSS", "RxJS", "GraphQL"],
  },
  {
    id: "backend",
    title: "Backend",
    items: ["Node.js", "NestJS", "Fastify", "Spring Boot", "Quarkus", "Sequelize"],
  },
  {
    id: "ai",
    title: "AI & Security Automation",
    items: [
      "Agentic AI Architecture",
      "Custom AI Agents",
      "LLM Optimization",
      "AI Security Remediation",
      "DevSecOps Automation",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & Infra",
    items: ["AWS (Lambda, CDK, Aurora, SQS)", "Azure", "Serverless / EventBridge", "Docker", "Podman"],
  },
  {
    id: "data",
    title: "Data",
    items: ["PostgreSQL 17", "Aurora Serverless v2", "Drizzle ORM", "MongoDB", "SQL"],
  },
  {
    id: "devsecops",
    title: "DevSecOps & Security",
    items: ["Trivy", "SonarQube", "CI/CD Pipelines", "OAuth2 / JWT", "SSO (Azure AD, Cognito, PingFed)"],
  },
];

// Original positioning + capability highlights, inspired by (not copied from) my
// github.com/kg-ng/kg-ng profile README — reimagined here as a retro pixel-terminal block.
export const highlights = {
  title: "Senior Agentic AI Engineer · Cloud Architect · Platform Engineer",
  focus: "Multi-agent systems that ship production software.",
  infraStyle: "Everything-as-Code — AWS CDK · Terraform · CloudFormation",
  philosophy: "You won't learn until you fail — so fail a lot, fail fast, learn faster.",
  domains: [
    "Enterprise Banking",
    "Lending & Loans",
    "Fintech",
    "Large-Scale SaaS",
    "E-commerce & Supply Chain",
  ],
  capabilities: [
    "Designing multi-agent AI systems (85+ specialized agent configs, 26+ reusable skill pipelines)",
    "Autonomous security remediation & architecture-governance agents",
    "Cloud-native architecture across AWS & Azure",
    "Infrastructure as Code — CDK, Terraform, CloudFormation",
    "Event-driven microservices (EventBridge, SQS, DLQs, redrive/replay)",
    "Legacy modernization (SOAP → REST, ES4 → NestJS/TypeScript)",
    "DevSecOps pipelines with automated vulnerability patching",
  ],
};

export const education = [
  {
    id: 1,
    school: "Mapua University",
    degree: "B.S. in Manufacturing Engineering",
    period: "2018 – 2022",
  },
];

export const workExperience = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Australian Finance Group",
    period: "Current",
    desc: "Architecting the AFG Securities Integration & Agentic Engineering Platform — a serverless AWS core-banking data pipeline paired with a custom multi-agent AI system that automates code review, security remediation, and DevSecOps across 4 repositories.",
    highlights: [
      "Core banking data pipeline on Aurora Serverless v2 (PostgreSQL 17) with Drizzle ORM",
      "Resilient event-driven architecture: EventBridge, per-entity SQS, DLQs, redrive & replay",
      "Domain orchestration layer across 4 AWS accounts, 9 ratified architecture decision records",
      "Agentic AI platform: 85 specialized agent configs, 26+ reusable skill pipelines across 4 repos",
      "AI-driven weekly security pipeline with automated vulnerability-patching PRs",
    ],
    stack: ["AWS CDK", "EventBridge", "Aurora Serverless v2", "Drizzle ORM", "Lambda", "SQS"],
  },
  {
    id: 2,
    role: "Senior Asst. Manager, Senior Full-Stack Engineer",
    company: "East West Bank Corp.",
    period: "Prior",
    desc: "Led cloud-native modernization across CORE, RETAIL/SALES and CORP banking projects — migrating SOAP integrations to REST, piloting Quarkus for faster container startup, and driving security/QA to zero vulnerabilities.",
    highlights: [
      "Cloud-native & Quarkus POC to cut container startup time and memory footprint",
      "API modernization: legacy SOAP integrations wrapped in a REST layer",
      "DevSecOps: Trivy in CI/CD, reusable pipeline boilerplates across teams",
      "100% of SonarQube vulnerabilities eliminated, 96% JaCoCo unit test coverage",
      "Fund Transfer database/API design with automated API contract docs",
    ],
    stack: ["Azure", "Quarkus", "Trivy", "SonarQube", "REST"],
  },
  {
    id: 3,
    role: "Senior Software Engineer",
    company: "Stratpoint Technologies Inc.",
    period: "Prior",
    desc: "Led a 5-engineer team delivering a full-cycle procurement system two weeks ahead of schedule — 50+ REST endpoints, a configurable multi-level approval engine, and a reusable form component library.",
    highlights: [
      "Led a 5-engineer team; delivered 2 weeks ahead of schedule",
      "50+ endpoints across Requisition Slips, Purchase Orders, Delivery Receipts, Payment Requests",
      "Configurable multi-level (parallel/sequential) approval engine",
      "RBAC with OTP-based 2FA across 100+ permissions",
      "Reusable form library (react-hook-form + zod) cut dev time 30%",
    ],
    stack: ["Node.js", "Express", "react-hook-form", "Zod", "RBAC"],
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "Asurion",
    period: "Prior",
    desc: "Built a Customer Warranty Tracker (Go + React Native, serverless AWS) and a forecasting/analytics platform, migrating a legacy ES4 app to Node.js/NestJS/TypeScript and cutting load time 20%.",
    highlights: [
      "Customer Warranty Tracker: Go backend + React Native, serverless Lambda CI/CD",
      "Legacy ES4 → Node.js/NestJS TypeScript migration, 20% load time reduction",
      "Microservices on EC2/S3/Lambda/RDS with a shared Storybook component library",
      "PingFed SSO, X-Ray & CloudWatch observability",
    ],
    stack: ["Go", "Node.js", "TypeScript", "NestJS", "React Native", "AWS Lambda"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Retro-Cozy Portfolio (this site)",
    des: "This portfolio itself — a Next.js 14 app rebuilt with a hand-rolled retro-pixel design system, custom Copilot agents/skills, and zero UI library dependency for the visuals.",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/kg-ng/next-project",
  },
  {
    id: 2,
    title: "Agentic DevSecOps Pipeline",
    des: "A multi-agent AI system that automates code review, security remediation, and compliance checks across multiple repos — cutting manual review time and catching issues before merge.",
    iconLists: ["/next.svg", "/dock.svg", "/postgresql.svg"],
    link: "",
  },
  {
    id: 3,
    title: "3D Interactive Portfolio",
    des: "An earlier portfolio experiment — a fully custom 3D scene built with Three.js and Vite, exploring WebGL interaction design outside of the React ecosystem.",
    iconLists: ["/three.svg", "/vitejs.svg", "/js.svg"],
    link: "https://kgn-portfolio-a0b394.netlify.app/",
  },
];

export const socialMedia = [
  { id: 1, label: "GitHub", img: "/git.svg", href: "https://github.com/kg-ng" },
  {
    id: 2,
    label: "LinkedIn",
    img: "/link.svg",
    href: "https://www.linkedin.com/in/keith-geoffrey-ng-698b3820a/",
  },
  { id: 3, label: "Resume", img: "/cloud.svg", href: "/Keith_Ng_CV.pdf" },
];
