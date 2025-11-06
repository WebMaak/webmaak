"use client";

import React, { useEffect, useState } from "react";
import "../contact/page.css";
import Navbar from "@/components/Navbar/Navbar";
import TalibScheduler from "@/components/Iframes/TalibScheduler";
import ModernFooter from "@/components/Footer/ModernFooter";
import EighthSection from "@/components/EighthSection/EighthSection";
import { CircleArrowLeft } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";

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
      <div className="section_contact min-h-[150vh]">
        <div className="casestudy_wrapper">
          <div className="container-large">
            <div className="hero-bg">
              <img
                src="/black-hole-bg.jpg"
                loading="lazy"
                sizes="100vw"
                srcset="/black-hole-bg.jpg 500w, black-hole-bg.jpg 1440w"
                alt=""
                className="blur-3xl contact_desktop-bg max-h-[100%] min-h-[100%] min-w-[max-content]"
              />
            </div>
            <h2 className="heading-style-h2 is-contact-page-hero-heading">
              Smart, Powerful Digital Solutions
              <br />
            </h2>
            <div className="contact_sub-title-wrapper flex flex-col justify-center items-center">
              <div split-text="" className="contact_sub-title-one w-3/4">
                We create high-performing websites and apps that drive results.
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
          <div className="padding-globa">
            <div className="container-large">
              <div className="layout508_tabs w-tabs">
                <div className="layout508_tabs-menu w-tab-menu">
                  <a
                    href="/contact"
                    className="layout508_tab-link w-inline-block w-tab-link"
                    style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
                  >
                    <CircleArrowLeft />
                  </a>
                  <a
                    href="https://webmaak.workway.pro/lead-form/cab7978cc6df39803c26bc4186b8d6a6?styled=1&with_logo=1"
                    onClick={() => setactiveTab(true)}
                    target="_blank"
                    className={`layout508_tab-link w-inline-block w-tab-link ${
                      activeTab ? "w--current" : ""
                    }`}
                  >
                    Request Quote
                  </a>
                </div>

                <div className="layout508_tabs-content w-tab-content">
                  {/* Tab 1 */}
                  {/* <div className={`pt-16 relative ${activeTab ? "" : "hidden"}`}>
                </div> */}

                  {/* Tab 2 */}
                  <div
                    className={`lg:pt-16 md:pt-10 pt-6 lg:pb-0 md:pb-10 pb-4 lg:px-0 md:px-8 px-4 relative`}
                  >
                    <TalibScheduler />
                    <div className="p-4 w-full bg-[#16062d] absolute bottom-0">
                      &nbsp;
                    </div>
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
                    className="flex text-white flex-col md:flex-row items-center justify-center gap-1 pr-2 md:pl-0 pl-4 md:pb-0 pb-4"
                  >
                    Share your querry at our email
                    <div className="flex gap-1 items-center">
                      <FaEnvelope className="ml-2 text-white" />
                      hello@webmaak.com
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="section_trust hidden"></section>
      </div>
      <ModernFooter />
    </>
  );
}

export default Contact;
