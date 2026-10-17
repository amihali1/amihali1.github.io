"use client";

import { useTheme } from "@/context/ThemeContext";
import { PROFILE } from "@/lib/data";

export default function Footer() {
  const { colors } = useTheme();

  return (
    <footer
      style={{
        padding: "40px",
        borderTop: `1px solid ${colors.border}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "12px",
          color: colors.textMuted,
        }}
      >
        © {new Date().getFullYear()} — {PROFILE.footerNote}
      </span>
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "12px",
          color: colors.textMuted,
        }}
      >
        Chattanooga, TN
      </span>
    </footer>
  );
}
