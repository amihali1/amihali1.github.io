import { Project, Experience, SkillGroup } from "./types";

export const PROJECTS: Project[] = [
  {
    title: "Agentic AI Dev Pipeline",
    slug: "agentic-ai-dev-pipeline",
    description:
      "Custom CI/CD pipeline using Claude Agent SDK for automated code review, test generation, and PR management.",
    longDescription:
      "A fully automated development pipeline that leverages the Claude Agent SDK to perform intelligent code review, generate comprehensive test suites, and manage pull requests end-to-end. The system integrates directly with GitHub Actions and provides detailed feedback inline on PRs, dramatically reducing manual review overhead.",
    tags: ["TypeScript", "Claude SDK", "GitHub Actions"],
    status: "In Progress",
    link: "#",
    github: "https://github.com/yourusername/agentic-pipeline",
  },
  {
    title: "Homelab Infrastructure",
    slug: "homelab-infrastructure",
    description:
      "Docker Compose orchestration for self-hosted services including monitoring, DNS, and media management.",
    longDescription:
      "A production-grade homelab setup using Docker Compose with full observability through Prometheus and Grafana. Services include Pi-hole for network-wide DNS filtering, Nginx Proxy Manager for reverse proxying, and a complete media stack. Everything is version-controlled and reproducible.",
    tags: ["Docker", "Nginx", "Prometheus"],
    status: "Active",
    link: "#",
    github: "https://github.com/yourusername/homelab",
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
