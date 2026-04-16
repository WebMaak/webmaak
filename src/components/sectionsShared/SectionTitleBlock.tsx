"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/shared/section-title-block.css";

interface SectionTitleBlockProps {
  normal1?: string;
  italic1?: string;
  normal2?: string;
  italic2?: string;
  description?: string;
  theme?: "dark" | "light";
}

export default function SectionTitleBlock({
  normal1,
  italic1,
  normal2,
  italic2,
  description,
  theme = "light",
}: SectionTitleBlockProps) {
  const blockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = blockRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const lines = root.querySelectorAll<HTMLElement>(".title-line");
      const desc = root.querySelector<HTMLElement>(".section-desc");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 80%",
          once: true,
        },
      });

      /* Heading fade-in */
      tl.fromTo(
        lines,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power1.out",
          stagger: 0.15,
        },
      );

      /* Description fade-in */
      if (desc) {
        tl.fromTo(
          desc,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 0.5,
            ease: "power1.out",
          },
          "-=0.2",
        );
      }

      ScrollTrigger.refresh();
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div className={`section-title-block ${theme}`} ref={blockRef}>
      <h2 className={`section-title ${theme}`}>
        {(normal1 || italic1) && (
          <span className={`title-line ${theme}`}>
            {normal1 && (
              <span className={`title-normal ${theme}`}>{normal1} </span>
            )}
            {italic1 && (
              <span className={`title-italic ${theme}`}>{italic1}</span>
            )}
          </span>
        )}

        {(normal2 || italic2) && (
          <span className={`title-line ${theme}`}>
            {normal2 && (
              <span className={`title-normal ${theme}`}>{normal2} </span>
            )}
            {italic2 && (
              <span className={`title-italic ${theme}`}>{italic2}</span>
            )}
          </span>
        )}
      </h2>

      {description && <p className={`section-desc ${theme}`}>{description}</p>}
    </div>
  );
}
