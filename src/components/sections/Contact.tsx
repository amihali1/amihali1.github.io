"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { useTheme } from "@/context/ThemeContext";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { colors } = useTheme();
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"sent" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sent");
    setTimeout(() => setFormStatus(null), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    background: colors.bgCard,
    border: `1px solid ${colors.border}`,
    borderRadius: "6px",
    color: colors.text,
    fontSize: "15px",
    fontFamily: "'DM Sans', sans-serif",
    outline: "none",
    transition: "border-color 0.3s",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.1em",
    color: colors.textMuted,
    display: "block",
    marginBottom: "8px",
  };

  const contactLinks = [
    { label: "GitHub", value: "github.com/amihali1", href: "https://github.com/amihali1" },
    { label: "LinkedIn", value: "linkedin.com/in/andrew-mihalik", href: "https://linkedin.com/in/andrew-mihalik" },
  ];

  return (
    <section
      id="contact"
      style={{ padding: "120px 40px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <AnimatedSection>
        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "clamp(36px, 5vw, 56px)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            margin: "0 0 16px",
            color: colors.text,
          }}
        >
          Get in touch
        </h2>
        <p
          style={{
            color: colors.textMuted,
            fontSize: "16px",
            marginBottom: "48px",
            maxWidth: "480px",
          }}
        >
          Have a project in mind, want to collaborate, or just want to say hi?
          Drop me a message.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
        >
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {(["name", "email"] as const).map((key) => (
              <div key={key}>
                <label style={labelStyle}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </label>
                <input
                  type={key === "email" ? "email" : "text"}
                  value={formData[key]}
                  onChange={(e) =>
                    setFormData({ ...formData, [key]: e.target.value })
                  }
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.target.style.borderColor = colors.accent)
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = colors.border)
                  }
                />
              </div>
            ))}
            <div>
              <label style={labelStyle}>Message</label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                style={{ ...inputStyle, resize: "vertical" }}
                onFocus={(e) => (e.target.style.borderColor = colors.accent)}
                onBlur={(e) => (e.target.style.borderColor = colors.border)}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: "14px 32px",
                background: colors.accent,
                color: colors.bg,
                border: "none",
                borderRadius: "6px",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
                cursor: "pointer",
                transition: "all 0.3s",
                alignSelf: "flex-start",
                letterSpacing: "0.02em",
              }}
            >
              {formStatus === "sent" ? "Message Sent ✓" : "Send Message"}
            </button>
          </form>

          {/* Contact info card */}
          <div
            style={{
              background: colors.bgCard,
              border: `1px solid ${colors.border}`,
              borderRadius: "10px",
              padding: "32px",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: colors.accent,
                marginBottom: "20px",
              }}
            >
              Other ways to connect
            </div>
            {contactLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "16px 0",
                  borderBottom:
                    i < contactLinks.length - 1
                      ? `1px solid ${colors.border}`
                      : "none",
                  textDecoration: "none",
                  color: colors.text,
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = colors.accent)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = colors.text)
                }
              >
                <span style={{ fontSize: "13px", color: colors.textMuted }}>
                  {item.label}
                </span>
                <span style={{ fontSize: "14px" }}>{item.value}</span>
              </a>
            ))}

            <div
              style={{
                marginTop: "28px",
                padding: "16px",
                background: colors.accentDim,
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: colors.accent,
                  animation: "pulse 2s infinite",
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: "13px", color: colors.textMuted }}>
                Open to freelance &amp; collaboration
              </span>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
