// Main hero section rendering.
"use client";

import HeroIcon from "../Hero/HeroIcons";
import Marquee from "../Hero/HeroMarquee";
import HeroContent from "../Hero/HeroContent";

import Button from "@/components/ui/Button";

import "@/styles/hero.css";

export default function Hero() {
  return (
    <section id="home" data-theme="dark" className="hero-wrapper">
      <div className="hero-icons">
        <div className="clockwise-curve">
          <HeroIcon type="it" scrollTo="#it-services" />
        </div>
        <div className="anti-clockwise-curve">
          <HeroIcon type="media" scrollTo="#media-services" />
        </div>
      </div>
      <HeroContent />
      <div className="css-fadeup-1-2">
        <Button />
      </div>
      <div className="css-fadein-1-2">
        <Marquee />
      </div>
    </section>
  );
}
