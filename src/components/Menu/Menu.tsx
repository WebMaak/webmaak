"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Menu.css";
import { ChartNoAxesGantt, X } from "lucide-react";

// Extend Window interface to include Lenis
declare global {
  interface Window {
    lenis?: any;
  }
}

interface MenuProps {
  scrolled: boolean; // parent passes true/false
}

export default function Menu({ scrolled }: MenuProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  // Only run on client
  useEffect(() => {
    setMounted(true);
    setPortalRoot(document.body);
  }, []);

  // Toggle body class when menu opens and pause/resume smooth scrolling
  useEffect(() => {
    if (mounted && portalRoot) {
      portalRoot.classList.toggle("menu-toggled", menuOpen);

      // Pause or resume Lenis smooth scrolling
      if (window.lenis) {
        if (menuOpen) {
          window.lenis.stop();
        } else {
          // Ensure Lenis is started when menu closes
          window.lenis.start();
        }
      }
    }
  }, [menuOpen, mounted, portalRoot]);

  // Ensure Lenis is properly initialized on mobile
  useEffect(() => {
    if (mounted && window.lenis) {
      // Force start Lenis on mobile to ensure scrolling works
      const isMobile = window.innerWidth <= 768;
      if (isMobile && !menuOpen) {
        window.lenis.start();
      }
    }
  }, [mounted, menuOpen]);

  const menuContent = (
    <div id="menu">
      <div id="menu-gradient"></div>
      <div id="menu-gradient-blur">
        <div id="stars-bg"></div>
      </div>

      <div id="menu-arcs-wrapper">
        <svg id="menu-arcs">
          <circle className="menu-arc" cx="50%" cy="50%" r="18%"></circle>
          <circle className="menu-arc" cx="50%" cy="50%" r="30%"></circle>
          <circle className="menu-arc" cx="50%" cy="50%" r="42%"></circle>
        </svg>
      </div>

      <div id="menu-links">
        <a className="link" href="#" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="anchor"></span>
          <span className="index">01</span>
          <span className="label">About Us</span>
        </a>
        <a className="link" href="#" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="anchor"></span>
          <span className="index">02</span>
          <span className="label">Contact Us</span>
        </a>
        <a
          className="link"
          href="#"
          onClick={() => {
            const section = document.querySelector("#section4");
            if (section) {
              // Resume Lenis, scroll to section, then close menu
              if (window.lenis) {
                window.lenis.start();
                window.lenis.scrollTo(section, {
                  duration: 1.5,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
              } else {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }
            setMenuOpen(!menuOpen);
          }}
        >
          <span className="anchor"></span>
          <span className="index">03</span>
          <span className="label">Our Work</span>
        </a>
        <a
          className="link"
          href="#"
          onClick={() => {
            const section = document.querySelector("#reviews");
            if (section) {
              // Resume Lenis, scroll to section, then close menu
              if (window.lenis) {
                window.lenis.start();
                window.lenis.scrollTo(section, {
                  duration: 1.5,
                  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                });
              } else {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }
            setMenuOpen(!menuOpen);
          }}
        >
          <span className="anchor"></span>
          <span className="index">04</span>
          <span className="label">Reviews</span>
        </a>
      </div>
    </div>
  );

  return (
    <>
      {/* Toggle button */}
      <button
        type="button"
        id="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
        className={`relative w-10 h-10 flex items-center justify-center transition-colors duration-300 ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        {/* Menu Icon */}
        <ChartNoAxesGantt
          className={`absolute w-6 h-6 transition-opacity duration-300 ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        {/* Close Icon */}
        <X
          className={`absolute w-6 h-6 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        />
      </button>

      {/* Render menu overlay via portal */}
      {mounted && portalRoot && createPortal(menuContent, portalRoot)}
    </>
  );
}
