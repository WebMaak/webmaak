import { PROJECTS } from "@/data/work";
import SlugHero from "./sections/SlugHero";
import SlugWebsitePreview from "./sections/SlugWebsitePreview";
import SlugOverview from "./sections/SlugOverview";
import SlugGallery from "./sections/SlugGallery";
import SlugDetailBlock from "./sections/SlugDetailBlock";
import SlugDeliverables from "./sections/SlugDeliverables";
import SlugFAQ from "./sections/SlugFAQ";
import { ProjectType } from "@/lib/types/project";
import { notFound } from "next/navigation";

// SEO metadata generation
export async function generateMetadata({ params }: { params: any }) {
  const realParams = await params;
  const raw = Array.isArray(realParams.slug)
    ? realParams.slug[0]
    : realParams.slug;
  const slug = decodeURIComponent(String(raw)).replace(/^\/|\/$/g, "");

  const project: ProjectType | undefined = PROJECTS.find(
    (p) => p.slug === slug,
  );

  if (!project) return notFound();

  return {
    title: project.title,
    description: project.desc,
    keywords: [...(project.tags || []), "webmaak", "webmaak creative llp", "case study", "portfolio"],
    alternates: {
      canonical: `https://webmaak.com/work/${slug}`,
    },
    openGraph: {
      title: `${project.title} — WebMaak`,
      description: project.desc,
      url: `https://webmaak.com/work/${slug}`,
      images: [
        {
          url: project.hero || project.thumbnail || "/company-logos/favicon.png",
          width: 1200,
          height: 630,
          alt: `${project.title} Project Preview`,
        },
      ],
      type: "article",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}


import Header from "@/components/layout/Navbar/Header";

export default async function Page({ params }: { params: any }) {
  const realParams = await params;
  const raw = Array.isArray(realParams.slug)
    ? realParams.slug[0]
    : realParams.slug;
  const slug = decodeURIComponent(String(raw)).replace(/^\/|\/$/g, "");

  const project: ProjectType | undefined = PROJECTS.find(
    (p) => p.slug === slug,
  );

  if (!project) return notFound();

  return (
    <main className="slug-page" style={{ backgroundColor: "#fff" }}>
      <Header />
      {/* HERO SECTION */}
      <SlugHero project={project} />

      {/* Website Preview */}
      <SlugWebsitePreview project={project} />

      {/* OVERVIEW */}
      <SlugOverview project={project} />

      {/* GALLERY */}
      <SlugGallery project={project} />

      {/* SIMPLE BLOCK */}
      <SlugDetailBlock project={project} />

      {/* DELIVERABLES */}
      <SlugDeliverables project={project} />

      {/* FAQ */}
      <SlugFAQ project={project} />
    </main>
  );
}
