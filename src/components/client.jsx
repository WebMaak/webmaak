"use client";

import React from "react";
import "@/app/about/page.css";

export default function Client() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <section className="w-full bg-gradient-to-r from-[#0f061b] to-[#341162] py-28">
        <div className="casestudy_wrapper">
          <div className="container-large">
            <h2 className="heading-style-h2 is-contact-page-hero-heading-about py-4">
              Trusted by Global Brands
              <br />
            </h2>
            <div className="contact_sub-title-wrapper flex flex-col justify-center items-center">
              <div split-text="" className="contact_sub-title-one-about w-3/4">
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
                className="flex items-center justify-center w-[100px] sm:w-[120px] md:w-[140px]"
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
    </div>
  );
}
