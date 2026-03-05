"use client";

import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import WorkHistory from "@/components/sections/WorkHistory";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Contact from "@/components/sections/Contact";
import { useTheme } from "@/context/ThemeContext";

type SectionId = "home" | "work" | "projects" | "contact";

export default function HomeClient() {
  const { isDark, colors } = useTheme();
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const scrollTo = (id: SectionId) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Update active section on scroll
  useEffect(() => {
    const sections: SectionId[] = ["home", "work", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        background: colors.bg,
        color: colors.text,
        minHeight: "100vh",
        fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif",
        transition: "background 0.5s, color 0.5s",
        position: "relative",
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

      <Nav activeSection={activeSection} onNavigate={scrollTo} />
      <Hero />
      <WorkHistory />
      <ProjectsSection />
      <Contact />
      <Footer />

      <style>{`
        * { scrollbar-width: thin; scrollbar-color: ${colors.border} transparent; }
        ::selection { background: ${colors.accent}; color: ${isDark ? "#0A0A0B" : "#FFFFFF"}; }
        input::placeholder, textarea::placeholder { color: ${colors.textMuted}; opacity: 0.5; }
      `}</style>
    </div>
  );
}
