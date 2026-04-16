"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import "@/styles/work/slug.css";
import { ProjectType } from "@/lib/types/project";

export default function SlugGallery({ project }: { project: ProjectType }) {
  // Normalize schema: take first gallery object
  const gallery = project.slugGallery?.[0];
  if (!gallery) return null;

  const mainHeading = gallery.mainHeading || "";
  // normalize images to { heading, link }
  const images = (gallery.images || []).map((img: any) => {
    // find first string value among the object keys excluding 'link'
    const link =
      img.link ||
      Object.values(img).find(
        (v) => typeof v === "string" && v.startsWith("/"),
      ) ||
      "";
    // heading could be in headingOne/Two/Three/Four or a generic key
    const heading =
      img.heading ||
      img.headingOne ||
      img.headingTwo ||
      img.headingThree ||
      img.headingFour ||
      Object.values(img).find((v) => typeof v === "string" && v !== link) ||
      "";
    return { heading: String(heading), link: String(link) };
  });

  // lightbox state
  const [index, setIndex] = useState<number | null>(null);

  const open = (i: number) => setIndex(i);
  const close = () => setIndex(null);
  const next = (e?: React.SyntheticEvent) => {
    e?.stopPropagation();
    if (index === null) return;
    setIndex((index + 1) % images.length);
  };
  const prev = (e?: React.SyntheticEvent) => {
    e?.stopPropagation();
    if (index === null) return;
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <section className="slug-gallery-section">
      <div className="slug-gallery-wrapper">
        <div className="slug-gallery-top">
          <p className="slug-gallery-main-heading">{mainHeading}</p>
        </div>

        <div className="slug-gallery-grid">
          {images.map((it, i) => {
            const optimizedLink = it.link.includes("cloudinary.com")
              ? it.link.replace("/upload/", "/upload/f_auto,q_auto,w_800/")
              : it.link;

            return (
              <div key={i} className="slug-gallery-card">
                <div
                  className="slug-gallery-img-wrap"
                  onClick={() => open(i)}
                  role="button"
                  tabIndex={0}
                >
                  <Image
                    src={optimizedLink}
                    alt={it.heading}
                    width={800}
                    height={600}
                    className="slug-gallery-img"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="slug-gallery-overlay">
                    <span className="slug-gallery-view">
                      View <ArrowUpRight size={18} strokeWidth={2} />
                    </span>
                  </div>
                </div>

                <div className="slug-gallery-label">
                  <span
                    className="slug-gallery-caption"
                    onClick={() => open(i)}
                  >
                    {it.heading}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="slug-gallery-arrow"
                    onClick={() => open(i)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {index !== null && (
        <div
          className="lightbox-overlay"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-inner">
              <Image
                src={
                  images[index].link.includes("cloudinary.com")
                    ? images[index].link.replace(
                        "/upload/",
                        "/upload/f_auto,q_auto,w_1600/",
                      )
                    : images[index].link
                }
                alt={images[index].heading}
                width={1600}
                height={1200}
                className="lightbox-img"
                style={{ objectFit: "contain" }}
              />

              <button
                className="lightbox-nav left"
                onClick={prev}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="lightbox-nav right"
                onClick={next}
                aria-label="Next image"
              >
                ›
              </button>

              <button
                className="lightbox-close"
                onClick={close}
                aria-label="Close lightbox"
              >
                ✕
              </button>

              <div className="lightbox-caption">{images[index].heading}</div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
