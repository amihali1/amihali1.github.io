"use client";

import { useTheme } from "@/context/ThemeContext";

const NAV_ITEMS = ["home", "work", "projects", "contact"] as const;
type NavItem = (typeof NAV_ITEMS)[number];

interface NavProps {
  activeSection: string;
  onNavigate: (id: NavItem) => void;
}

export default function Nav({ activeSection, onNavigate }: NavProps) {
  const { isDark, colors, toggleTheme } = useTheme();

  return (
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
      <div
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontSize: "22px",
          fontStyle: "italic",
          letterSpacing: "-0.02em",
          cursor: "pointer",
          color: colors.text,
        }}
        onClick={() => onNavigate("home")}
      >
        portfolio<span style={{ color: colors.accent }}>.</span>
      </div>

      <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => onNavigate(item)}
            style={{
              background: "none",
              border: "none",
              color: activeSection === item ? colors.accent : colors.textMuted,
              cursor: "pointer",
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "4px 0",
              borderBottom:
                activeSection === item
                  ? `1px solid ${colors.accent}`
                  : "1px solid transparent",
              transition: "all 0.3s",
            }}
          >
            {item}
          </button>
        ))}

        {/* Theme toggle */}
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
            marginLeft: "8px",
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
  );
}
