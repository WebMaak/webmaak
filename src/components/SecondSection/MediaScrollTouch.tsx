"use client";

import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import ProjectCards from "./ProjectCard";
import "./SecondSection.css";

export default function MediaScrollTouch() {
  return (
    <div>
      <HorizontalDragCarousel />
    </div>
  );
}

function HorizontalDragCarousel() {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  const projectData = [
    {
      id: 1,
      title: "Video Editing",
      link: "/contact@media",
      image: "/media-scroll/video-editing.jpg",
      tags: ["Premiere Pro", "DaVinci", "After Effects"],
      description:
        "Crafting stories by shaping raw footage into engaging content.",
    },
    {
      id: 2,
      title: "Motion Graphics",
      link: "/contact@media",
      image: "/media-scroll/motion-graphics.jpg",
      tags: ["DaVinci", "After Effects"],
      description:
        "Bringing visuals to life with animated design and dynamic effects.",
    },
    {
      id: 3,
      title: "3D Modelling",
      link: "/contact@media",
      image: "/media-scroll/3d-modelling.jpg",
      tags: ["Blender", "Unreal Engine"],
      description: "Creating realistic objects and environments in 3D space.",
    },
    {
      id: 4,
      title: "3D Animation",
      link: "/contact@media",
      image: "/media-scroll/3d-animation.jpg",
      tags: ["Blender", "Unreal Engine"],
      description: "Precise, detailed, and dynamic 3D animation.",
    },
    {
      id: 5,
      title: "Architectural Visualisation",
      link: "/contact@media",
      image: "/media-scroll/architectural.jpg",
      tags: ["Unreal Engine"],
      description:
        "Turning 2D architectural plans into realistic 3D visuals and walkthroughs.",
    },
  ];

  // Calculate drag constraints based on child widths
  useEffect(() => {
    const updateConstraints = () => {
      if (!containerRef.current || !contentRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const children = Array.from(contentRef.current.children) as HTMLElement[];

      let totalWidth = 0;
      children.forEach((child) => {
        const style = window.getComputedStyle(child);
        const marginRight = parseFloat(style.marginRight) || 0;
        totalWidth += child.offsetWidth + marginRight;
      });

      const left =
        totalWidth > containerWidth ? containerWidth - totalWidth : 0;

      // Only update state if it actually changed
      setConstraints((prev) => {
        if (prev.left !== left || prev.right !== 0) {
          return { left, right: 0 };
        }
        return prev;
      });
    };

    // Initial calculation
    updateConstraints();

    // Recalculate on window resize
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []); // empty array ensures it only runs on mount + resize

  return (
    <>
      <section className="relative w-full bg-white mb-24">
        <div className="max-width-case-study center mt-10 md:mt-24">
          <div className="section-info-wrap case-study">
            <div className="fadeup bro">
              <h2 className="section-info_primary-text">
                From <span className="heading-text-italic">Trimming Clips</span>{" "}
                <br />
                To Building
                <br className="md:hidden block" />{" "}
                <span className="heading-text-italic">3D Experiences</span>
              </h2>
            </div>
            <div className="fadeup">
              <p split-text="true" className="sub-title">
                &nbsp;We bring stories to life with high-quality video
                production, 3D animations, and post-production that captivate
                audiences and drive engagement.
              </p>
            </div>
          </div>
        </div>

        <div ref={containerRef} className="overflow-hidden w-full relative">
          <motion.div
            ref={contentRef}
            className="flex gap-8 cursor-grab"
            style={{ x }}
            drag="x"
            dragConstraints={constraints}
            dragElastic={0.2}
          >
            <ProjectCards data={projectData} />
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        .scroll-text {
          margin: 0px;
          padding-top: 2rem;
          padding-bottom: 2rem;
          font-size: 4.6rem;
          font-weight: 700;
          text-transform: uppercase;
          background: -webkit-linear-gradient(-90deg, #262626, #ffffff 80%);
          -webkit-background-clip: text;
          -webkit-text-stroke: 4px transparent;
          overflow: visible;
        }
      `}</style>
    </>
  );
}
