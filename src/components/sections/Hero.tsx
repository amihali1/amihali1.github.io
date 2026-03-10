"use client";

import { useState, useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { useTheme } from "@/context/ThemeContext";
import { SKILLS } from "@/lib/data";

export default function Hero() {
  const { colors } = useTheme();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const links = [
    { label: "GitHub", icon: "↗", href: "https://github.com/amihali1", external: true },
    { label: "LinkedIn", icon: "↗", href: "https://www.linkedin.com/in/andrew-mihalik-38207a83/", external: true },
    { label: "Resume", icon: "↓", href: "/resume", external: false },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "120px 40px 80px",
        maxWidth: "1100px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <AnimatedSection>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            color: colors.textMuted,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          {time.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          {" — "}
          Chattanooga, TN
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <h1
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 400,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            margin: "0 0 32px",
            color: colors.text,
          }}
        >
          Andrew Mihalik
          <br />
          Building software
          <br />
          that{" "}
          <em style={{ fontStyle: "italic", color: colors.accent }}>works</em>
        </h1>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.7,
            color: colors.textMuted,
            maxWidth: "560px",
            margin: "0 0 48px",
            fontWeight: 300,
          }}
        >
          Senior Software Engineer with 12+ years of experience building
          scalable backend systems in C# and .NET. Skilled in underwriting
          platforms, identity verification, infrastructure-as-code, and
          leveraging AI-assisted development tools.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = colors.accent;
                el.style.background = colors.accentDim;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = colors.border;
                el.style.background = "transparent";
              }}
            >
              {link.label}
              <span style={{ fontSize: "14px" }}>{link.icon}</span>
            </a>
          ))}
        </div>
      </AnimatedSection>

      {/* Skills grid */}
      <AnimatedSection delay={0.4}>
        <div
          style={{
            marginTop: "80px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
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
                  fontSize: "14px",
                  color: colors.textMuted,
                  lineHeight: 1.6,
                }}
              >
                {group.items.join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
