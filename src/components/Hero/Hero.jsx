'use client'

import React from "react";
import "./Hero.css";
import LogoMarquee from "../LogoMarquee/LogoMarquee"
import WhiteArrowButtonLarge from "../WhiteArrowButtonLarge/WhiteArrowButtonLarge";
import HeroIconCursor from "./HeroIconCursor";
import Cards from './Cards'

function Hero() {

  return (
    <section
      className="section_hero"
      id="section1" data-theme="dark"
    >
      <div className="hero-bg">
        {/* <img
          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fc1ba1ea85400f35700aa6_bg-green-light.webp"
          loading="lazy"
          sizes="(max-width: 1195px) 100vw, 1195px"
          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fc1ba1ea85400f35700aa6_bg-green-light-p-500.webp 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fc1ba1ea85400f35700aa6_bg-green-light-p-800.webp 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fc1ba1ea85400f35700aa6_bg-green-light-p-1080.webp 1080w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fc1ba1ea85400f35700aa6_bg-green-light.webp 1195w"
          alt=""
          className="hero-bg_gradient-lines animation"
        /> */}
        <img
          src="./hero-bg.JPG"
          loading="lazy"
          sizes="100vw"
          srcset="./hero-bg.JPG 500w, ./hero-bg.JPG 1440w"
          alt=""
          className="contact_desktop-bg"
        />
        {/* <img
          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fb4f59097cbe03fb2b4eb8_hero-lines.png"
          loading="lazy"
          sizes="(max-width: 767px) 100vw, 608px"
          alt=""
          srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fb4f59097cbe03fb2b4eb8_hero-lines-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/65fb4f59097cbe03fb2b4eb8_hero-lines.png 683w"
          className="hero-bg_lines"
        /> */}
        <div className="hero_tool-wraper hide-mobile-landscape">
          <HeroIconCursor hoverText="MOBILE APPS • AUTOMATIONS • AI • WEB APPS •"  >
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
                  document.getElementById("it-section")?.scrollIntoView({
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

           
          {/* <div className="hero_tool_icon-wrap right">
            <img
              src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/660496d3ccf8e10df385076e_webflow-circle.webp"
              loading="lazy"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 492.177734375px, 56vw"
              srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/660496d3ccf8e10df385076e_webflow-circle-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/660496d3ccf8e10df385076e_webflow-circle.webp 721w"
              alt=""
              className="hero_tool_circle rotate-loop"
            />
            <img
              src="./keyframeicons.png"
              loading="lazy"
              alt=""
              className="hero_tool_icon hero_tool_icon_media"
              onClick={() => {
                document.getElementById("it")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start"
                });
              }}
            />
          </div> */}
          {/* <HeroIconCursor>
            {({ setHoverText }) => (
              <div className="hero_tool_icon-wrap right">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/660496d3ccf8e10df385076e_webflow-circle.webp"
                  alt=""
                  className="hero_tool_circle rotate-loop"
                />
                <img
                  src="./keyframeicons.png"
                  alt=""
                  className="hero_tool_icon hero_tool_icon_media"
                  onClick={() => {
                    document.getElementById("it")?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                  onMouseEnter={() => setHoverText('View Our Media Work')} // show text
                  onMouseLeave={() => setHoverText('')} // hide text
                />
              </div>
            )}
          </HeroIconCursor> */}
            {/* ({ setHoverText }) => ( */}
          <HeroIconCursor hoverText="3D ANIMATION • MGFX • SFX • VIDEO EDITING •" radius={8}>
            {({ setShowImage }) => (
              <div className="hero_tool_icon-wrap right">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/660496d3ccf8e10df385076e_webflow-circle.webp"
                  alt=""
                  className="hero_tool_circle rotate-loop"
                />
                <img
                  src="./keyframeicons.png"
                  alt=""
                  className="hero_tool_icon hero_tool_icon_media"
                  onClick={() => {
                    document.getElementById("media-section")?.scrollIntoView({
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
      <div className="hero-content">
        <h1 split-text="true" className="hero-content-title">
          {/* <span className="hero-content-white-text">
            Designing &amp; developing
          </span>{" "} */}
          <span className="hero-green-text">
            Crafting
          </span>{" "}
          <span className="hero-content-white-text italic-text-hero">
            Digital Masterpieces
          </span>
        </h1>
        <div className="max-width-medium">
          <p split-text="true" className="hero-content-subtitle">
            Crafting digital experiences that don’t just look good, but also bring measurable growth.
          </p>
        </div>
        <div className="hero-content_btn-wrapper fadeup">
          {/* <BlueArrowButton /> */}
          <WhiteArrowButtonLarge />
        </div>
      </div>
      <div className="hero_tool-wraper mobile">
        <HeroIconCursor hoverText="3D ANIMATION • MGFX • SFX • VIDEO EDITING •" radius={8}>
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
                document.getElementById("media-section")?.scrollIntoView({
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
            sizes="(max-width: 479px) 410.1480712890625px, (max-width: 767px) 80vw, 100vw"
            srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/660496d3ccf8e10df385076e_webflow-circle-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/660496d3ccf8e10df385076e_webflow-circle.webp 721w"
            alt=""
            className="hero_tool_circle rotate-loop"
          />
          <img
            src="./keyframeicons.png"
            loading="lazy"
            alt=""
            onClick={() => {
              document.getElementById("it-section")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }}
            className="hero_tool_icon"
          />
        </div>
      </div>
      <div className="hero_logo">
            <div className="padding-section-medium " style={{paddingTop: "3rem", paddingBottom: "0rem"}}>
              <div className="margin-bottom margin-medium">
                <div className="text-align-center">
                  <div className="max-width-large align-center">
                    <h2 split-text="true" className="logo_title">
                      Trusted by businesses that shape the future
                    </h2>
                  </div>
                </div>
              </div>
              <div className="max-width-large align-center" style={{maxWidth: '70rem'}} >
              <LogoMarquee/>
              </div>
            </div>
      </div>
    </section>
  );
}
export default Hero;
