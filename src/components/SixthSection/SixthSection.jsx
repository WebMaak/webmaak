'use client'

import React from "react";
import "./SixthSection.css";
import BlueArrowButton from "@/components/BlueArrowButton/BlueArrowButton";
import { useIntersection } from "@/hooks/useIntersection";

function SixthSection() {
  useIntersection();
  useIntersection("fadeup");
  return (
    <section className="section_secondary-cta background-color-secondary" id="section6" data-theme="dark">
      <img
        src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6612f975112dc7245a48be05_shape.webp"
        loading="lazy"
        alt=""
        className="secondary-cta-bg-mobile"
      />
      <div className="padding-global relative">
        <div className="container-large relative">
          <img
            src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6601f046b366b5ca39b2e139_cta-bg-brand.svg"
            loading="lazy"
            alt=""
            className="secondary-cta-bg"
          />
          <div className="padding-section-medium">
            <div className="secondary-cta_content">
              <div className="text-color-white">
                <div className="fadeup">
                  <h3
                    split-text="true"
                    className="heading-style-h3 hide-mobile-portrait"
                  >
                    Your website is your
                    <span className="text-color-green">
                      {" "}
                      24/7 sales person.
                    </span>{" "}
                    Don’t just settle for an ordinary one. Go
                    <span className="text-style-secondary"> beyond</span> with
                    <span className="text-color-green"> Flowtrix</span>
                  </h3>
                </div>
                <div className="fadeup">
                  <h3 split-text="true" className="heading-cta-mobile">
                    Your website is your
                    <span className="text-color-green">24/7 sales person.</span>
                  </h3>
                </div>
                <div className="fadeup">
                  <h3
                    split-text="true"
                    className="heading-cta-mobile middle-item"
                  >
                    Don’t just settle for an ordinary one.
                  </h3>
                </div>
                <div className="fadeup">
                  <h3 split-text="true" className="heading-cta-mobile">
                    Go <span className="text-style-secondary">beyond</span> with
                    <span className="text-color-green">Flowtrix</span>
                  </h3>
                </div>
              </div>
              <div className="fadeup">
                <BlueArrowButton />
                <div className="secondary-btn_icon-wrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 20 12"
                    fill="none"
                    className="secondary-btn_icon"
                  >
                    <path
                      d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 20 12"
                    fill="none"
                    className="secondary-btn_icon"
                  >
                    <path
                      d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SixthSection;
