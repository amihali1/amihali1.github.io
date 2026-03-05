export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  tags: string[];
  status: "Active" | "In Progress" | "Completed";
  link: string;
  github?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export type Theme = "dark" | "light";

export interface Colors {
  bg: string;
  bgAlt: string;
  bgCard: string;
  text: string;
  textMuted: string;
  accent: string;
  accentDim: string;
  border: string;
  borderHover: string;
}
