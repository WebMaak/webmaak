"use client";

import React from "react";
import "./page.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/ModernFooter";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiX } from "react-icons/si";
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        {/* Hero */}
        <header className="mx-auto px-6 py-20 text-center pt-24 md:pt-36">
          <div className="container-medium">
            <div className="steps_heading-wrap relative">
              <div className="section-info-wrap">
                <div className="fadeup">
                  <h2 className="section-info_primary-text-about">
                    The <span className="heading-text-italic">Story </span>of
                    <br />{" "}
                    <span className="about-blue-heading">
                      WebMaak Creative LLP
                    </span>
                  </h2>
                </div>
                <div className="fadeup">
                  <p className="sub-title-border-about background-color-white">
                    Founded with a vision for creativity and innovation,{" "}
                    <span className="font-semibold">
                      {" "}
                      WebMaak Creative LLP{" "}
                    </span>
                    has been delivering impactful digital experiences since
                    <span className="font-semibold"> 2018, </span>officially
                    registered on
                    <span className="font-semibold">
                      {" "}
                      May 26, 2025 in Kolkata, India
                    </span>
                    . What started as a small freelance initiative by{" "}
                    <span className="font-semibold"> Talib Ali</span> has now
                    grown into a full-fledged creative agency with a passionate
                    team of designers, developers, and media professionals.
                  </p>
                </div>
                <div className="mt-8 flex justify-center">
                  <img src="/about-map.jpg" className="w-[70%] " />
                </div>
                <div className="fadeup">
                  <p className="sub-title-border-about background-color-white ">
                    In <span className="font-semibold"> 2023, Aman Ali </span>
                    joined the venture, expanding WebMaak’s capabilities into
                    <span className="font-semibold">
                      {" "}
                      Media and post-production services
                    </span>
                    , strengthening our ability to deliver end-to-end creative
                    solutions under one roof.
                  </p>
                  <p className="sub-title-border-about background-color-white ">
                    With a strong foundation in both{" "}
                    <span className="font-semibold">
                      {" "}
                      technology and creativity
                    </span>
                    , we have successfully delivered
                    <span className="font-semibold">
                      {" "}
                      350+ projects across the globe
                    </span>
                    , spanning diverse industries and markets.
                  </p>
                  <p className="sub-title-border-about background-color-white ">
                    At WebMaak, we work with a versatile range of{" "}
                    <span className="font-semibold">
                      {" "}
                      tech stacks and tools
                    </span>
                    , including
                    <span className="font-semibold">
                      {" "}
                      Next.js, React, Node.js, Express.js, MongoDB, WordPress,
                      WooCommerce, React.native
                    </span>
                    , along with the full suite of{" "}
                    <span className="font-semibold">
                      {" "}
                      Adobe After Effects, Adobe Premiere Pro, Da Vinci Resolve
                    </span>{" "}
                    and{" "}
                    <span className="font-semibold">
                      {" "}
                      Blender, and Unreal Engine
                    </span>{" "}
                    for visual and motion projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Secondary section */}
        <section className="max-w-[1400px] mx-auto px-6 mb-20">
          {/* Example content area (cards) */}
          <div className="mt-8 flex flex-col gap-6">
            <article className="p-6 flex flex-col lg:flex-row items-center lg:items:left gap-2 bg-white border rounded-lg shadow-sm">
              <Image
                src="/talib.png"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <div className="flex flex-col text-center lg:text-left">
                <h3 className="section-info_primary-text-card">Talib Ali</h3>
                <h4 className="section-info_primary-text-subheading">
                  {" "}
                  Founder, CEO
                </h4>
                <p
                  className="mt-2 text-base sub-title-border-about"
                  style={{ maxWidth: "100%" }}
                >
                  <span className="font-bold"> Talib Ali</span>, a{" "}
                  <span className="font-bold"> Management Graduate</span>,
                  started his journey as a{" "}
                  <span className="font-bold"> WordPress Developer </span> and
                  gradually expanded his expertise into{" "}
                  <span className="font-bold">
                    {" "}
                    UI/UX design, Web Development, and Project Management{" "}
                  </span>
                  . He now leads all{" "}
                  <span className="font-bold"> IT and design projects </span>,
                  ensuring seamless execution, creative quality, and client
                  satisfaction.
                </p>
                <h4 className="section-info_primary-text-socials"> Socials</h4>

                <div className="mt-1 flex items-center justify-center lg:justify-start px-5 gap-3">
                  <a
                    href="https://www.linkedin.com/in/mdtalib15/"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="w-4 h-4 text-[#0A66C2]" />
                  </a>
                  <a
                    href="https://www.instagram.com/talib_imran"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-4 h-4 text-[#E4405F]" />
                  </a>
                  <a
                    href="https://www.facebook.com/talib.ali.15/"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-4 h-4 text-[#1877F2]" />
                  </a>
                  {/* <a href="#" aria-label="X">
                    <SiX className="w-4 h-4 text-black" />
                  </a> */}
                </div>
              </div>
            </article>

            <article className="p-6 flex flex-col lg:flex-row items-center lg:items:left gap-2 bg-white border rounded-lg shadow-sm">
              <Image
                src="/aman.jpg"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <div className="flex flex-col text-center lg:text-left">
                <h3 className="section-info_primary-text-card">Aman Ali</h3>
                <h4 className="section-info_primary-text-subheading">
                  {" "}
                  Co-Founder, COO
                </h4>
                <p
                  className="mt-2 text-base sub-title-border-about"
                  style={{ maxWidth: "100%" }}
                >
                  <span className="font-bold"> Aman Ali</span>, after completing
                  school, began his creative journey while pursuing Graduation
                  and Chartered Accountancy.
                  <span className="font-bold">
                    {" "}
                    Passionate about photography, animation, and all forms of
                    visual storytelling, he poured his creativity into
                    post-production and video editing
                  </span>
                  . A self-taught artist,{" "}
                  <span className="font-bold">
                    {" "}
                    Aman now leads WebMaak’s media division{" "}
                  </span>
                  , bringing life to visuals through his keen eye for detail and
                  storytelling flair.
                </p>
                <h4 className="section-info_primary-text-socials"> Socials</h4>

                <div className="mt-1 flex items-center justify-center lg:justify-start px-5 gap-3">
                  <a
                    href="https://www.linkedin.com/in/mdaman0803/"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="w-4 h-4 text-[#0A66C2]" />
                  </a>
                  <a
                    href="https://www.instagram.com/mdaman0803/"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-4 h-4 text-[#E4405F]" />
                  </a>
                  <a
                    href="https://www.facebook.com/mdaman08"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="w-4 h-4 text-[#1877F2]" />
                  </a>
                  {/* <a href="#" aria-label="X">
                    <SiX className="w-4 h-4 text-black" />
                  </a> */}
                </div>
              </div>
            </article>
          </div>
        </section>
        <section className="w-full bg-gradient-to-r from-[#0f061b] to-[#341162] mb-14 py-28">
          <div className="casestudy_wrapper">
            <div className="container-large">
              <h2 className="heading-style-h2 is-contact-page-hero-heading-about">
                Trusted by Global Brands
                <br />
              </h2>
              <div className="contact_sub-title-wrapper flex flex-col justify-center items-center">
                <div
                  split-text=""
                  className="contact_sub-title-one-about w-3/4"
                >
                  We’ve partnered with clients around the world to bring their
                  ideas to life through creative design, innovative apps, and
                  impactful growth.
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[1400px] mx-auto px-6 mt-24">
            <div className="flex flex-wrap justify-center gap-2 md:gap-6 lg:gap-14">
              {Array.from({ length: 39 }, (_, i) => i + 1).map((num) => (
                <div
                  key={num}
                  className="flex items-center justify-center w-[120px] sm:w-[120px] md:w-[140px]"
                >
                  <img
                    src={`/marquee-logo/${num}.png`}
                    alt={`Logo ${num}`}
                    className="w-auto max-h-6 md:max-h-12 lg:max-h-16 object-contain hover:scale-[1.2] transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <p className="sub-title-border-about background-color-white text-center ">
          Though <span className="font-semibold"> small in size</span>, our team
          is
          <span className="font-semibold"> highly efficient</span>, blending
          technical precision with artistic excellence. Our{" "}
          <span className="font-semibold">
            {" "}
            coders, designers, and animators
          </span>
          work collaboratively to transform ideas into powerful digital
          experiences that drive results and inspire creativity.
        </p>
        <p className="sub-title-border-about background-color-white mb-14 text-center">
          At <span className="font-semibold"> WebMaak Creative LLP</span>, we
          don’t just build brands; we build success stories.
        </p>
        <Footer />
      </div>
    </>
  );
}
