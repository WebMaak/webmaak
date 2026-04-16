import Image from "next/image";
import { ProjectType } from "@/lib/types/project";
import "@/styles/work/slug.css";
import { Link as LucideLink, ChevronsRight } from "lucide-react";
import Link from "next/link";
export default function SlugHero({ project }: { project: ProjectType }) {
  const { category, title, desc, tags, hero, videoUrl, listBlock } = project;

  const categoryLabel = category === "it" ? "Digital Work" : "Media Work";
  const deliverablesCount = listBlock?.[0]?.points?.length
    ? listBlock[0].points.length
    : 0;
  const projectType = tags?.[0] || "Project";

  return (
    <section className="slug-hero-container">
      <div className="wrapper">
        {/* LEFT — MEDIA BLOCK */}
        <div className="slug-hero-media">
          {videoUrl ? (
            <div className="slug-hero-video-wrapper">
              <iframe
                src={videoUrl}
                title={title}
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <div className="slug-hero-image-wrapper">
              <Image
                src={
                  hero.includes("cloudinary.com")
                    ? hero.replace("/upload/", "/upload/f_auto,q_auto,w_700/")
                    : hero
                }
                alt={title}
                width={600}
                height={250}
                className="slug-hero-img"
                priority
              />
            </div>
          )}
        </div>

        {/* RIGHT — CONTENT PANEL */}
        <div className="slug-hero-content">
          <div>
            <p className="slug-hero-breadcrumb">
              <Link href="/work">
                /Work{" "}
                <ChevronsRight
                  size={14}
                  strokeWidth={2}
                  className="breadcrumb-arrow"
                />
              </Link>
            </p>

            <h1 className="slug-hero-title">{title}</h1>

            <p className="slug-hero-desc">{desc}</p>

            <div className="slug-hero-tags">
              {tags.map((tag) => (
                <span key={tag} className="slug-hero-tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div>
            <div className="slug-hero-meta-row">
              <div className="slug-hero-meta-col">
                <span className="meta-label">Category</span>
                <span className="meta-value">{categoryLabel}</span>
              </div>

              <div className="slug-hero-meta-col">
                <span className="meta-label">Deliverables</span>
                <span className="meta-value">{deliverablesCount} Items</span>
              </div>

              <div className="slug-hero-meta-col">
                <span className="meta-label">Project Type</span>
                <span className="meta-value">{projectType}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
