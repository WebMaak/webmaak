"use client";

import React from "react";
import { ProjectType } from "@/lib/types/project";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import "@/styles/work/slug.css";

export default function SlugWebsitePreview({
  project,
}: {
  project: ProjectType;
}) {
  if (!project.websitePreview || !project.domain) return null;

  return (
    <section className="slug-website-preview-section">
      <div className="slug-website-preview-wrapper">
        {/* Preview Frame */}
        <div className="slug-browser-frame">
          {/* Mac Window Header */}
          <div className="slug-mac-header">
            <div className="slug-mac-controls">
              <span className="slug-mac-dot slug-mac-red"></span>
              <span className="slug-mac-dot slug-mac-yellow"></span>
              <span className="slug-mac-dot slug-mac-green"></span>
            </div>
            <div className="slug-mac-title">{project.title}</div>
          </div>

          {/* Browser Inner Container */}
          <div className="slug-browser-inner">
            {/* Website Preview - Scrollable Image */}
            <div className="slug-image-scroll-container">
              <Image
                src={project.websitePreview}
                alt={`${project.title} website preview`}
                width={1920}
                height={1080}
                className="slug-preview-image"
                priority
              />
            </div>
          </div>

          {/* Bottom White Bar */}
          <div className="slug-website-bottom-bar">
            <a
              href={project.domain}
              target="_blank"
              rel="noopener noreferrer"
              className="slug-visit-btn"
            >
              Visit Website <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
