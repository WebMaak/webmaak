"use client";

import React, { useEffect, useState } from "react";
import "./page.css";
import Navbar from "@/components/Navbar/Navbar";
import ModernFooter from "@/components/Footer/ModernFooter";
import Button from "@/components/ui/Button";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";
import { Clapperboard, Code2, ChartNoAxesCombined } from "lucide-react";

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
      <div className="section_contact h-auto lg:h-screen">
        <div className="casestudy_wrapper md:mt-[5rem] lg:mt-[2rem]">
          <div className="container-large">
            <div className="hero-bg">
              <img
                src="/black-hole-bg.jpg"
                loading="lazy"
                sizes="100vw"
                srcset="/black-hole-bg.jpg 500w, /black-hole-bg.jpg 1440w"
                alt=""
                className="blur-[10px] contact_desktop-bg max-h-[100%] min-h-[100%] min-w-[max-content]"
              />
            </div>
            <h2 className="heading-style-h2 is-contact-page-hero-heading">
              Schedule a call
              <br />
            </h2>
            <div className="contact_sub-title-wrapper flex flex-col justify-center items-center">
              <div split-text="" className="contact_sub-title-one w-3/4">
                At WebMaak, we make your vision a reality. Creative Media, Apps,
                and Digital Marketing.
              </div>
            </div>
          </div>
        </div>
        <section className="section_layout508 md:pb-[8rem] pb-[5rem]">
          <div className="padding-global">
            <div className="container-large">
              <div className="layout508_tabs w-tabs">
                <div className="layout508_tabs-menu w-tab-menu">
                  {/* <a
                    onClick={() => setactiveTab(false)}
                    className={`layout508_tab-link w-inline-block w-tab-link ${
                      !activeTab ? "w--current" : ""
                    }`}
                  >
                    <div>Schedule a call</div>
                  </a> */}
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
                  <h3 className="pt-6 heading-style-h3 is-contact-page-hero-heading">
                    Select your Service
                  </h3>
                  <div className="pb-16 pt-6 relative flex md:flex-row flex-col items-center justify-center gap-6">
                    <Button
                      name={
                        <span className="flex items-center gap-2">
                          <Clapperboard className="w-5 h-5" />
                          Media
                        </span>
                      }
                      link="/contact@media"
                    />
                    <Button
                      name={
                        <span className="flex items-center gap-2">
                          <Code2 className="w-5 h-5" />
                          Web Apps
                        </span>
                      }
                      link="/contact@webapps"
                    />
                    <Button
                      name={
                        <span className="flex items-center gap-2">
                          <ChartNoAxesCombined className="w-5 h-5" />
                          Marketing
                        </span>
                      }
                      link="/contact@marketing"
                    />
                  </div>
                </div>
              </div>
              <div className="contact_endorsement-wrapper">
                <div className="contact_endorsement-top-wrapper">
                  <div className="contact_endorsement-top-text">
                    Your Gateway to WebMaak Updates & Insights
                  </div>
                </div>
                <div className="contact_endorsement-partners-wrapper px-2">
                  <a
                    href="https://www.linkedin.com/company/webmaak-creative"
                    target="_blank"
                    className="contact_endorsement-partner webflow"
                  >
                    <FaLinkedinIn /> LinkedIn
                  </a>

                  {/* <a
                    href="https://x.com/yourprofile"
                    target="_blank"
                    className="contact_endorsement-partner webflow"
                  >
                    <FaXTwitter /> x.com
                  </a> */}

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
      </div>
      <ModernFooter />
    </>
  );
}

export default Contact;
