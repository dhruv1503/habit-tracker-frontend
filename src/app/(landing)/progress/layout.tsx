import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Progress",
  description: "Track what's done and what's upcoming",
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
