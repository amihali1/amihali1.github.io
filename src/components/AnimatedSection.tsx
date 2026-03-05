"use client";

import { ReactNode, CSSProperties } from "react";
import { useInView } from "@/hooks/useInView";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export default function AnimatedSection({
  children,
  delay = 0,
  className = "",
  style,
}: AnimatedSectionProps) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
