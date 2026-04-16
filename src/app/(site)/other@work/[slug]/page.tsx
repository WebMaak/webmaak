import { PROJECTS } from "@/data/work";
import SlugHero from "../../work/[slug]/sections/SlugHero";
import SlugWebsitePreview from "../../work/[slug]/sections/SlugWebsitePreview";
import SlugOverview from "../../work/[slug]/sections/SlugOverview";
import SlugGallery from "../../work/[slug]/sections/SlugGallery";
import SlugDetailBlock from "../../work/[slug]/sections/SlugDetailBlock";
import SlugDeliverables from "../../work/[slug]/sections/SlugDeliverables";
import SlugFAQ from "../../work/[slug]/sections/SlugFAQ";
import { ProjectType } from "@/lib/types/project";
import { notFound } from "next/navigation";

// OPTIONAL: SEO metadata generation
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
    title: `${project.title} | Work`,
    description: project.desc,
    openGraph: {
      title: project.title,
      description: project.desc,
      images: [{ url: project.hero || project.thumbnail }],
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
