'use client'

import React from "react";
import "./EighthSection.css";
import BlueArrowButton from "../BlueArrowButton/BlueArrowButton";
import { useIntersection } from "@/hooks/useIntersection";

function EighthSection() {
  useIntersection();
  useIntersection("fadeup");
  return (
    <section
      data-w-id="39d5856a-91b0-bf11-b70b-00b70e15b7d2"
      className="section_footer-cta"
    >
      <div className="footer-cta_bg-wrap">
        <img
          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65febc8962c55d2ae0322b95_footer-cta_curve-line.webp"
          loading="lazy"
          sizes="100vw"
          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65febc8962c55d2ae0322b95_footer-cta_curve-line-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65febc8962c55d2ae0322b95_footer-cta_curve-line.webp 654w"
          alt=""
          className="section-curve-line"
        />
        <img
          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65febee4bf27147c206bb8f8_green-effect-line.webp"
          loading="lazy"
          sizes="100vw"
          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65febee4bf27147c206bb8f8_green-effect-line-p-500.webp 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65febee4bf27147c206bb8f8_green-effect-line-p-800.png 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65febee4bf27147c206bb8f8_green-effect-line-p-1080.webp 1080w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65febee4bf27147c206bb8f8_green-effect-line.webp 1331w"
          alt=""
          className="footer-cta_green-line animation"
        />
      </div>
      <div className="padding-global relative">
        <div className="container-large">
          <div className="padding-section-large padding-bottom-0 footer">
            <div className="footer-cta_heading-content">
              <div className="fadeup">
                <div split-text="true" className="section-info-wrap">
                  <h2 className="section-info_primary-text-light">
                    Don’t settle for{" "}
                    <span className="heading-text-italic">
                      basic.
                      <br />‍
                    </span>
                    Your <span className="heading-text-italic">brand</span>{" "}
                    deserves more
                  </h2>
                </div>
              </div>
              <div className="fadeup">
                <BlueArrowButton txt="Book a call" />
              </div>
            </div>
            <div className="spacer-medium"></div>
            <div className="spacer-medium desktop-hide"></div>
            <div className="footer-cta_list">
              <div className="fadeup">
                <div className="icon-text-wrap">
                  <div className="icon-text_icon-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 25"
                      fill="none"
                      className="icon-text_icon-svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 12.3359C22 17.8588 17.5228 22.3359 12 22.3359C6.47715 22.3359 2 17.8588 2 12.3359C2 6.81309 6.47715 2.33594 12 2.33594C17.5228 2.33594 22 6.81309 22 12.3359ZM16.0303 9.30561C16.3232 9.5985 16.3232 10.0734 16.0303 10.3663L11.0303 15.3663C10.7374 15.6592 10.2626 15.6592 9.96967 15.3663L7.96967 13.3663C7.67678 13.0734 7.67678 12.5985 7.96967 12.3056C8.26256 12.0127 8.73744 12.0127 9.03033 12.3056L10.5 13.7753L12.7348 11.5404L14.9697 9.30561C15.2626 9.01271 15.7374 9.01271 16.0303 9.30561Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="icon-text_text">
                    Growth-Focused Strategies
                  </div>
                </div>
              </div>
              <div className="fadeup">
                <div className="icon-text-wrap">
                  <div className="icon-text_icon-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 25"
                      fill="none"
                      className="icon-text_icon-svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 12.3359C22 17.8588 17.5228 22.3359 12 22.3359C6.47715 22.3359 2 17.8588 2 12.3359C2 6.81309 6.47715 2.33594 12 2.33594C17.5228 2.33594 22 6.81309 22 12.3359ZM16.0303 9.30561C16.3232 9.5985 16.3232 10.0734 16.0303 10.3663L11.0303 15.3663C10.7374 15.6592 10.2626 15.6592 9.96967 15.3663L7.96967 13.3663C7.67678 13.0734 7.67678 12.5985 7.96967 12.3056C8.26256 12.0127 8.73744 12.0127 9.03033 12.3056L10.5 13.7753L12.7348 11.5404L14.9697 9.30561C15.2626 9.01271 15.7374 9.01271 16.0303 9.30561Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="icon-text_text">Personalized Support</div>
                </div>
              </div>
              <div className="fadeup">
                <div className="icon-text-wrap">
                  <div className="icon-text_icon-wrap">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      viewBox="0 0 24 25"
                      fill="none"
                      className="icon-text_icon-svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22 12.3359C22 17.8588 17.5228 22.3359 12 22.3359C6.47715 22.3359 2 17.8588 2 12.3359C2 6.81309 6.47715 2.33594 12 2.33594C17.5228 2.33594 22 6.81309 22 12.3359ZM16.0303 9.30561C16.3232 9.5985 16.3232 10.0734 16.0303 10.3663L11.0303 15.3663C10.7374 15.6592 10.2626 15.6592 9.96967 15.3663L7.96967 13.3663C7.67678 13.0734 7.67678 12.5985 7.96967 12.3056C8.26256 12.0127 8.73744 12.0127 9.03033 12.3056L10.5 13.7753L12.7348 11.5404L14.9697 9.30561C15.2626 9.01271 15.7374 9.01271 16.0303 9.30561Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="icon-text_text">
                    Results that Drive Success
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-cta_image-wrap">
          <img
            src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fec102c6f7b5f133c54804_webflow-dashboard.webp"
            loading="lazy"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, 99vw"
            srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fec102c6f7b5f133c54804_webflow-dashboard-p-500.webp 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fec102c6f7b5f133c54804_webflow-dashboard-p-800.webp 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fec102c6f7b5f133c54804_webflow-dashboard-p-1080.webp 1080w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fec102c6f7b5f133c54804_webflow-dashboard-p-1600.webp 1600w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fec102c6f7b5f133c54804_webflow-dashboard-p-2000.webp 2000w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fec102c6f7b5f133c54804_webflow-dashboard.webp 2782w"
            alt=""
            className="footer-cta_image-backward"
          />
          <div className="footer-cta_webflow-ui-center">
            <img
              src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fec1c5a468bd6cc6844254_Webflow-UI.webp"
              loading="lazy"
              sizes="100vw"
              srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fec1c5a468bd6cc6844254_Webflow-UI-p-500.webp 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fec1c5a468bd6cc6844254_Webflow-UI-p-800.webp 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fec1c5a468bd6cc6844254_Webflow-UI-p-1080.webp 1080w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fec1c5a468bd6cc6844254_Webflow-UI.webp 1665w"
              alt=""
              className="footer-cta_webflow-ui-back"
            />
            <div className="footer-cta_webflow-ui-fron-wrap">
              <img
                src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fec559bc45147e2173534e_right-side-bar.webp"
                loading="lazy"
                width="585"
                height="807"
                alt=""
                srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fec559bc45147e2173534e_right-side-bar-p-500.webp 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fec559bc45147e2173534e_right-side-bar.webp 585w"
                sizes="(max-width: 479px) 36vw, 100vw"
                className="footer-cta_webflow-ui-front"
              />
            </div>
          </div>
          <div className="footer-cta_bg-overlay"></div>
        </div>
      </div>
    </section>
  );
}

export default EighthSection;
