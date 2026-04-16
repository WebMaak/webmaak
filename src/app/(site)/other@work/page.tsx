import type { Metadata } from "next";
import WorkHero from "../work/WorkHero";
import WorkInteractive from "../work/WorkInteractive";
import Header from "@/components/layout/Navbar/Header";
import "@/styles/work/work.css";

export const metadata: Metadata = {
  title: "Our Work — WebMaak",
  description:
    "Explore WebMaak’s IT and Media projects including websites, applications, branding, 3D, and media production.",
  alternates: { canonical: "https://webmaak.com/work" },
  robots: { index: true, follow: true },
};

import { PROJECTS } from "@/data/personal-work";

export default function WorkPage() {
  return (
    <main className="work-page-wrapper">
      <Header />
      <WorkHero />
      <WorkInteractive projects={PROJECTS} />
    </main>
  );
}
