"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { useTheme } from "@/context/ThemeContext";
import { EXPERIENCE } from "@/lib/data";

export default function WorkHistory() {
  const { colors } = useTheme();

  return (
    <section
      id="work"
      style={{
        padding: "120px 40px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
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
            Experience
          </h2>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              color: colors.textMuted,
            }}
          >
            {EXPERIENCE.length} roles
          </span>
        </div>
      </AnimatedSection>

      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {EXPERIENCE.map((job, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: "40px",
                padding: "32px 0",
                borderTop: `1px solid ${colors.border}`,
                alignItems: "start",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "13px",
                    color: colors.textMuted,
                    marginBottom: "4px",
                  }}
                >
                  {job.period}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: colors.accent,
                    fontWeight: 500,
                  }}
                >
                  {job.company}
                </div>
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    margin: "0 0 12px",
                    letterSpacing: "-0.01em",
                    color: colors.text,
                  }}
                >
                  {job.role}
                </h3>
                <p
                  style={{
                    color: colors.textMuted,
                    lineHeight: 1.7,
                    margin: "0 0 16px",
                    fontSize: "15px",
                  }}
                >
                  {job.description}
                </p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "11px",
                        padding: "4px 10px",
                        background: colors.accentDim,
                        color: colors.accent,
                        borderRadius: "4px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
