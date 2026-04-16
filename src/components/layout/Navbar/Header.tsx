"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Hamburger from "./Ham";

import FullScreenMenu from "./FullScreenMenu";
import styles from "@/styles/navbar/Header.module.css";
import "@/styles/navbar/NavButton.css";

const pageScrollPoints: Record<string, number> = {
  "/": 0.9,
  "/contact": 0.1,
  "/about": 0.1,
};

const specialPages = new Set([
  "/about",
  "/work",
  "/personal@work",
  // "/legal",
  // "/legal/payment-terms",
  // "/legal/project-scope",
  // "/legal/work-suspension",
  // "/legal/confidentiality-policy",
  // "/legal/delivery-policy",
  // "/legal/communication-policy",
  // "/legal/refund-policy",
  // "/legal/partner-credit",
  // "/legal/associate-engagement",
  // "/legal/quality-assurance",
]);

const Header: React.FC = () => {
  const pathname = usePathname();

  // MENU STATE
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // SCROLL STATE
  const [scrolled, setScrolled] = useState(false);
  const ticking = useRef(false);

  const scrollPoint = pageScrollPoints[pathname] ?? 0.1;
  const isSlugPage =
    pathname.startsWith("/work/") || pathname.startsWith("/other@work/");
  const forceScrolled =
    specialPages.has(pathname) || pathname === "/other@work" || isSlugPage;

  // ✅ DERIVED UI STATE (matches Navbar)
  const isAbout = forceScrolled || scrolled;
  const isShrunk = scrolled;
  const isSpecial = specialPages.has(pathname);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Optimized scroll handler
  const handleScroll = useCallback(() => {
    if (!ticking.current) {
      window.requestAnimationFrame(() => {
        const shouldScroll = window.scrollY > window.innerHeight * scrollPoint;

        setScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev));
        ticking.current = false;
      });

      ticking.current = true;
    }
  }, [scrollPoint]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // BODY SCROLL LOCK
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className={`${styles.header} ${isShrunk ? styles.shrunk : ""}`}>
        <div className={styles.inner}>
          <Link href="/">
            <Image
              src={
                isAbout
                  ? isShrunk
                    ? "/company-logos/site-logo-white.png"
                    : "/company-logos/site-logo-colored.png"
                  : "/company-logos/site-logo-white.png"
              }
              alt="Site Logo"
              width={500}
              height={200}
              priority
              quality={100}
              className={styles.logo}
            />
          </Link>
        </div>

        <div className="nav-btn-wrapper">
          <Hamburger
            isOpen={isMenuOpen}
            toggle={toggleMenu}
            isShrunk={isAbout ? true : isShrunk}
          />

          {/* Schedule Call */}
          <Link
            href="/contact"
            className="navbar-button w-inline-block desktop-only"
          >
            <div className="navbar-btn-content">
              <div className="button-bg-1"></div>
              <div className="button-bg-2"></div>
              <div className="navbar_text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  className="nav-btn-icon"
                >
                  <image
                    href="https://www.gstatic.com/marketing-cms/assets/images/25/5f/c96350b5427fbfdbdef268515872/google-chat.webp"
                    width="14"
                    height="14"
                  />
                </svg>
                Schedule a call
              </div>
            </div>
            <div className="navbar-light-wrap">
              <div className="navbar-light"></div>
            </div>
          </Link>

          {/* Chat Now */}
          <a
            href="https://api.whatsapp.com/send?phone=916289972924&text=Hi%2C%20Webmaak%20team%2C%20Let%27s%20discuss%20about%20project"
            target="_blank"
            className="navbar-button w-inline-block chat-now desktop-only"
          >
            <div
              className={`navbar-btn-content-white ${
                isAbout ? "scrolled" : ""
              } ${isSpecial ? "special" : ""}`}
            >
              <div
                className={`button-bg-1-white ${isAbout ? "scrolled" : ""}`}
              ></div>
              <div className="button-bg-2"></div>
              <div className="navbar_text_white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  className="nav-btn-icon"
                >
                  <image
                    href="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    width="14"
                    height="14"
                  />
                </svg>
                Chat Now
              </div>
            </div>
            <div
              className={`navbar-light-wrap-white ${isAbout ? "scrolled" : ""}`}
            >
              <div className="navbar-light"></div>
            </div>
          </a>
        </div>
      </header>

      <FullScreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
};

export default Header;
