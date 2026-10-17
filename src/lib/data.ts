import { Project, Experience, SkillGroup, Profile } from "./types";

export const PROFILE: Profile = {
  heroBlurb:
    "Senior backend engineer with 12+ years of software engineering experience, including 7+ years building C#/.NET services. For the past four years at Zip I've built identity verification and fraud systems, from vendor research and technical design through production rollout.",
  summary:
    "Senior backend engineer with 12+ years of software engineering experience, including 7+ years building C#/.NET services. For the past four years at Zip, built identity verification and fraud systems: led the move to a new primary identity verification provider from vendor research and technical design through shadow-mode validation and production cutover, led the Plaid bank-data verification program ahead of its October 2026 rollout, and contributed to the team's document verification and fraud-screening work. Experienced leading multi-engineer programs, building underwriting and decisioning services, and using AI-assisted development tools.",
  footerNote: "Built with Next.js, deployed to GitHub Pages",
};

export const PROJECTS: Project[] = [
  {
    title: "ML Trading Platform",
    slug: "ml-trading-platform",
    description:
      "Self-hosted quantitative trading platform combining XGBoost directional models, LSTM volatility, and local-LLM news sentiment to generate risk-defined equity and options recommendations, paper-traded through Alpaca.",
    longDescription:
      "An end-to-end ML trading system running on a homelab GPU. A scheduled pipeline fetches prices, options chains, insider transactions, and news, then scores each ticker with gradient-boosted directional models and an LSTM volatility model, blended with sentiment from a locally-hosted LLM (Ollama). A ranker turns scores into risk-defined recommendations across long, short-pair, vertical-spread, and single-leg options strategies, each with a dollar-capped max loss and per-direction capital reservation. Trades execute against Alpaca's paper API with an automated exit engine, position/capital caps, and a multi-week validation gate before any live capital. The FastAPI backend (PostgreSQL, SQLAlchemy) serves a Next.js dashboard with live position pricing and P&L; the whole stack deploys to the homelab via a self-hosted CI runner on every push.",
    tags: ["Python", "FastAPI", "XGBoost", "PyTorch", "Next.js", "PostgreSQL", "Alpaca", "Ollama"],
    status: "In Progress",
    link: "#",
    github: "https://github.com/amihali1/stock-analysis",
  },
  {
    title: "Car Deal Tracker",
    slug: "car-deal-tracker",
    description:
      "Finds the best-value used car for any make and model: parses saved-search alert emails from six car sites, scores every listing against a configurable fair-value model, and pushes real deals to my phone.",
    longDescription:
      "Built to hunt for a specific used truck, then generalized so anyone can point it at their own car. Saved searches on CarGurus, Cars.com, Autotrader, Carvana, CarMax, and Facebook Marketplace send alert emails to a dedicated inbox; a scheduled job reads them over IMAP, and a heuristic parser extracts price, mileage, trim, VIN, dealer, location, body style, and packages while coping with each site's layout quirks (prices above titles, search-radius footers that look like odometers, click-tracking links). The vehicle — make, model, wanted trims, body styles, must-have packages and what each is worth — is a profile in one config file compiled into the parser's patterns, so nothing is hard-coded to one car. Each listing gets a deal score (fair value minus all-in cost including dealer fees and travel), ranked pessimistically when an email leaves out a must-have. SQLite keeps price history and de-duplicates the same car across sites; ntfy pushes new listings and price drops, bundles bursts, and warns when a site's email format changes. A dependency-free web dashboard, deployed with Docker and reachable privately over Tailscale, ranks everything and records 'wrong info' reports with the source email so parser fixes come with regression tests. Python standard library only, with a pytest suite in CI.",
    tags: ["Python", "SQLite", "IMAP", "Docker", "Tailscale", "ntfy", "pytest"],
    status: "Active",
    link: "#",
    github: "https://github.com/amihali1/car-deal-tracker",
  },
  {
    title: "Skycast",
    slug: "skycast",
    description:
      "Ad-free weather app from one Flutter codebase for Android and the web, with a radar nowcast and a small ML model trained on NEXRAD archives to improve it.",
    longDescription:
      "Every mainstream weather app had become an ad delivery vehicle, so I built my own: no ads, trackers, accounts, or API keys. One Dart/Flutter codebase targets Android and the web, using Open-Meteo for forecasts, geocoding, and air quality and NEXRAD radar imagery from the Iowa Environmental Mesonet. It shows current conditions, a 24-hour strip, an 8-day forecast, US AQI, and a 'next 2 hours' rain nowcast that advects radar echoes along their estimated motion. A Python/TensorFlow pipeline trains a residual U-Net (~800k parameters, 0.84 MB int8 TFLite) on ~3,600 radar sequences to learn storm growth and decay on top of that motion; it beats the Lagrangian-persistence baseline by about 32% on held-out data. GitHub Actions tests the app and deploys the web build on every push.",
    tags: ["Flutter", "Dart", "TensorFlow Lite", "Python", "Open-Meteo", "GitHub Actions"],
    status: "Active",
    link: "https://amihali1.github.io/skycast/",
    demo: "https://amihali1.github.io/skycast/",
    github: "https://github.com/amihali1/skycast",
  },
  {
    title: "Stickler's Gate",
    slug: "sticklers-gate",
    description:
      "Turn-based tactical RPG for Android and iOS in Unity and C#: a stick-figure parody of Baldur's Gate built on D&D 5e-style rules.",
    longDescription:
      "A mobile RPG that pairs genuine stakes with comedic writing. d20 rolls, ability scores, armor class, saving throws, and advantage/disadvantage drive a grid-based tactical combat system with movement, ranges, and per-encounter battlefields. The architecture is ScriptableObject-driven with an event-based UI, so classes, enemies, abilities, items, and encounters are data assets rather than code. Combat supports multi-target abilities, enemy AI that scores its targets, and an inventory with consumables, with a 12-class roster planned. Quality is enforced by EditMode tests in GitHub Actions (game-ci) on every pull request and a headless autoplay harness that plays full battles with an AI-controlled party, recording screenshots, combat logs, and balance statistics.",
    tags: ["Unity", "C#", "ScriptableObjects", "GitHub Actions", "Game Design"],
    status: "In Progress",
    link: "#",
    github: "https://github.com/amihali1/sticklers-gate",
  },
  {
    title: "Agentic AI Dev Pipeline",
    slug: "agentic-ai-dev-pipeline",
    description:
      "Multi-agent code pipeline powered by Claude with SQLite-backed memory, running designer, engineer, tester, and reviewer agents in a self-correcting loop.",
    longDescription:
      "A multi-agent development pipeline built on the Anthropic SDK where specialized agents — designer, engineer, tester, and reviewer — collaborate sequentially on a task. The tester and reviewer can send work back to the engineer for revisions, up to a configurable retry limit, before the pipeline continues forward. A SQLite memory store gives each agent recall of similar past work, using SHA-256 hashing for exact-match lookup with a recency fallback. The entire system is written in TypeScript and designed to be composable: agents are plain config objects, making it easy to add new roles or swap models.",
    tags: ["TypeScript", "Anthropic SDK", "SQLite", "Multi-Agent"],
    status: "In Progress",
    link: "#",
    github: "https://github.com/amihali1/agent-orchestrator",
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
      "A modern portfolio site built with Next.js 15 App Router, React 19, and TypeScript. Features dark/light theme switching, smooth scroll-triggered animations via IntersectionObserver, a grain texture overlay, and a print-ready resume page. Centralized data management keeps content easy to update. Statically exported and deployed to GitHub Pages by GitHub Actions on every push.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    status: "Active",
    link: "https://amihali1.github.io",
    github: "https://github.com/amihali1/amihali1.github.io",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Zip Co",
    period: "2022 — Present",
    description:
      "Focused on identity verification and fraud since 2023. Led the integration of a new primary identity verification provider end to end — vendor research, technical design, a new provider gateway (request/response mapping, reason codes, PII scrubbing), shadow-mode validation, and the production cutover that replaced the legacy provider — and rolled out a third-party first-party fraud model from 25% to 100% of traffic with zero failed vendor calls. Led the Plaid bank-data IDV program ahead of its October 2026 rollout: sized and designed it, scoped it into 6 epics and 32 stories across the team, personally delivered about 60 tickets, and built it to be configurable for a future cashflow underwriting flow. Retired two legacy IDV vendors, worked on the team that delivered document and selfie verification (customer-unblock decisioning, adverse action notices), and helped build a fraud-screening order gateway. Also worked on bank-data underwriting, ML model integrations in the decision engine, credit-line products, and platform upgrades (.NET 10, Kubernetes and Redis migration, backend SLOs). Software Engineer 2022–2025; Senior since 2025.",
    tech: ["C#", ".NET", "Plaid", "Kubernetes", "Redis", "Azure Service Bus", "Dynatrace", "Terraform"],
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
    period: "Sep 2018 — Dec 2019",
    description: "Developed data validation and file parsing programs using Informatica.",
    tech: ["Informatica", "SQL"],
  },
  {
    role: "Software Engineer II / Form Developer II",
    company: "Change Healthcare",
    period: "Aug 2015 — Aug 2018",
    description:
      "Built AccuPost, automated data entry software in C# that posted payments and adjustments to healthcare information systems. Developed OCR-based claim form processing.",
    tech: ["C#", ".NET", "OCR"],
  },
  {
    role: "Applications Developer II",
    company: "International Paper",
    period: "Jul 2014 — Aug 2015",
    description:
      "Built mobile applications and SAP (ABAP) manufacturing software for data transfer between SAP and devices; trained new hires on the platform.",
    tech: ["SAP", "ABAP", "Mobile"],
  },
];

export const SKILLS: SkillGroup[] = [
  { category: "Languages", items: ["C#", "SQL", "TypeScript", "JavaScript", "Python", "Java"] },
  {
    category: "Frameworks & Tools",
    items: [".NET / .NET Core", "Terraform", "Redis", "Docker", "Kubernetes", "Azure Service Bus", "Camunda", "Auth0",
      "Databricks", "Dynatrace", "CI/CD Pipelines", "BDD Testing"],
  },
  {
    category: "Domain",
    items: ["Identity verification (KYC)", "Fraud prevention", "Underwriting & decisioning", "PII handling",
      "Adverse action notices", "Feature-flagged rollouts"],
  },
  { category: "AI & Productivity", items: ["Claude Code", "Cursor", "ChatGPT", "Codex", "herdr"] },
  { category: "Software", items: ["Visual Studio", "JetBrains Rider", "Azure DevOps", "AWS"] },
  { category: "Version Control", items: ["Git", "GitHub", "GitLab", "Azure DevOps (TFS)"] },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
