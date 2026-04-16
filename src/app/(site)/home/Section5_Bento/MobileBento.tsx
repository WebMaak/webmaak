"use client";

import React, { useRef } from "react";
import BentoGrid from "./BentoGrids";
import "./Bento.css";
import SectionTitleBlock from "@/components/sectionsShared/SectionTitleBlock";
import { useIsTablet } from "@/hooks/useIsTablet";

const MobileBento: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isTablet = useIsTablet();

  return (
    <div data-theme="dark" id="services" className="bento-wrapper">
      <div ref={containerRef} className="bento-container tablet">
        <div className="bento-title-wrapper">
          <SectionTitleBlock
            normal1="Crating"
            italic1="Digital Experiences"
            normal2="That Fuel Success"
            description="From sleek landing pages to powerful enterprise web apps, we bring ideas to life with precision and creativity."
            theme="dark"
          />
        </div>

        <div className="bento-content-wrapper">
          <div className="bento-max-width">
            <BentoGrid isTablet={isTablet} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileBento;
