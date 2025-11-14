"use client";

import React from "react";
import "./Hero.css";
import LogoMarquee from "../LogoMarquee/LogoMarquee";
import WhiteArrowButtonLarge from "../WhiteArrowButtonLarge/WhiteArrowButtonLarge";
import dynamic from "next/dynamic";
import Image from "next/image";

const HeroIconCursor = dynamic(() => import("./HeroIconCursor"), {
  ssr: false,
  loading: () => null,
});

function Hero() {
  return (
    <section className="section_hero" id="section1" data-theme="dark">
      <div className="hero-bg">
        <Image
          src="/hero-bg.webp"
          alt="Hero background"
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* ICONS - now lazy loaded */}
        <div className="hero_tool-wraper hide-mobile-landscape">
          <HeroIconCursor hoverText="MOBILE APPS • AUTOMATIONS • AI • WEB APPS •">
            {({ setShowImage }) => (
              <div className="hero_tool_icon-wrap left">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/660496dd88e87ad9be7678f9_figma-cirle.webp"
                  loading="lazy"
                  alt=""
                  className="hero_tool_circle rotate-loop"
                />
                <img
                  src="./codingicons.png"
                  loading="lazy"
                  alt=""
                  className="hero_tool_icon hero_tool_icon_it"
                  onClick={() =>
                    document.getElementById("Services")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                  onMouseEnter={() => setShowImage(true)}
                  onMouseLeave={() => setShowImage(false)}
                />
              </div>
            )}
          </HeroIconCursor>

          <HeroIconCursor
            hoverText="3D ANIMATION • MGFX • SFX • VIDEO EDITING •"
            radius={8}
          >
            {({ setShowImage }) => (
              <div className="hero_tool_icon-wrap right">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/660496d3ccf8e10df385076e_webflow-circle.webp"
                  loading="lazy"
                  alt=""
                  className="hero_tool_circle rotate-loop"
                />

                <img
                  src="./keyframeicons.png"
                  loading="lazy"
                  alt=""
                  className="hero_tool_icon hero_tool_icon_media"
                  onClick={() => {
                    document.getElementById("section8")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  onMouseEnter={() => setShowImage(true)}
                  onMouseLeave={() => setShowImage(false)}
                />
              </div>
            )}
          </HeroIconCursor>
        </div>
      </div>

      {/* HERO TEXT */}
      <div className="hero-content">
        <h1 split-text="true" className="hero-content-title">
          <span className="hero-green-text">Crafting</span>{" "}
          <span className="hero-content-white-text italic-text-hero">
            Digital Masterpieces
          </span>
        </h1>

        <div className="max-width-medium">
          <p split-text="true" className="hero-content-subtitle">
            Crafting digital experiences that don’t just look good, but also
            bring measurable growth.
          </p>
        </div>

        <div className="hero-content_btn-wrapper fadeup">
          <WhiteArrowButtonLarge />
        </div>
      </div>

      {/* MOBILE ICONS */}
      <div className="hero_tool-wraper mobile">
        <HeroIconCursor
          hoverText="3D ANIMATION • MGFX • SFX • VIDEO EDITING •"
          radius={8}
        >
          {({ setShowImage }) => (
            <div className="hero_tool_icon-wrap left mobile">
              <img
                src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/660496dd88e87ad9be7678f9_figma-cirle.webp"
                loading="lazy"
                alt=""
                className="hero_tool_circle rotate-loop"
              />

              <img
                src="./codingicons.png"
                loading="lazy"
                alt=""
                onClick={() => {
                  document.getElementById("Services")?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }}
                className="hero_tool_icon"
              />
            </div>
          )}
        </HeroIconCursor>

        <div className="hero_tool_icon-wrap right mobile">
          <img
            src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/660496d3ccf8e10df385076e_webflow-circle.webp"
            loading="lazy"
            alt=""
            className="hero_tool_circle rotate-loop"
          />

          <img
            src="./keyframeicons.png"
            loading="lazy"
            alt=""
            onClick={() => {
              document.getElementById("section8")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="hero_tool_icon"
          />
        </div>
      </div>

      {/* LOGO MARQUEE */}
      <div className="hero_logo">
        <div
          className="padding-section-medium"
          style={{ paddingTop: "3rem", paddingBottom: "0rem" }}
        >
          <div className="margin-bottom margin-medium marquee-top-text">
            <div className="text-align-center">
              <div className="max-width-large align-center">
                <h2 split-text="true" className="logo_title">
                  Trusted by businesses that shape the future
                </h2>
              </div>
            </div>
          </div>

          <div
            className="max-width-large align-center"
            style={{ maxWidth: "70rem" }}
          >
            <LogoMarquee />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
