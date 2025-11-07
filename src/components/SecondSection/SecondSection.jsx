"use client";

import React, { useState } from "react";
import "./SecondSection.css";
import { useIntersection } from "@/hooks/useIntersection";
import dynamic from "next/dynamic";
import Toggle from "./Toggle";

const CaseStudiesMedia = dynamic(() => import("./CaseStudiesMedia"), {
  ssr: false,
});
const CaseStudiesIt = dynamic(() => import("./CaseStudiesIt"), { ssr: false });

function SecondSection() {
  const [active, setActive] = useState("table");
  const [activeTable, setActiveTable] = useState(false);
  useIntersection();
  useIntersection("fadeup");
  return (
    <>
      <div
        className="section_home-case-studies"
        id="section3"
        data-theme="light"
      >
        <div className="padding-global relative">
          <div className="container-large">
            <div className="padding-section-large-second-section">
              <div className="max-width-case-study center">
                <div className="section-info-wrap case-study">
                  <div className="fadeup bro">
                    <h2 className="section-info_primary-text">
                      Crafted Projects <br className="md:hidden block" />
                      <span className="heading-text-italic">That Speak</span>
                      <br />
                      Louder Than Words
                    </h2>
                  </div>
                  <div className="fadeup">
                    <p split-text="true" className="sub-title">
                      Explore how we’ve turned ideas into digital experiences
                      that elevate brands and drive growth
                    </p>
                  </div>
                </div>
              </div>
              <div className="fadeup case-study-section">
                {/* <Toggle
                  checked={activeTable}
                  onChange={() => setActiveTable((prev) => !prev)}
                /> */}
                <div className="mt-1"></div>
                <div className="relative inline-flex bg-royalblue-light rounded-full p-2 shadow-inner">
                  <div
                    className={`absolute top-2 left-2 h-[50px] w-[155px] bg-royalblue rounded-full transition-all duration-300 ${
                      active === "map" ? "w-[198px]" : "w-[155px]"
                    } `}
                    style={{
                      transform:
                        active === "map"
                          ? "translateX(147px)"
                          : "translateX(0px)",
                    }}
                  ></div>

                  <button
                    onClick={() => setActive("table")}
                    className={`relative z-10 px-9 py-3 rounded-full text-[0.875rem] md:text-base font-semibold transition-colors duration-300 ${
                      active === "table" ? "text-white" : "text-royalblue-dark"
                    }`}
                  >
                    IT Projects
                  </button>
                  <button
                    onClick={() => setActive("map")}
                    className={`relative z-10 px-9 py-3 rounded-full text-[0.875rem] md:text-base font-semibold transition-colors duration-300 ${
                      active === "map" ? "text-white" : "text-royalblue-dark"
                    }`}
                  >
                    Media Projects&nbsp;
                  </button>
                </div>
                <div
                  className={`${active === "table" ? "hidden" : "visible"}`}
                  style={{
                    transition: "visibility 0.3s ease-in-out",
                    width: "100%",
                  }}
                >
                  <CaseStudiesMedia />
                </div>
                <div
                  className={`${active === "map" ? "hidden" : "visible"}`}
                  style={{
                    transition: "visibility 0.3s ease-in-out",
                    width: "100%",
                  }}
                >
                  <CaseStudiesIt />
                </div>
                {/* {activeTable ? <CaseStudiesMedia /> : <CaseStudiesIt />} */}
              </div>
            </div>
          </div>
        </div>
        <div
          className="fadeup"
          style={{
            transform:
              "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotate(0deg) skew(0deg, 0deg)",
            transformStyle: "preserve-3d",
            opacity: 1,
          }}
        />
      </div>
    </>
  );
}

export default SecondSection;
