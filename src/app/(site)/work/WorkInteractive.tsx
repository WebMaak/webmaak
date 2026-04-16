"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ProjectType } from "@/lib/types/project";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/animations.css";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ChevronsRight,
} from "lucide-react";

type CategoryKey = "it" | "media";

// Return unique tags for a specific category
function uniqueTagsForCategory(projects: ProjectType[], category: CategoryKey) {
  return Array.from(
    new Set(
      projects.filter((p) => p.category === category).flatMap((p) => p.tags),
    ),
  );
}

export default function WorkInteractive({
  projects,
}: {
  projects: ProjectType[];
}) {
  // DEFAULT = "it" ✔
  const [category, setCategory] = useState<CategoryKey>("it");

  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  // Tags for the selected category
  const availableTags = useMemo(
    () => uniqueTagsForCategory(projects, category),
    [projects, category],
  );

  // Filter projects
  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (p.category !== category) return false;
      if (activeTags.length > 0 && !activeTags.every((t) => p.tags.includes(t)))
        return false;

      if (search.trim()) {
        const q = search.trim().toLowerCase();
        return (
          p.title.toLowerCase().includes(q) ||
          p.desc.toLowerCase().includes(q) ||
          p.tags.join(" ").toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [projects, category, activeTags, search]);

  function toggleTag(tag: string) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }

  function clearFilters() {
    setActiveTags([]);
    setSearch("");
  }

  return (
    <section className="work-controls">
      {/* Category Switch */}
      <div className="category-switch" role="tablist">
        {["it", "media"].map((cat) => (
          <button
            key={cat}
            className={`cat-btn ${category === cat ? "active" : ""}`}
            onClick={() => {
              setCategory(cat as CategoryKey);
              setActiveTags([]);
            }}
          >
            {cat === "it" ? "Digital Work" : "Media Work"}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="search-clear">
        <input
          type="search"
          className="work-search"
          placeholder="Search projects, tags or descriptions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="clear-btn" onClick={clearFilters}>
          Clear
        </button>
      </div>

      {/* Tag Filters */}
      <div className="tag-filters">
        {/* Left Arrow */}
        <button
          className="tag-arrow left"
          onClick={() => {
            const el = document.querySelector(".tag-scroll");
            el?.scrollBy({ left: -200, behavior: "smooth" });
          }}
        >
          <ChevronLeft size={18} strokeWidth={2} />
        </button>

        {/* Scrollable Middle Area */}
        <div className="tag-scroll">
          {availableTags.map((tag) => {
            const active = activeTags.includes(tag);
            return (
              <button
                key={tag}
                className={`tag ${active ? "active" : ""}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          className="tag-arrow right"
          onClick={() => {
            const el = document.querySelector(".tag-scroll");
            el?.scrollBy({ left: 200, behavior: "smooth" });
          }}
        >
          <ChevronRight size={18} strokeWidth={2} />
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid-section">
        <p className="results">
          Showing <strong>{filtered.length}</strong>{" "}
          {filtered.length === 1 ? "project" : "projects"}
        </p>

        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <p>No projects match your filters.</p>
            <button className="clear-btn" onClick={clearFilters}>
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

/* -----------------------------
   PROJECT CARD SUBCOMPONENT
   ----------------------------- */

function ProjectCard({ project }: { project: any }) {
  // Optimize thumbnail URL
  const optimizedThumbnail = project.thumbnail.includes("cloudinary.com")
    ? project.thumbnail.replace("/upload/", "/upload/f_auto,q_auto,w_600/")
    : project.thumbnail;

  return (
    <motion.article
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="project-card gsap-boost"
    >
      <div className="thumb-wrap">
        <Link href={`/work/${encodeURIComponent(project.slug)}`}>
          <div className="thumb-inner">
            <Image
              src={optimizedThumbnail}
              alt={project.title}
              width={600}
              height={400}
              className="card-thumb"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Hover Arrow Button */}
            <div className="hover-arrow">
              <ArrowRight
                size={26}
                strokeWidth={1.5}
                className="hover-arrow-icon"
              />
            </div>
          </div>
        </Link>
      </div>

      <div className="card-body">
        <div className="card-tags card-meta">
          {project.tags.map((tag: string) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.desc}</p>

        <div className="cta-wrapper">
          <Link
            href={`/work/${encodeURIComponent(project.slug)}`}
            className="card-cta"
          >
            View Project
          </Link>
          <Link href={`/work/${encodeURIComponent(project.slug)}`}>
            <ChevronsRight size={16} strokeWidth={2} className="cta-arrow" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
