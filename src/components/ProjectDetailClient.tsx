"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { Project } from "@/lib/types";
import AnimatedSection from "@/components/AnimatedSection";

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const { isDark, colors, toggleTheme } = useTheme();

  const statusIsActive =
    project.status === "Active" || project.status === "In Progress";

  return (
    <div
      style={{
        background: colors.bg,
        color: colors.text,
        minHeight: "100vh",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        transition: "background 0.5s, color 0.5s",
      }}
    >
      {/* Grain overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          opacity: isDark ? 0.03 : 0.02,
          pointerEvents: "none",
          zIndex: 999,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Nav */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backdropFilter: "blur(20px)",
          background: isDark ? "rgba(10,10,11,0.8)" : "rgba(250,250,248,0.8)",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "22px",
            fontStyle: "italic",
            letterSpacing: "-0.02em",
            color: colors.text,
            textDecoration: "none",
          }}
        >
          portfolio<span style={{ color: colors.accent }}>.</span>
        </Link>

        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <Link
            href="/#projects"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: colors.textMuted,
              textDecoration: "none",
              transition: "color 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = colors.accent)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = colors.textMuted)
            }
          >
            ← All Projects
          </Link>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: colors.bgCard,
              border: `1px solid ${colors.border}`,
              borderRadius: "20px",
              width: "44px",
              height: "24px",
              cursor: "pointer",
              position: "relative",
              transition: "all 0.3s",
            }}
          >
            <div
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                background: colors.accent,
                position: "absolute",
                top: "2px",
                left: isDark ? "22px" : "2px",
                transition: "left 0.3s cubic-bezier(0.16,1,0.3,1)",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Content */}
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "140px 40px 120px",
        }}
      >
        <AnimatedSection>
          <div style={{ marginBottom: "16px" }}>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: statusIsActive ? colors.accent : colors.textMuted,
                background: statusIsActive ? colors.accentDim : "transparent",
                padding: "4px 10px",
                borderRadius: "4px",
              }}
            >
              {project.status}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 400,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              margin: "0 0 24px",
              color: colors.text,
            }}
          >
            {project.title}
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "48px" }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "12px",
                  padding: "5px 12px",
                  border: `1px solid ${colors.border}`,
                  borderRadius: "4px",
                  color: colors.textMuted,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div
            style={{
              background: colors.bgCard,
              border: `1px solid ${colors.border}`,
              borderRadius: "10px",
              padding: "40px",
              marginBottom: "48px",
            }}
          >
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.8,
                color: colors.textMuted,
                margin: 0,
              }}
            >
              {project.longDescription}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "12px 24px",
                  border: `1px solid ${colors.border}`,
                  borderRadius: "6px",
                  color: colors.text,
                  textDecoration: "none",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "13px",
                  letterSpacing: "0.04em",
                  transition: "all 0.3s",
                  background: "transparent",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.accent;
                  e.currentTarget.style.background = colors.accentDim;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.background = "transparent";
                }}
              >
                GitHub ↗
              </a>
            )}
            <Link
              href="/#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 24px",
                border: `1px solid ${colors.border}`,
                borderRadius: "6px",
                color: colors.textMuted,
                textDecoration: "none",
                fontFamily: "'DM Mono', monospace",
                fontSize: "13px",
                letterSpacing: "0.04em",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = colors.text;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.textMuted;
              }}
            >
              ← Back to projects
            </Link>
          </div>
        </AnimatedSection>
      </main>

      <style>{`
        ::selection { background: ${colors.accent}; color: ${isDark ? "#0A0A0B" : "#FFFFFF"}; }
      `}</style>
    </div>
  );
}
