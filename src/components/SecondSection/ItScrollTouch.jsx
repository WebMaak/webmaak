"use client";

import { motion, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import ProjectCards from "./ProjectCard";
import "./SecondSection.css";

export default function ItScroll() {
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
      title: "UI/UX Design",
      image: "it-scroll/card1.png",
      tags: ["Figma", "Design", "UI/UX"],
      link: "/contact@webapps",
      description:
        "Modern and intuitive UI/UX designs built to improve usability and engagement.",
    },
    {
      id: 2,
      title: "CMS Development",
      image: "/it-scroll/card2.png",
      link: "/contact@webapps",
      tags: ["WordPress", "Webflow", "Shopify"],
      description:
        "Easy content management solutions designed for efficiency, control, growth.",
    },
    {
      id: 4,
      title: "E-Commerce Solutions",
      image: "/it-scroll/card4.png",
      link: "/contact@webapps",
      tags: ["Shopify", "WooCommerce", "Custom Stores"],
      description:
        "Secure, fast, and sales-driven platforms designed to boost growth and trust.",
    },
    {
      id: 5,
      title: "Web Applications",
      image: "/it-scroll/card5.png",
      link: "/contact@webapps",
      tags: ["Next.js", "React.js", "Node.js"],
      description:
        "Custom apps that scale businesses. Powerful, seamless, user-focused apps.",
    },
    {
      id: 3,
      title: "Website Development",
      image: "/comming-soon.png",
      link: "/contact@webapps",
      tags: ["React.js", "Next.js", "Node.js", "Express.js"],
      description:
        "Responsive, scalable websites built for performance and strong SEO results.",
    },
    {
      id: 6,
      title: "App Development",
      image: "/comming-soon.png",
      link: "/contact@webapps",
      tags: ["React Native", "Mobile", "iOS/Android"],
      description:
        "iOS & Android, native & hybrid. Engaging apps with intuitive UX.",
    },
    {
      id: 7,
      title: "Custom Integrations",
      image: "/comming-soon.png",
      link: "/contact@webapps",
      tags: ["WhatsApp", "AI Chatbot", "API"],
      description:
        "API & third-party tool setups. Smooth workflows, connected systems.",
    },
    {
      id: 8,
      title: "AI Consulting",
      image: "/comming-soon.png",
      link: "/contact@webapps",
      tags: ["AI Strategy", "Implementation", "Consulting"],
      description:
        "Strategy, setup & implementation. Guiding your AI transformation.",
    },
    {
      id: 9,
      title: "IT Consulting",
      image: "/comming-soon.png",
      link: "/contact@webapps",
      tags: ["Technology Strategy", "Digital Growth", "Consulting"],
      description:
        "Technology strategy & digital growth. Guidance to scale your business.",
    },
    {
      id: 10,
      title: "Tech Support & Maint.",
      image: "/comming-soon.png",
      link: "/contact@webapps",
      tags: ["Support", "Maintenance", "IT Services"],
      description:
        "Ongoing updates, fixes & security. Always-on reliable IT support.",
    },
  ];

  return (
    <>
      <section className="relative w-full py-24 bg-white">
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
