"use client";

import React from "react";
import { ProjectType } from "@/lib/types/project";
import "@/styles/work/slug.css";

export default function SlugDeliverables({
  project,
}: {
  project: ProjectType;
}) {
  const blocks = project.listBlock || [];

  if (!blocks.length) return null;

  return (
    <section className="slug-deliverables-section">
      <div className="slug-deliverables-wrapper">
        {blocks.map((block, index) => (
          <div key={index} className="slug-deliverables-block">
            <h2 className="slug-deliverables-heading">{block.heading}</h2>

            <ol className="slug-deliverables-list">
              {block.points.map((point, i) => (
                <li key={i} className="slug-deliverables-item">
                  {point}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
