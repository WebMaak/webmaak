"use client";

import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectCards from "./ProjectCard";
import "./SecondSection.css";

export default function DigitalMarketingTouch() {
  return (
    <div>
      <HorizontalDragCarousel />
    </div>
  );
}

function HorizontalDragCarousel() {
  const x = useMotionValue(0);

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
      setIsDesktop(width >= 1024);
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  useEffect(() => {
    // Measure the container and content widths for drag constraints
    const container = document.getElementById("drag-container");
    const content = document.getElementById("drag-content");
    if (container && content) {
      setContainerWidth(container.offsetWidth);
      setContentWidth(content.scrollWidth);
    }
  }, [isMobile, isTablet, isDesktop]);

  const projectData = [
    {
      id: 1,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Innovation", "Future"],
      description: "Exciting project launching soon...",
    },
    {
      id: 2,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Creative", "Tech"],
      description: "Stay tuned for our next big launch!",
    },
    {
      id: 3,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Design", "Growth"],
      description: "Innovative solutions on the horizon.",
    },
    {
      id: 4,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Digital", "Branding"],
      description: "Crafting the future of digital presence.",
    },
    {
      id: 5,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Strategy", "NextGen"],
      description: "Big ideas are on their way.",
    },
    {
      id: 6,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Solutions", "Impact"],
      description: "Building smarter digital experiences.",
    },
    {
      id: 7,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Tech", "Future-Ready"],
      description: "Where creativity meets technology.",
    },
    {
      id: 8,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Vision", "Digital"],
      description: "Pioneering the next wave of innovation.",
    },
    {
      id: 9,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Ideas", "Growth"],
      description: "Transforming concepts into reality.",
    },
    {
      id: 10,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Innovation", "Launch"],
      description: "Something new around the corner.",
    },
  ];

  return (
    <>
      <section className="relative w-full bg-white">
        <div className="max-width-case-study center mt-10 md:mt-24">
          <div className="section-info-wrap case-study">
            <div className="fadeup bro">
              <h2 className="section-info_primary-text">
                Driving <br className="md:hidden block" />
                <span className="heading-text-italic">Digital Marketing</span>
                <br />
                that fuels growth
              </h2>
            </div>
            <div className="fadeup">
              <p split-text="true" className="sub-title">
                &nbsp;Boosting brand visibility with SEO, targeted ads, and
                performance-driven campaigns designed to maximize ROI.
              </p>
            </div>
          </div>
        </div>
        <div id="drag-container" className="overflow-hidden w-full relative">
          <motion.div
            id="drag-content"
            className="flex gap-8 cursor-grab"
            style={{ x }}
            drag="x"
            dragConstraints={{
              left: Math.min(containerWidth - contentWidth, 0),
              right: 0,
            }}
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
