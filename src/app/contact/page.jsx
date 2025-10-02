"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import EighthSection from "@/components/EighthSection/EighthSection";
import Button from "@/components/ui/Button"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

function Contact() {

  const [activeTab, setactiveTab] = useState(true);


  useEffect(() => {
    if (typeof window !== "undefined") {
      (function (C, A, L) {
        let p = function (a, ar) {
          a.q.push(ar);
        };
        let d = C.document;
        C.Cal =
          C.Cal ||
          function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement("script")).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () {
                p(api, arguments);
              };
              const namespace = ar[1];
              api.q = api.q || [];
              if (typeof namespace === "string") {
                cal.ns[namespace] = cal.ns[namespace] || api;
                p(cal.ns[namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else p(cal, ar);
              return;
            }
            p(cal, ar);
          };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "project-enquiry", { origin: "https://cal.com" });

      Cal.ns["project-enquiry"]("inline", {
        elementOrSelector: "#my-cal-inline",
        calLink: "himanshusahu/project-enquiry",
        layout: "month_view",
      });

      Cal.ns["project-enquiry"]("ui", {
        theme: "light",
        styles: {
          branding: { brandColor: "#08CD77" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });

      // MutationObserver to hide dynamically loaded watermark
      const observer = new MutationObserver(() => {
        const watermark = document.querySelector(".mb-6.mt-auto.pt-6");
        if (watermark) {
          watermark.style.display = "none";
          observer.disconnect(); // Stop observing once the watermark is hidden
        }
      });

      // Start observing the body for changes
      observer.observe(document.body, { childList: true, subtree: true });
    }
  }, []); // 👈 Runs only after the component mounts

  return (
    <>
    <Navbar />
    <div className="section_contact min-h-[101vh]">
      <div className="casestudy_wrapper">
        <div className="container-large">
          <div className="hero-bg">
            <img
              src="/hero-bg.JPG"
              loading="lazy"
              sizes="100vw"
              srcset="hero-bg.JPG 500w, hero-bg.JPG 1440w"
              alt=""
              className="contact_desktop-bg max-h-[100%] min-w-[max-content]" 
            />
          </div>
          <h2 className="heading-style-h2 is-contact-page-hero-heading">
            Let’s Bring Your Creative<br />
            Vision to Life
            <br />
          </h2>
          <div className="contact_sub-title-wrapper flex flex-col justify-center items-center">
            <div split-text="" className="contact_sub-title-one w-3/4">
              At WebMaak, we make your vision a reality—creative media, apps, and digital marketing.
            </div>
            <div className="contact_sub-title-two-wrapper mt-2">
              <div className="contact_sub-title-two is-green">
                100+ Successful Projects Delivered
              </div>
              <div className="contact_sub-title-two">and Counting!</div>
            </div>
          </div>
          {/* <div className="contact_brands-wrapper">
            <div className="contact_brand-wrap"></div>
            <div className="contact_brand-wrap">
              <img
                src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3cff03f3e75bc42ce23df_Richpanel_logo%201%20(1).svg"
                loading="lazy"
                alt=""
                className="contact_brand"
              />
            </div>
            <div className="contact_brand-wrap">
              <img
                src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3d0cb75dfeff60738935d_Vector%20(3).svg"
                loading="lazy"
                alt=""
                className="contact_brand"
              />
            </div>
            <div className="contact_brand-wrap">
              <img
                src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3d0f68431bc8ed21d6390_Skuad.svg"
                loading="lazy"
                alt=""
                className="contact_brand"
              />
            </div>
            <div className="contact_brand-wrap">
              <img
                src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3d11ca1df0cccfa1f39a1_Zuddl.svg"
                loading="lazy"
                alt=""
                className="contact_brand"
              />
            </div>
            <div className="contact_brand-wrap">
              <img
                src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/67895d08454d1432c144e801_logoSaral.svg"
                loading="lazy"
                width="Auto"
                alt=""
                className="contact_brand crux"
              />
            </div>
            <div className="contact_brand-wrap"></div>
          </div> */}
        </div>
      </div>
      {/* <div className=" works-brands_wrapper contact">
        <div className="works-brands_inner-wrapper">
          <div className="works-brand_item-outer-wrapper">
            <div className="works-brand_item-wrapper">
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3cff03f3e75bc42ce23df_Richpanel_logo%201%20(1).svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6761718a9a3572be01107232_Skuad.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3cff03f3e75bc42ce23df_Richpanel_logo%201%20(1).svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6761718a9a3572be01107232_Skuad.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
            </div>
          </div>
          <div className="works-brand_item-outer-wrapper">
            <div className="works-brand_item-wrapper">
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6761718a9a3572be01107232_Skuad.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6788a3ad2bad33ba54db7116_3Fundle.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6761718a9a3572be01107232_Skuad.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6788a3ad2bad33ba54db7116_3Fundle.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
            </div>
          </div>
          <div className="works-brand_item-outer-wrapper">
            <div className="works-brand_item-wrapper">
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e466b8c8aabaa549e21_Hyper.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6788a3ae737d6e84f6252073_1S1aral.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e466b8c8aabaa549e21_Hyper.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6788a3ae737d6e84f6252073_1S1aral.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
            </div>
          </div>
          <div className="works-brand_item-outer-wrapper">
            <div className="works-brand_item-wrapper">
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3d11ca1df0cccfa1f39a1_Zuddl.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e45b1cd34867d86d425_Crux.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3d11ca1df0cccfa1f39a1_Zuddl.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e45b1cd34867d86d425_Crux.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
            </div>
          </div>
          <div className="works-brand_item-outer-wrapper">
            <div className="works-brand_item-wrapper">
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e45402895eda2bba8e7_Saral.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3d0cb75dfeff60738935d_Vector%20(3).svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e45402895eda2bba8e7_Saral.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66f3d0cb75dfeff60738935d_Vector%20(3).svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
            </div>
          </div>
          <div className="works-brand_item-outer-wrapper hide-desktop">
            <div className="works-brand_item-wrapper">
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e45402895eda2bba8e7_Saral.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e466b8c8aabaa549e21_Hyper.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e45402895eda2bba8e7_Saral.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
              <div className="works-brand_item">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/663c6e466b8c8aabaa549e21_Hyper.svg"
                  loading="lazy"
                  alt=""
                  className="works-brand-item_image"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section className="section_layout508">
        <div className="padding-global">
          <div className="container-large">
            <div
              className="layout508_tabs w-tabs"
            >
               <div className="layout508_tabs-menu w-tab-menu">
                <a
                  onClick={() => setactiveTab(false)}
                  className={`layout508_tab-link w-inline-block w-tab-link ${
                    !activeTab ? "w--current" : ""
                  }`}
                >
                  <div>Schedule a call</div>
                </a>
                <a
                  href="https://webmaak.workway.pro/lead-form/cab7978cc6df39803c26bc4186b8d6a6?styled=1&with_logo=1"
                  onClick={() => setactiveTab(true)}
                  target="_blank"
                  className={`layout508_tab-link w-inline-block w-tab-link ${
                    activeTab ? "w--current" : ""
                  }`}
                >
                  <div>Request Quote</div>
                </a>
              </div>

              <div className="layout508_tabs-content w-tab-content">
                {/* Tab 1 */}
                {/* <div className={`p-10 relative flex justify-center ${activeTab ? "" : "hidden"}`}>
                </div>                 */}
                {/* Tab 2 */}
                <div  className={`py-16 relative flex justify-center gap-6 `}>
                  <Button name="Media" link="/contact@media" />
                  <Button name="Web Apps" link="/contact@webapps" />
                  <Button name="marketing" link="/contact@marketing" />
                </div>
              </div>
            </div>
            <div className="contact_endorsement-wrapper">
              <div className="contact_endorsement-top-wrapper">
                <div className="contact_endorsement-top-text">
                  Your Gateway to WebMaak Updates & Insights
                </div>
              </div>
              <div className="contact_endorsement-partners-wrapper">
                <a
                  href="https://www.linkedin.com/company/webmaak-creative"
                  target="_blank"
                  className="contact_endorsement-partner webflow"
                >
                  <FaLinkedinIn /> LinkedIn
                </a>

                <a
                  href="https://x.com/yourprofile"
                  target="_blank"
                  className="contact_endorsement-partner webflow"
                >
                  <FaXTwitter /> x.com
                </a>

                <a
                  href="https://www.instagram.com/webmaak/"
                  target="_blank"
                  className="contact_endorsement-partner webflow"
                >
                  <FaInstagram /> Instagram
                </a>

                <a
                  href="https://www.facebook.com/webmaak"
                  target="_blank"
                  className="contact_endorsement-partner webflow"
                >
                  <FaFacebookF /> Facebook
                </a>
              </div>
              <div className="contact_email-wrapper">
                <a
                  href="mailto:hello@webmaak.com"
                  className="flex text-white flex-row align-middle items-center justify-center gap-1 pr-2"
                  >
                  Share your querry at our email
                  <FaEnvelope className="ml-2 text-white" />
                    hello@webmaak.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="section_trust hidden"  > 
        {/* <div className="container-large">
          <div className="process_wrapper-header-top is_contact is_mobile-space">
            <div className="fade-up">
              <h2 className="heading-style-h2 is_cae-study">
                Trusted by 20+
                <br />
                Industry leaders
                <br />
              </h2>
            </div>
          </div>
        </div>
        <div className="fade-in">
          <div className="leader-wrapper">
            <div className="result-wrapper_list w-dyn-list">
              <div
                role="list"
                className="marquee-pane loop-move-left leaders w-dyn-items"
              >
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <a href="" target="_blank"></a>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <a href="" target="_blank">
                      <div className="leader_card-logo-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e982f96b77e977f99a1b8_zuddl.svg"
                          loading="lazy"
                          alt=""
                          className="leaders_client-logo"
                        />
                      </div>
                      <div className="learder_middle">
                        <h4 className="learder_heading">48%</h4>
                        <p className="learder_pr">Increase in event signups</p>
                      </div>
                    </a>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <a href="" target="_blank"></a>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <a href="" target="_blank">
                      <div className="leader_card-logo-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e9745061bc524dc3e1c74_hyperverge.svg"
                          loading="lazy"
                          alt=""
                          className="leaders_client-logo"
                        />
                      </div>
                      <div className="learder_middle">
                        <h4 className="learder_heading">25%</h4>
                        <p className="learder_pr">Growth in enterprise leads</p>
                      </div>
                    </a>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <a href="" target="_blank"></a>
                  <div
                    id="662aa640f27e136ef3be155a"
                    unique-id="662aa640f27e136ef3be155a"
                    className="leader_card"
                  >
                    <a href="" target="_blank">
                      <div className="leader_card-logo-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa63e3c423a1c3dc171da_Richpanel.svg"
                          loading="lazy"
                          alt=""
                          className="leaders_client-logo"
                        />
                      </div>
                      <div className="learder_middle">
                        <h4 className="learder_heading">34%</h4>
                        <p className="learder_pr">Growth in conversions</p>
                      </div>
                    </a>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <a href="" target="_blank"></a>
                  <div
                    id="662aa62e44fde82bee001648"
                    unique-id="662aa62e44fde82bee001648"
                    className="leader_card"
                  >
                    <a href="" target="_blank">
                      <div className="leader_card-logo-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa62b918a924aa45be24f_Vector.svg"
                          loading="lazy"
                          alt=""
                          className="leaders_client-logo"
                        />
                      </div>
                      <div className="learder_middle">
                        <h4 className="learder_heading">20%</h4>
                        <p className="learder_pr">Increase in agency leads</p>
                      </div>
                    </a>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <a
                    href="https://flowtrix.co/case-studies/saral"
                    target="_blank"
                  ></a>
                  <div
                    id="662aa610b73bc20f93d45362"
                    unique-id="662aa610b73bc20f93d45362"
                    className="leader_card"
                  >
                    <a
                      href="https://flowtrix.co/case-studies/saral"
                      target="_blank"
                    >
                      <div className="leader_card-logo-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa5e7d9b85988c61a716b_Saral.svg"
                          loading="lazy"
                          alt=""
                          className="leaders_client-logo"
                        />
                      </div>
                      <div className="learder_middle">
                        <h4 className="learder_heading">41%</h4>
                        <p className="learder_pr">
                          Increase in conversion rate
                        </p>
                      </div>
                    </a>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Read case study</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <a href="" target="_blank"></a>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <a href="" target="_blank">
                      <div className="leader_card-logo-wrapper">
                        <img
                          src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e96c19ea7e6eef6bb9637_crux.svg"
                          loading="lazy"
                          alt=""
                          className="leaders_client-logo"
                        />
                      </div>
                      <div className="learder_middle">
                        <h4 className="learder_heading">45%</h4>
                        <p className="learder_pr">Increase in demo requests</p>
                      </div>
                    </a>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="result-wrapper_list w-dyn-list">
              <div
                role="list"
                className="marquee-pane loop-move-left leaders w-dyn-items"
              >
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e982f96b77e977f99a1b8_zuddl.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">48%</h4>
                      <p className="learder_pr">Increase in event signups</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e9745061bc524dc3e1c74_hyperverge.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">25%</h4>
                      <p className="learder_pr">Growth in enterprise leads</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa640f27e136ef3be155a"
                    unique-id="662aa640f27e136ef3be155a"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa63e3c423a1c3dc171da_Richpanel.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">34%</h4>
                      <p className="learder_pr">Growth in conversions</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa62e44fde82bee001648"
                    unique-id="662aa62e44fde82bee001648"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa62b918a924aa45be24f_Vector.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">20%</h4>
                      <p className="learder_pr">Increase in agency leads</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa610b73bc20f93d45362"
                    unique-id="662aa610b73bc20f93d45362"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa5e7d9b85988c61a716b_Saral.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">41%</h4>
                      <p className="learder_pr">Increase in conversion rate</p>
                    </div>
                    <a
                      href="https://flowtrix.co/case-studies/saral"
                      className="leader_link w-inline-block"
                    >
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e96c19ea7e6eef6bb9637_crux.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">45%</h4>
                      <p className="learder_pr">Increase in demo requests</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="result-wrapper_list w-dyn-list">
              <div
                role="list"
                className="marquee-pane loop-move-left leaders w-dyn-items"
              >
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e982f96b77e977f99a1b8_zuddl.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">48%</h4>
                      <p className="learder_pr">Increase in event signups</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e9745061bc524dc3e1c74_hyperverge.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">25%</h4>
                      <p className="learder_pr">Growth in enterprise leads</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa640f27e136ef3be155a"
                    unique-id="662aa640f27e136ef3be155a"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa63e3c423a1c3dc171da_Richpanel.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">34%</h4>
                      <p className="learder_pr">Growth in conversions</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa62e44fde82bee001648"
                    unique-id="662aa62e44fde82bee001648"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa62b918a924aa45be24f_Vector.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">20%</h4>
                      <p className="learder_pr">Increase in agency leads</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa610b73bc20f93d45362"
                    unique-id="662aa610b73bc20f93d45362"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/662aa5e7d9b85988c61a716b_Saral.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">41%</h4>
                      <p className="learder_pr">Increase in conversion rate</p>
                    </div>
                    <a
                      href="https://flowtrix.co/case-studies/saral"
                      className="leader_link w-inline-block"
                    >
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <div role="listitem" className="w-dyn-item">
                  <div className="embed-hover w-embed"></div>
                  <div
                    id="662aa5d53b869f6f31bb0b75"
                    unique-id="662aa5d53b869f6f31bb0b75"
                    className="leader_card"
                  >
                    <div className="leader_card-logo-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/663e96c19ea7e6eef6bb9637_crux.svg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                    <div className="learder_middle">
                      <h4 className="learder_heading">45%</h4>
                      <p className="learder_pr">Increase in demo requests</p>
                    </div>
                    <a href="#" className="leader_link w-inline-block">
                      <div>Case Study coming soon</div>
                      <div className="arrow-cards w-embed">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_3802_13626)">
                            <path
                              d="M13.3333 4.66602C13.3333 5.28435 13.9442 6.20768 14.5625 6.98268C15.3575 7.98268 16.3075 8.85518 17.3967 9.52102C18.2133 10.0202 19.2033 10.4993 20 10.4993M20 10.4993C19.2033 10.4993 18.2125 10.9785 17.3967 11.4777C16.3075 12.1443 15.3575 13.0168 14.5625 14.0152C13.9442 14.791 13.3333 15.716 13.3333 16.3327M20 10.4993H0"
                              stroke="currentColor"
                              stroke-width="2"
                            ></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_3802_13626">
                              <rect
                                width="20"
                                height="20"
                                fill="white"
                                transform="translate(0 0.5)"
                              ></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
    <EighthSection/>
    <Footer/>
    </>
  );
}

export default Contact;
