"use clients";

import React from "react";
import { useEffect, useState } from "react";
import WhiteArrowButton from "@/components/WhiteArrowButton/WhiteArrowButton";
import { SiLinkedin, SiFacebook, SiInstagram } from "react-icons/si";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { usePathname } from "next/navigation";
import "./Footer.css";
export default function ModernFooter() {
  const pathname = usePathname();
  const [zoomFont, setZoomFont] = useState("20rem");

  const hideOnRoutes = [
    "/contact",
    "/contact@marketing",
    "/contact@media",
    "/contact@webapps",
    "/about",
  ];
  const shouldHide = hideOnRoutes.includes(pathname);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      // Approximate font size adjustments based on zoom (1920x1080 baseline)
      if (width >= 1850) setZoomFont("21rem");
      else if (width >= 1750) setZoomFont("19rem");
      else if (width >= 1700) setZoomFont("18rem");
      else if (width >= 1650) setZoomFont("17rem");
      else if (width >= 1600) setZoomFont("16rem");
      else if (width >= 1550) setZoomFont("15rem");
      else if (width >= 1500) setZoomFont("15rem");
      else if (width >= 1450) setZoomFont("13rem");
      else if (width >= 1400) setZoomFont("12rem");
      else if (width >= 1350) setZoomFont("13rem");
      else if (width >= 1300) setZoomFont("13rem");
      else if (width >= 1250) setZoomFont("13rem");
      else if (width >= 1200) setZoomFont("13rem");
      else if (width >= 1150) setZoomFont("13rem");
      else if (width >= 1100) setZoomFont("10rem");
      else setZoomFont("8rem");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center p-4  md:p-4 lg:p-8 pt-0 md:pt-0 lg:pt-0">
      {/* Hero Section */}
      {!shouldHide && (
        <div
          className="w-full mb-16 text-center"
          id="section11"
          data-theme="dark"
        >
          <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl py-16 md:py-28 shadow-2xl flex flex-col gap-6">
            <div className="fadeup flex flex-col items-center justify-center ">
              <h2 className={`section-info_primary-text-light text-center`}>
                Crafting{" "}
                <span className="heading-text-italic">digital stories</span>
                <br />
                that inspire and engage.{" "}
              </h2>{" "}
            </div>{" "}
            <div className="fadeup max-w-[80%] md:max-w-[70%] lg:max-w-[50%] mx-auto mb-6 ">
              {" "}
              <p className="sub-title-cta-sec text-center">
                Every great brand deserves an exceptional online presence. We’re
                here to bring your vision to life with design, strategy, and
                technology that work in harmony.{" "}
              </p>{" "}
            </div>
            <WhiteArrowButton txt="Book a call" />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        className="footer-outer w-full border border-[rgba(0,0,0,0.04)] bg-[#FAFAFA] rounded-3xl lg:p-12 md:p-6 p-5"
        id="section7"
        data-theme="light"
      >
        <div className="footer-inner max-w-[98%] lg:p-20 md:p-6 p-5 mx-auto rounded-3xl shadow-lg ">
          <div className="flex flex-col md:flex-col  lg:flex-row justify-between gap-12 mb-12">
            {/* Logo and Description */}
            <div className="lg:max-w-[30%] md:max-w-full  footer-left text-center md:text-left">
              <div className="footer-logo mb-4">
                <img
                  src="/main-logo/colored-logo.png"
                  className="w-[150px]"
                ></img>
              </div>
              <p className="text-gray-600 sub-title-footer-sec mb-6">
                WebMaak empowers brands to turn ideas into powerful digital
                experiences, making design, performance, and storytelling come
                together seamlessly.
              </p>
              <div className="gap-3 text-[1.2rem] footer-socials flex justify-start ">
                <a
                  href="https://www.linkedin.com/company/webmaak-creative"
                  className="text-black/60 hover:text-black transition-colors"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.instagram.com/webmaak/"
                  className="text-black/60 hover:text-black transition-colors"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com/webmaak "
                  className="text-black/60 hover:text-black  transition-colors"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </div>
            </div>

            <div className="footer-cols flex md:flex-row flex-col text-center md:text-left lg:gap-16 md:justify-between">
              {/* Resources */}
              <div>
                <h3 className="footer-menu-heading font-semibold text-lg md:text-lg lg:text-2xl text-black md:mb-4 mb-0">
                  Resources
                </h3>
                <ul className="lg:space-y-3 space-y-1 footer-menu-list ">
                  <li>
                    <a
                      href="https://webmaak.workway.pro/login"
                      className="text-gray-600 footer-menu-links hover:text-black transition-colors text-sm"
                    >
                      Sign in
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://webmaak.workway.pro/lead-form/cab7978cc6df39803c26bc4186b8d6a6?styled=1&with_logo=1"
                      className="text-gray-600 footer-menu-links hover:text-black transition-colors text-sm"
                    >
                      Get a Quote
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 footer-menu-links hover:text-black transition-colors text-sm"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 footer-menu-links hover:text-black transition-colors text-sm"
                    >
                      Terms of Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 footer-menu-links hover:text-black transition-colors text-sm"
                    >
                      Project Onboarding Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 footer-menu-links hover:text-black transition-colors text-sm"
                    >
                      Project Delivery & Refund Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="footer-menu-heading font-semibold text-lg md:text-lg lg:text-2xl text-black md:mb-4 mb-0">
                  Services
                </h3>
                <ul className="lg:space-y-3 space-y-1 footer-menu-list">
                  <li>
                    <a
                      href="/contact@webapps"
                      className="text-gray-600 footer-menu-links hover:text-black transition-colors text-sm"
                    >
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact@webapps"
                      className="text-gray-600 footer-menu-links hover:text-black transition-colors text-sm"
                    >
                      App Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact@media"
                      className="text-gray-600 footer-menu-links hover:text-black transition-colors text-sm"
                    >
                      Video Editing & MGFx
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact@media"
                      className="text-gray-600 footer-menu-links hover:text-black transition-colors text-sm"
                    >
                      3D Modelling & Animation
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact@webapps"
                      className="text-gray-600 footer-menu-links hover:text-black transition-colors text-sm"
                    >
                      Web Design & Development
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className=" footer-menu-heading font-semibold text-lg md:text-lg lg:text-2xl text-black md:mb-4 mb-0">
                  Company
                </h3>
                <ul className="lg:space-y-3 space-y-1 footer-menu-list">
                  <li>
                    <a
                      href="/about"
                      className="text-gray-600 footer-menu-links hover:text-black transition-colors text-sm"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 footer-menu-links hover:text-black transition-colors text-sm"
                      onClick={() => {
                        const section = document.querySelector("#section3");
                        if (section) {
                          // Resume Lenis, scroll to section, then close menu
                          if (window.lenis) {
                            window.lenis.start();
                            window.lenis.scrollTo(section, {
                              duration: 1.5,
                              easing: (t) =>
                                Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                            });
                          } else {
                            section.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
                    >
                      Our Work
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 footer-menu-links hover:text-black transition-colors text-sm"
                      onClick={() => {
                        const section = document.querySelector("#section3");
                        if (section) {
                          // Resume Lenis, scroll to section, then close menu
                          if (window.lenis) {
                            window.lenis.start();
                            window.lenis.scrollTo(section, {
                              duration: 1.5,
                              easing: (t) =>
                                Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                            });
                          } else {
                            section.scrollIntoView({ behavior: "smooth" });
                          }
                        }
                      }}
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-600 footer-menu-links hover:text-black transition-colors text-sm"
                    >
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4 text-sm text-gray-500">
            <p className="order-last md:order-first text-center md:text-left">
              © 2025 WebMaak. All rights reserved.
            </p>
            <div className="flex flex-col gap-1 md:gap-6 md:flex-row md:order-last order-first">
              <a
                href="mailto:hello@webmaak.com"
                className="text-[#0175e4] hover:text-[#013ca4] transition-colors"
              >
                hello@webmaak.com
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=916289972924&text=Hi%2C%20Webmaak%20team%2C%20Let%27s%20discuss%20about%20project"
                className="text-[#0175e4] hover:text-[#013ca4] transition-colors"
              >
                +91 62899 72924
              </a>
            </div>
          </div>
        </div>
        <h1
          className="footer-webmaak font-bold text-center uppercase bg-gradient-to-b from-black/10 to-transparent bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(0,0,0,0.05)] mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_30%,transparent)]"
          style={{ fontSize: zoomFont }}
        >
          WEBMAAK
        </h1>
        <h1 className="footer-webmaak-mobile text-[3rem] font-bold text-center uppercase bg-gradient-to-b from-black/10 to-transparent bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(0,0,0,0.05)] mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_30%,transparent)]">
          WEBMAAK
        </h1>
      </footer>
    </div>
  );
}
