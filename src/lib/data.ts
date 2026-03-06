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
    title: "Real-Time Data Dashboard",
    slug: "real-time-data-dashboard",
    description:
      "WebSocket-powered dashboard for monitoring IoT sensor data with historical charting and alerting.",
    longDescription:
      "An end-to-end IoT monitoring solution with a React frontend consuming WebSocket streams from a Node.js backend. D3.js powers the historical time-series charts, while PostgreSQL stores the sensor data with efficient time-series indexing. Includes configurable alert thresholds with email and webhook notifications.",
    tags: ["React", "Node.js", "PostgreSQL", "D3"],
    status: "Completed",
    link: "#",
    github: "https://github.com/yourusername/data-dashboard",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Acme Corp",
    period: "2022 — Present",
    description:
      "Lead development of microservices architecture serving 2M+ daily requests. Migrated legacy monolith to event-driven system.",
    tech: ["TypeScript", "Go", "AWS", "Kafka"],
  },
  {
    role: "Software Engineer",
    company: "StartupCo",
    period: "2019 — 2022",
    description:
      "Full-stack development of SaaS platform. Built real-time collaboration features and payment integrations.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    role: "Junior Developer",
    company: "Digital Agency",
    period: "2017 — 2019",
    description:
      "Developed client-facing web applications and internal tooling. Introduced automated testing practices.",
    tech: ["JavaScript", "Python", "Django", "MySQL"],
  },
];

export const SKILLS: SkillGroup[] = [
  { category: "Languages", items: ["TypeScript", "Go", "Python", "Rust"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind", "D3.js"] },
  { category: "Backend", items: ["Node.js", "PostgreSQL", "Redis", "Kafka"] },
  { category: "DevOps", items: ["Docker", "K8s", "Terraform", "GitHub Actions"] },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
