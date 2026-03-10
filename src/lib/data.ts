import { Project, Experience, SkillGroup } from "./types";

export const PROJECTS: Project[] = [
  {
    title: "Agentic AI Dev Pipeline",
    slug: "agentic-ai-dev-pipeline",
    description:
      "Multi-agent code pipeline powered by Claude with SQLite-backed memory, running engineer, tester, and reviewer agents in a self-correcting loop.",
    longDescription:
      "A multi-agent development pipeline built on the Anthropic SDK where specialized agents — engineer, tester, and reviewer — collaborate sequentially on a task. The reviewer can trigger revisions, sending the pipeline back to any upstream agent up to a configurable retry limit. A SQLite memory store (via better-sqlite3) gives each agent recall of its previous outputs, using SHA-256 hashing for exact-match lookup with a recency fallback. The entire system is written in TypeScript and designed to be composable: agents are plain config objects, making it easy to add new roles or swap models.",
    tags: ["TypeScript", "Anthropic SDK", "SQLite", "Multi-Agent"],
    status: "In Progress",
    link: "#",
    github: "https://github.com/amihali1/agent-pipeline",
  },
  {
    title: "Homelab Infrastructure",
    slug: "homelab-infrastructure",
    description:
      "Proxmox homelab managed as infrastructure as code with Terraform, hosting a GPU AI stack, Home Assistant, and self-hosted services.",
    longDescription:
      "A fully version-controlled homelab defined in Terraform using the Proxmox provider. Three VMs are provisioned: a Docker host running Nextcloud, a Home Assistant OS VM with Govee, Dreo, and Wyoming voice pipeline integrations, and a GPU AI workstation with an RTX 2070 Super passed through via VFIO. The AI stack runs Ollama, Open WebUI, Wyoming Whisper (STT), Piper (TTS), and openWakeWord — all orchestrated with Docker Compose. The entire setup is reproducible from a single terraform apply.",
    tags: ["Terraform", "Proxmox", "Docker", "Home Assistant", "Ollama"],
    status: "Active",
    link: "#",
    github: "https://github.com/amihali1/terraform-homelab",
  },
  {
    title: "Portfolio Site",
    slug: "portfolio-site",
    description:
      "Personal portfolio built with Next.js 15, TypeScript, and Tailwind CSS with dark/light theming and scroll-triggered animations.",
    longDescription:
      "A modern portfolio site built with Next.js 15 App Router, React 19, and TypeScript. Features dark/light theme switching, smooth scroll-triggered animations via IntersectionObserver, a grain texture overlay, and a print-ready resume page. Centralized data management keeps content easy to update. Hosted from a self-managed homelab.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    status: "Active",
    link: "#",
    github: "https://github.com/amihali1/portfolio",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Zip Co",
    period: "2022 — Present",
    description:
      "Design, develop, and maintain backend services for underwriting, identity verification, and third-party integrations. Architect and scope large-scale projects from requirements through implementation. Build infrastructure-as-code with Terraform, implement Redis caching strategies, and write BDD integration tests.",
    tech: ["C#", ".NET", "Terraform", "Redis", "Azure DevOps", "BDD"],
  },
  {
    role: "Backend Software Engineer",
    company: "S&P Global",
    period: "Dec 2019 — 2022",
    description:
      "Developed and maintained RESTful API endpoints using C# in .NET Core for the entities platform. Managed SQL Server data through custom queries, stored procedures, and production data correction scripts. Deployed and tested services on AWS with CI/CD pipelines.",
    tech: ["C#", ".NET Core", "SQL Server", "AWS", "CI/CD"],
  },
  {
    role: "Programmer Analyst III",
    company: "Change Healthcare",
    period: "Aug 2015 — Dec 2019",
    description:
      "Built automated data entry software to post payments and adjustments to healthcare information systems. Developed data validation tools, OCR-based claim processing, and file parsing programs using .NET and Informatica.",
    tech: ["C#", ".NET", "Informatica", "OCR", "SQL"],
  },
  {
    role: "Applications Developer II",
    company: "International Paper",
    period: "Jul 2014 — Aug 2015",
    description:
      "Built mobile applications with backend services for data transfer between SAP databases and devices. Developed manufacturing process software using ABAP in SAP and trained new hires on the platform.",
    tech: ["SAP", "ABAP", "Mobile", "C#"],
  },
];

export const SKILLS: SkillGroup[] = [
  { category: "Languages", items: ["C#", "SQL", "TypeScript", "JavaScript", "Python", "Java"] },
  { category: "Frameworks & Tools", items: [".NET / .NET Core", "Terraform", "Redis", "Docker", "CI/CD Pipelines", "BDD Testing"] },
  { category: "AI & Productivity", items: ["Claude Code", "ChatGPT", "Codex"] },
  { category: "Software", items: ["Visual Studio", "JetBrains Rider", "Postman", "Azure DevOps", "AWS"] },
  { category: "Version Control", items: ["Git", "GitHub", "GitLab", "Azure DevOps (TFS)"] },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
