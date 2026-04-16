// Work listing page (uses local JSON data, filters, tags).
"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import "@/styles/work/work.css";
import { PROJECTS } from "@/data/work"; // make sure this path matches your file

export const metadata: Metadata = {
  title: "Our Work — WebMaak",
  description:
    "Explore WebMaak’s IT and Media projects including websites, applications, branding, 3D, and media production.",
  alternates: { canonical: "https://webmaak.com/work" },
  robots: { index: true, follow: true },
};

type CategoryKey = "all" | "it" | "media";

function uniqueTagsForCategory(category: CategoryKey) {
  if (category === "all") {
    const set = new Set<string>();
    PROJECTS.forEach((p) => p.tags.forEach((t: string) => set.add(t)));
    return Array.from(set);
  }
  return Array.from(
    new Set(
      PROJECTS.filter((p) => p.category === category).flatMap((p) => p.tags),
    ),
  );
}

export default function WorkPage() {
  const [category, setCategory] = useState<CategoryKey>("all");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const availableTags = useMemo(
    () => uniqueTagsForCategory(category),
    [category],
  );

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
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
  }, [category, activeTags, search]);

  function toggleTag(tag: string) {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  }

  function clearFilters() {
    setCategory("all");
    setActiveTags([]);
    setSearch("");
  }

  return (
    <main className="work-page">
      <section className="work-hero">
        <div className="work-hero-inner">
          <p className="eyebrow">Top-Notch Features</p>
          <h1 className="work-title">
            Get <span className="italic">Unlimited</span> Benefits When Creating
            Projects
          </h1>
          <p className="work-sub">
            Explore our curated portfolio of Digital Work and Media projects —
            case studies, videos, and visual work.
          </p>
        </div>
      </section>

      <section className="work-controls">
        <div
          className="category-switch"
          role="tablist"
          aria-label="Work categories"
        >
          <button
            className={`cat-btn ${category === "all" ? "active" : ""}`}
            onClick={() => {
              setCategory("all");
              setActiveTags([]);
            }}
            aria-pressed={category === "all"}
          >
            All Work
          </button>

          <button
            className={`cat-btn ${category === "it" ? "active" : ""}`}
            onClick={() => {
              setCategory("it");
              setActiveTags([]);
            }}
            aria-pressed={category === "it"}
          >
            Digital Work
          </button>

          <button
            className={`cat-btn ${category === "media" ? "active" : ""}`}
            onClick={() => {
              setCategory("media");
              setActiveTags([]);
            }}
            aria-pressed={category === "media"}
          >
            Media Work
          </button>
        </div>

        <div className="search-clear">
          <input
            type="search"
            className="work-search"
            placeholder="Search projects, tags or descriptions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search projects"
          />
          <button
            className="clear-btn"
            onClick={clearFilters}
            aria-label="Clear filters"
          >
            Clear
          </button>
        </div>

        <div className="tag-filters" aria-label="Tag filters">
          <div className="tag-list">
            {availableTags.map((tag) => {
              const active = activeTags.includes(tag);
              return (
                <button
                  key={tag}
                  className={`tag ${active ? "active" : ""}`}
                  onClick={() => toggleTag(tag)}
                  aria-pressed={active}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="projects-grid-section">
        <div className="grid-meta">
          <p className="results">
            Showing <strong>{filtered.length}</strong> project
            {filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="projects-grid">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="empty-state">
            <p>No projects match your filters.</p>
            <button className="clear-btn" onClick={clearFilters}>
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

/* ------------------------------
   Subcomponents
   ------------------------------ */

function ProjectCard({ project }: { project: any }) {
  return (
    <article className="project-card">
      <Link
        href={`/work/${project.slug}`}
        className="card-link"
        aria-label={`Open project ${project.title}`}
      >
        <div className="thumb-wrap" aria-hidden>
          <img
            src={project.thumbnail}
            alt={project.title}
            className="card-thumb"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="card-body">
          <div className="card-meta">
            <div className="card-tags">
              {project.tags.slice(0, 2).map((t: string) => (
                <span key={t} className="tag-pill">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <h3 className="card-title">{project.title}</h3>
          <p className="card-desc">{project.desc}</p>

          <div className="card-cta">
            <span className="view">View Project →</span>
          </div>
        </div>
      </Link>
    </article>
  );
}
