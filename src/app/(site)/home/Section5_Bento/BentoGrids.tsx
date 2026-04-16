"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./BentoGrid.css";
import Link from "next/link";
import { ChevronsRight } from "lucide-react";

interface BentoGridProps {
  isTablet?: boolean;
}

interface BentoItemProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  className?: string;
  hasCTA?: boolean;
  isWide?: boolean;
  listItems?: string[];
  isTablet?: boolean;
}

const BentoItem: React.FC<BentoItemProps> = ({
  title,
  subtitle,
  description,
  image,
  className = "",
  hasCTA = false,
  isWide = false,
  listItems,
  isTablet,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamRef.current || isTablet) return;

    const ctx = gsap.context(() => {
      gsap.to(beamRef.current, {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "none",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [isTablet]);

  const handleClick = () => {
    if (!containerRef.current) return;
    gsap.to(containerRef.current, {
      scale: 0.97,
      duration: 0.15,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(containerRef.current, {
          scale: 1,
          duration: 0.5,
          ease: "elastic.out(1, 0.4)",
        });
      },
    });
  };

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      className={`bento-item-card ${isWide ? "is-wide" : ""} ${isTablet ? "tablet" : ""} ${className}`}
    >
      <div className="border-beam-outer">
        <div ref={beamRef} className="border-beam-inner" />
      </div>

      <div
        className={`bento-image-container ${isWide ? "is-wide" : "standard"}`}
        // style={{ backgroundImage: `url(${image})` }}
      >
        <img src={image} alt={title} className="bento-item-img" />
        <div className="image-gradient-overlay"></div>
      </div>

      <div className={`bento-content-box ${isWide ? "is-wide" : "flex-grow"}`}>
        <div className="subtitle-header">
          <div className="status-dot"></div>
          <span className="subtitle-txt">{subtitle}</span>
        </div>

        <h3 className="bento-title">{title}</h3>

        <p className="bento-desc">{description}</p>
        {listItems && (
          <ul className="bento-list">
            {listItems.map((item, idx) => (
              <li key={idx} className="bento-list-item">
                {item}
              </li>
            ))}
          </ul>
        )}
        {hasCTA && (
          <Link href={"/contact"}>
            <button className="bento-cta">
              Explore <ChevronsRight size={14} />
            </button>
          </Link>
        )}
      </div>

      <div className="inner-glow-layer"></div>
    </div>
  );
};

const BentoGrid: React.FC<BentoGridProps> = ({ isTablet }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const items = gridRef.current.querySelectorAll(".bento-item-card");

    gsap.fromTo(
      items,
      {
        opacity: 0,
        y: 60,
        filter: "blur(20px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.4,
        stagger: 0.15,
        ease: "expo.out",
        delay: 0.3,
      },
    );
  }, []);

  const items = [
    {
      subtitle: "Development",
      title: "Creative Web Development",
      description: "We build websites that engage customers and drive results.",
      image:
        "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772192554/1_1_ir2hfq.jpg",
      className: "col-span-2",
      isWide: true,
      hasCTA: true,
      listItems: [
        "Growth-Focused Strategies",
        "CMS & custom integrations",
        "Optimized for speed & SEO",
        "Scalable, future-ready builds",
      ],
    },
    {
      subtitle: "Design",
      title: "Intuitive UI/UX Design",
      description:
        "We design experiences, not just screens. Every interaction is built to keep users engaged and connected with your brand.",
      image:
        "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1774239348/qwe_5_wero96.jpg",
      className: "",
      isWide: false,
      hasCTA: false,
    },
    {
      subtitle: "Commerce",
      title: "E-Commerce Stores That Drive Sales",
      description:
        "We design experiences, not just screens. Every interaction is built to keep users engaged and connected with your brand.",
      image:
        "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1774239348/qwe_2_tbgmoj.jpg",
      className: "col-span-3",
      isWide: true,
      hasCTA: true,
      listItems: [
        "High-Impact Product Visuals",
        "Seamless Shopping Experience",
        "Mobile-Optimized & Fast",
        "Sales-Driven Layouts & CTAs",
      ],
    },
    {
      subtitle: "Marketing",
      title: "Digital Marketing Solutions",
      description:
        "Beyond design and development, we help you grow your online presence with tailored marketing strategies.",
      image:
        "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1772192555/4_mlpr1u.jpg",
      className: "",
      isWide: false,
      hasCTA: false,
    },
    {
      subtitle: "Graphics",
      title: "3D & Creative Graphics",
      description:
        "From 3D animations to striking graphic design, we help brands stand out with visually stunning content.",
      image:
        "https://res.cloudinary.com/dsvgjs1qb/image/upload/v1774239348/qwe_1_r8629s.jpg",
      className: "col-span-2",
      isWide: true,
      hasCTA: true,
      listItems: [
        "3d modelling and texturing",
        "3d animation",
        "Architectural Visualization",
        "Motion Graphics and VFX",
      ],
    },
    {
      subtitle: "Post-Production",
      title: "Video Editing & Motion Graphics",
      description:
        "Bring your brand stories to life with professional video editing and dynamic motion graphics. Perfect for ads, presentations, and social media.",
      image:
        "https://res.cloudinary.com/dsvgjs1qb/image/upload/q_auto/f_auto/v1775636310/banners_rhs1cy.jpg",
      className: "col-span-3",
      isWide: true,
      hasCTA: true,
      listItems: [
        "Video Editing & Post-Production",
        "Motion Graphics & Animation",
        "Social Media Video Content",
        "Video Strategy & Analytics",
      ],
    },
  ];

  return (
    <div ref={gridRef} className="bento-grid-container">
      {items.map((item, index) => (
        <BentoItem key={index} {...item} isTablet={isTablet} />
      ))}
    </div>
  );
};

export default BentoGrid;
