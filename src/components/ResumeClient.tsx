"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { EXPERIENCE, SKILLS } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";

export default function ResumeClient() {
  const { isDark, colors, toggleTheme } = useTheme();

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
          <button
            onClick={() => window.print()}
            style={{
              background: colors.accent,
              border: "none",
              borderRadius: "6px",
              padding: "8px 20px",
              color: colors.bg,
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Print / PDF ↓
          </button>

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

      {/* Resume content */}
      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "120px 40px 120px",
        }}
      >
        {/* Header */}
        <AnimatedSection>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              paddingBottom: "40px",
              borderBottom: `1px solid ${colors.border}`,
              marginBottom: "56px",
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: "clamp(36px, 5vw, 56px)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  margin: "0 0 8px",
                  color: colors.text,
                }}
              >
                Andrew M. Mihalik
              </h1>
              <p
                style={{
                  fontSize: "16px",
                  color: colors.textMuted,
                  margin: 0,
                  fontWeight: 300,
                }}
              >
                Senior Software Engineer — Chattanooga, TN
              </p>
            </div>
            <div
              style={{
                textAlign: "right",
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                color: colors.textMuted,
                lineHeight: 2,
              }}
            >
              <div><a href="https://github.com/amihali1" target="_blank" rel="noopener noreferrer" style={{ color: colors.textMuted, textDecoration: "none" }}>github.com/amihali1</a></div>
              <div><a href="https://www.linkedin.com/in/andrew-mihalik-38207a83/" target="_blank" rel="noopener noreferrer" style={{ color: colors.textMuted, textDecoration: "none" }}>linkedin.com/in/andrew-mihalik-38207a83</a></div>
            </div>
          </div>
        </AnimatedSection>

        {/* Summary */}
        <AnimatedSection delay={0.05}>
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: colors.accent,
                marginBottom: "16px",
              }}
            >
              Summary
            </h2>
            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.8,
                color: colors.textMuted,
                maxWidth: "680px",
              }}
            >
              Senior Software Engineer with 12+ years of experience building
              scalable backend systems in C# and .NET. Proven track record in
              underwriting platforms, identity verification, and enterprise API
              development. Skilled in designing and scoping large-scale projects,
              infrastructure-as-code, and leveraging AI-assisted development
              tools to drive engineering excellence.
            </p>
          </section>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection delay={0.1}>
          <section style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: colors.accent,
                marginBottom: "32px",
              }}
            >
              Experience
            </h2>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "40px" }}
            >
              {EXPERIENCE.map((job, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "180px 1fr",
                    gap: "32px",
                    paddingBottom: "40px",
                    borderBottom:
                      i < EXPERIENCE.length - 1
                        ? `1px solid ${colors.border}`
                        : "none",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "12px",
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
                        fontSize: "18px",
                        fontWeight: 500,
                        margin: "0 0 10px",
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
                        margin: "0 0 14px",
                        fontSize: "15px",
                      }}
                    >
                      {job.description}
                    </p>
                    <div
                      style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}
                    >
                      {job.tech.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "11px",
                            padding: "3px 8px",
                            background: colors.accentDim,
                            color: colors.accent,
                            borderRadius: "3px",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection delay={0.15}>
          <section>
            <h2
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: colors.accent,
                marginBottom: "24px",
              }}
            >
              Skills
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "1px",
                background: colors.border,
                border: `1px solid ${colors.border}`,
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              {SKILLS.map((group) => (
                <div
                  key={group.category}
                  style={{ background: colors.bgCard, padding: "20px 24px" }}
                >
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "10px",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: colors.accent,
                      marginBottom: "10px",
                    }}
                  >
                    {group.category}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: colors.textMuted,
                      lineHeight: 1.8,
                    }}
                  >
                    {group.items.join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </main>

      <style>{`
        @media print {
          nav { display: none !important; }
          main { padding-top: 40px !important; }
          div[style*="position: fixed"] { display: none !important; }
        }
        ::selection { background: ${colors.accent}; color: ${isDark ? "#0A0A0B" : "#FFFFFF"}; }
      `}</style>
    </div>
  );
}
