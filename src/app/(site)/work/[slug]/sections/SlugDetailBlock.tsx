"use client";

import React from "react";
import Image from "next/image";
import { ProjectType } from "@/lib/types/project";
import "@/styles/work/slug.css";

export default function SlugDetailBlock({ project }: { project: ProjectType }) {
  const detailBlocks = project.slugDetailBlock || [];

  return (
    <section className="slug-detail-section">
      <div className="slug-detail-wrapper">
        {detailBlocks.map((block, index) => {
          const optimizedLink = block.link.includes("cloudinary.com")
            ? block.link.replace("/upload/", "/upload/f_auto,q_auto,w_1000/")
            : block.link;

          return (
            <div key={index} className="slug-detail-item">
              {/* LEFT IMAGE */}
              <div className="slug-detail-image-wrap">
                <Image
                  src={optimizedLink}
                  alt=""
                  width={1000}
                  height={800}
                  className="slug-detail-image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* RIGHT TEXT */}
              <div className="slug-detail-text">
                <p>{block.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
