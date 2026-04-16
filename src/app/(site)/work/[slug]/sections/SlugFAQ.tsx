"use client";

import React, { useState, useRef } from "react";
import { ProjectType } from "@/lib/types/project";
import { ChevronDown } from "lucide-react";
import "@/styles/work/slug.css";

export default function SlugFAQ({ project }: { project: ProjectType }) {
  const block = project.FaQ?.[0];
  if (!block) return null;

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section className="slug-faq-section">
      <div className="slug-faq-wrapper">
        {/* LEFT SIDE INTRO */}
        <div className="slug-faq-left">
          <p className="slug-faq-label">FAQ</p>
          <p className="slug-faq-intro">
            Busting Myths and Answering Your Burning Questions. Curious? Check
            Out Our FAQs!
          </p>
        </div>

        {/* RIGHT SIDE ACCORDION */}
        <div className="slug-faq-right">
          {block.points.map((item, index) => {
            const contentRef = useRef<HTMLDivElement>(null);
            const isOpen = openIndex === index;

            const toggleHeight = () => {
              const el = contentRef.current;
              if (!el) return;

              if (isOpen) {
                el.style.height = el.scrollHeight + "px"; // set fixed height
                requestAnimationFrame(() => {
                  el.style.height = "0px"; // animate closed
                });
              } else {
                el.style.height = el.scrollHeight + "px"; // animate open
                el.addEventListener(
                  "transitionend",
                  () => {
                    if (isOpen) return;
                    el.style.height = "auto"; // fix height after animation
                  },
                  { once: true },
                );
              }

              toggle(index);
            };

            return (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={toggleHeight}>
                  <span>{item.heading}</span>

                  <ChevronDown
                    className={`faq-arrow ${isOpen ? "rotate" : ""}`}
                    size={20}
                  />
                </button>

                <div ref={contentRef} className="faq-answer-wrapper">
                  <div className="faq-answer-inner">{item.text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
