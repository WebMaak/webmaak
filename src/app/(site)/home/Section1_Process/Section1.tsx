// "4 cards" feature section.
import type { Metadata } from "next";
import SectionTitleBlock from "@/components/sectionsShared/SectionTitleBlock";
import ProcessSection from "./Process";

export const metadata: Metadata = {
  title: "WebMaak — Development Navigation",
  description:
    "Temporary development navigation to access all pages during the build process.",
};

export default function RootDevelopmentPage() {
  return (
    <>
      <div data-theme="light" id="process">
        <SectionTitleBlock
          normal1="How We Bring Your"
          normal2="Ideas"
          italic2="to Life"
          description="At WebMaak Creative, we believe great work starts with a great partnership. Here’s how we roll from your first 'What if...' to your final 'Wow!'."
          theme="light"
        />
        <ProcessSection />
      </div>
    </>
  );
}
