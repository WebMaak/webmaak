"use client";

import React, { useEffect, useRef } from "react";
import { ProjectType } from "@/lib/types/project";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/styles/work/slug.css";

// No need to register plugin in every component, but keep it for safety if not done elsewhere
export default function SlugOverview({ project }: { project: ProjectType }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const allChars = section.querySelectorAll(".slug-char");

      // INITIAL STATE
      gsap.set(allChars, { opacity: 0.4 });

      // ONE COMBINED SCROLL ANIMATION
      gsap.to(allChars, {
        opacity: 1,
        stagger: 0.65,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
          end: "top 10%",
          scrub: 0.5, // SMOOTHING
        },
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const overviewBlocks = project.slugOverview || [];

  return (
    <section ref={sectionRef} className="slug-overview-section">
      <div className="slug-overview-wrapper">
        {overviewBlocks.map((block, index) => (
          <div key={index} className="slug-overview-block">
            <h2 className="slug-overview-heading">
              {[...block.heading].map((char, i) => (
                <span key={i} className="slug-char">
                  {char}
                </span>
              ))}
            </h2>
            <p className="slug-overview-text">
              {[...block.text].map((char, i) => (
                <span key={i} className="slug-char">
                  {char}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
