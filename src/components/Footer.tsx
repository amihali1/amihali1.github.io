"use client";

import { useTheme } from "@/context/ThemeContext";

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
        © {new Date().getFullYear()} — Built with Next.js, hosted from a homelab
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
