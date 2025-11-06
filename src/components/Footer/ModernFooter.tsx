"use clients";

import React from "react";
import { useEffect, useState } from "react";
import WhiteArrowButton from "@/components/WhiteArrowButton/WhiteArrowButton";
import { SiLinkedin, SiFacebook, SiInstagram } from "react-icons/si";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Footer.css";
export default function ModernFooter() {
  const [zoomFont, setZoomFont] = useState("20rem");

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
      else if (width >= 1050) setZoomFont("10rem");
      else if (width >= 1000) setZoomFont("8rem");
      else if (width >= 800) setZoomFont("8rem");
      else if (width >= 700) setZoomFont("7rem");
      else if (width >= 767) setZoomFont("6rem");
      else setZoomFont("4rem");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center p-4  md:p-4 lg:p-8 pt-0 md:pt-0 lg:pt-0">
      {/* Hero Section */}
      <div className="w-full mb-16 text-center">
        <div className="bg-gradient-to-b from-gray-900 to-black rounded-3xl py-16 md:py-32 shadow-2xl flex flex-col gap-6">
          <div className="fadeup flex flex-col items-center justify-center ">
            <h2 className={`section-info_primary-text-light text-center`}>
              Crafting{" "}
              <span className="heading-text-italic">digital stories</span>
              <br />
              that inspire and engage.{" "}
            </h2>{" "}
          </div>{" "}
          <div className="fadeup max-w-[90%] md:max-w-[50%] mx-auto mb-6 ">
            {" "}
            <p className="sub-title-fourth-sec text-center">
              Every great brand deserves an exceptional online presence. We’re
              here to bring your vision to life with design, strategy, and
              technology that work in harmony.{" "}
            </p>{" "}
          </div>
          <WhiteArrowButton txt="Book a call" />
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border border-[rgba(0,0,0,0.04)] bg-[#FAFAFA] rounded-3xl lg:p-12 md:p-6 p-5">
        <div className="max-w-[98%] lg:p-20 md:p-6 p-5 mx-auto rounded-3xl shadow-lg ">
          <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
            {/* Logo and Description */}
            <div className="max-w-xl text-center md:text-left">
              <div className="hidden md:flex items-center justify-start gap-2 mb-4">
                <img
                  src="/main-logo/colored-logo.png"
                  className="w-[150px]"
                ></img>
              </div>
              <div className="flex md:hidden justify-start  items-center  gap-2 mb-4">
                <img
                  src="/main-logo/colored-logo.png"
                  className="w-[100px]"
                ></img>
              </div>
              <p className="text-gray-600 sub-title-footer-sec mb-6">
                WebMaak empowers brands to turn ideas into powerful digital
                experiences, making design, performance, and storytelling come
                together seamlessly.
              </p>
              <div className="gap-2 flex md:hidden justify-center">
                <a
                  href="#"
                  className="text-black/60 hover:text-blacktransition-colors"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="text-black/60 hover:text-black mt-[1px] text-[0.9rem] transition-colors"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-black/60 hover:text-black  transition-colors"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
              <div className="gap-3 text-[1.2rem] hidden md:flex justify-start ">
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="text-black/60 hover:text-black transition-colors"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="text-black/60 hover:text-black  transition-colors"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </div>
            </div>

            <div className="flex md:flex-row flex-col text-center md:text-left lg:gap-16 md:gap-6">
              {/* Product */}
              <div>
                <h3 className="font-semibold text-lg md:text-lg lg:text-2xl text-black md:mb-4 mb-0">
                  Product
                </h3>
                <ul className="lg:space-y-3 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      Changelog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="font-semibold text-lg md:text-lg lg:text-2xl text-black md:mb-4 mb-0">
                  Resources
                </h3>
                <ul className="lg:space-y-3 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      Tutorials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold text-lg md:text-lg lg:text-2xl text-black md:mb-4 mb-0">
                  Company
                </h3>
                <ul className="lg:space-y-3 space-y-1">
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-black transition-colors text-sm"
                    >
                      Partners
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
            <div className="flex gap-6 md:order-last order-first">
              <a href="#" className="hover:text-black transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-black transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
        <h1
          className="hidden md:block font-bold text-center uppercase bg-gradient-to-b from-black/10 to-transparent bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(0,0,0,0.05)] mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_30%,transparent)]"
          style={{ fontSize: zoomFont }}
        >
          WEBMAAK
        </h1>
        <h1 className="text-[3rem] block md:hidden font-bold text-center uppercase bg-gradient-to-b from-black/10 to-transparent bg-clip-text text-transparent drop-shadow-[0_1px_3px_rgba(0,0,0,0.05)] mix-blend-multiply [mask-image:linear-gradient(to_bottom,black_30%,transparent)]">
          WEBMAAK
        </h1>
      </footer>
    </div>
  );
}
