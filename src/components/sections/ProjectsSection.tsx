"use client";

import { useState } from "react";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import { useTheme } from "@/context/ThemeContext";
import { PROJECTS } from "@/lib/data";

export default function ProjectsSection() {
  const { colors } = useTheme();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      style={{ padding: "120px 40px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <AnimatedSection>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: "64px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              margin: 0,
              color: colors.text,
            }}
          >
            Projects
          </h2>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              color: colors.textMuted,
            }}
          >
            Side work &amp; experiments
          </span>
        </div>
      </AnimatedSection>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "20px",
        }}
      >
        {PROJECTS.map((project, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <Link
              href={`/projects/${project.slug}`}
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
              onMouseEnter={() => setHoveredProject(i)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                style={{
                  background: colors.bgCard,
                  border: `1px solid ${hoveredProject === i ? colors.accent : colors.border}`,
                  borderRadius: "10px",
                  padding: "32px",
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  transform: hoveredProject === i ? "translateY(-4px)" : "translateY(0)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color:
                        project.status === "Active" ||
                        project.status === "In Progress"
                          ? colors.accent
                          : colors.textMuted,
                      background:
                        project.status === "Active" ||
                        project.status === "In Progress"
                          ? colors.accentDim
                          : "transparent",
                      padding: "3px 8px",
                      borderRadius: "3px",
                    }}
                  >
                    {project.status}
                  </span>
                  <span
                    style={{
                      fontSize: "18px",
                      color: colors.textMuted,
                      transition: "transform 0.3s",
                      transform:
                        hoveredProject === i
                          ? "translate(3px, -3px)"
                          : "translate(0, 0)",
                      display: "inline-block",
                    }}
                  >
                    ↗
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    margin: "0 0 12px",
                    letterSpacing: "-0.01em",
                    color: colors.text,
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: colors.textMuted,
                    fontSize: "14px",
                    lineHeight: 1.7,
                    margin: "0 0 20px",
                    flex: 1,
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "11px",
                        padding: "3px 8px",
                        border: `1px solid ${colors.border}`,
                        borderRadius: "4px",
                        color: colors.textMuted,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
