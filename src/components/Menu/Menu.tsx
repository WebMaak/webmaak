"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Menu.css";
import { MenuIcon } from "lucide-react";

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

  // Toggle body class when menu opens
  useEffect(() => {
    if (mounted && portalRoot) {
      portalRoot.classList.toggle("menu-toggled", menuOpen);
    }
  }, [menuOpen, mounted, portalRoot]);

  const menuContent = (
    <div id="menu">
      <div id="menu-gradient"></div>
      <div id="menu-gradient-blur"></div>

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
              section.scrollIntoView({ behavior: "smooth" });
            }
            setMenuOpen(!menuOpen);
          }}
        >
          <span className="anchor"></span>
          <span className="index">03</span>
          <span className="label">Portfolio</span>
        </a>
        <a
          className="link"
          href="#"
          onClick={() => {
            const section = document.querySelector("#reviews");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
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
        className={`relative w-10 h-10 flex flex-col items-center justify-center gap-[6px] transition-colors duration-300 ${
          scrolled ? "text-black" : "text-white"
        }`}
      >
        <MenuIcon />
      </button>

      {/* Render menu overlay via portal */}
      {mounted && portalRoot && createPortal(menuContent, portalRoot)}
    </>
  );
}
