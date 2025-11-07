"use client";

import React from "react";
import "./FifthSection.css";
import { useIntersection } from "@/hooks/useIntersection";

function FifthSection() {
  useIntersection();
  useIntersection("fadeup");
  return (
    <>
      <section
        className="section_integration pt-20 pb-12 flex gap-4 justify-center items-center flex-col"
        data-theme="light"
      >
        <div className="fadeup text-center">
          <h2 className="section-info_primary-text text-center mx-auto">
            Powering Ideas
            <br /> With <span> </span>
            <span className="heading-text-italic mx-auto">
              Modern Technology
            </span>
          </h2>
        </div>
        <div className="fadeup lg:w-1/2 w-[90%]">
          <p split-text="true" className="sub-title text-center">
            We combine cutting-edge coding frameworks and creative tools to
            transform concepts into seamless, high-impact digital experiences
            that blend precision with innovation.
          </p>
        </div>
      </section>
    </>
  );
}

export default FifthSection;
