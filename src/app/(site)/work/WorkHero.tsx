"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  animateTextReveal,
  cleanupTextReveal,
} from "@/components/animations/textReveal";
import BookACallButton from "@/components/ui/ButtonWork";
import "@/styles/animations.css";

export default function WorkHero() {
  const pathname = usePathname();

  useEffect(() => {
    // small timeout helps avoid layout race conditions
    const t = setTimeout(() => {
      animateTextReveal(".work-title .line span", 0.1);
    }, 50);

    return () => {
      clearTimeout(t);
      cleanupTextReveal();
    };
  }, [pathname]);

  return (
    <section className="work-hero">
      <div className="work-hero-inner">
        <p className="eyebrow css-fadein-1">Quality Projects, Built Right</p>

        <h1 className="work-title">
          <div className="line gsap-boost" style={{ overflow: "hidden" }}>
            <span style={{ display: "inline-block" }}>
              Unlimited value <span className="italic">through every</span>
            </span>
          </div>
          <div className="line gsap-boost" style={{ overflow: "hidden" }}>
            <span style={{ display: "inline-block" }}>
              {" "}
              <span className="italic">project</span> we build.
            </span>
          </div>
        </h1>

        <p className="work-sub css-fadein-1-2">
          Explore our curated portfolio of Digital Work and Media project, case
          studies, videos, and visual work completed for brands worldwide.
        </p>
      </div>
      <div className="css-fadeup-1-2">
        {/* <button className="button-30 " role="button">
          <a href="/contact">Book a Consultation</a>
        </button> */}
        <BookACallButton />
      </div>
    </section>
  );
}
