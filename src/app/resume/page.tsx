import ResumeClient from "@/components/ResumeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume — Portfolio",
};

export default function ResumePage() {
  return <ResumeClient />;
}
