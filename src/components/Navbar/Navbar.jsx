"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import WhiteArrowButton from "../WhiteArrowButton/WhiteArrowButton";
import ToggleMenu from "../MorphingMenu/MorphingMenu";
import styles from "../WhiteArrowButtonLarge/WhiteArrowButtonLarge.module.css";
import Menu from "../Menu/Menu";

// Prevent unnecessary re-renders for heavy components
const MemoMenu = React.memo(Menu);
const MemoWhiteArrowButton = React.memo(WhiteArrowButton);
const MemoToggleMenu = React.memo(ToggleMenu);

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [isAbout, setIsAbout] = useState(false);

  const ticking = useRef(false);

  const pageScrollPoints = {
    "/": 0.9,
    "/contact": 0.2,
    "/about": 0.1,
    "/contact@media": 0.2,
    "/contact@webapps": 0.2,
    "/contact@marketing": 0.2,
  };

  const scrollPoint = pageScrollPoints[pathname] ?? 0.1;

  // Optimized scroll listener (no re-render on every pixel)
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

  // Efficient page logic (no repeated array creation)
  useEffect(() => {
    const specialPages = new Set([
      "/about",
      "/legal/payment-terms",
      "/legal/project-scope",
      "/legal/work-suspension",
      "/legal/confidentiality-policy",
      "/legal/delivery-policy",
      "/legal/communication-policy",
      "/legal/refund-policy",
      "/legal/partner-credit",
      "/legal/associate-engagement",
      "/legal/quality-assurance",
    ]);

    setIsAbout(specialPages.has(pathname) || scrolled);
  }, [pathname, scrolled]);

  return (
    <header className={`section_navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-embed w-embed"></div>

      <div
        className={`navbar_component ${scrolled ? "scrolled" : ""} w-nav`}
        fs-scrolldisable-element="smart-nav"
        role="banner"
      >
        <div className="navbar_container">
          {/* LOGO (unchanged functionality, optimized) */}
          <a
            href="/"
            aria-label="home"
            className="navbar_logo-link w-nav-brand"
          >
            <img
              src="/main-logo/site-logo.png"
              alt="Site Logo"
              className={`navbar_logo ${scrolled ? "hidden" : ""}`}
              style={{ width: "auto", height: "25px" }}
            />
            <img
              src="/main-logo/favicon.png"
              alt="Site Logo"
              className={`navbar_logo ${scrolled ? "" : "hidden"}`}
              style={{ width: "auto", height: "30px" }}
            />
          </a>

          <nav role="navigation" className="navbar_menu w-nav-menu">
            <div className="navbar_menu-wrap">
              <div className="navbar_menu-top"></div>
              <div className="mobile-menu_bottom-v2">
                <MemoWhiteArrowButton txt="Schedule a call" />
                <MemoWhiteArrowButton
                  txt="Chat Now"
                  href="https://api.whatsapp.com/send?phone=916289972924&text=Hi%2C%20Webmaak%20team%2C%20Let%27s%20discuss%20about%20project"
                />
              </div>
            </div>
          </nav>

          <div className="navbar_button-wrapper">
            {/* Menu remains EXACT logic */}
            <MemoMenu scrolled={isAbout ? true : scrolled} />

            {/* BUTTONS - identical behavior */}
            <a href="/contact" className="navbar-button w-inline-block">
              <div className="navbar-btn-content">
                <div className="button-bg-1"></div>
                <div className="button-bg-2"></div>
                <div className="navbar_text flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 48 48"
                    fill="none"
                    className={styles.secondaryBtnIconMeet}
                  >
                    <image
                      href="https://www.gstatic.com/marketing-cms/assets/images/25/5f/c96350b5427fbfdbdef268515872/google-chat.webp"
                      width="48"
                      height="48"
                    />
                  </svg>
                  Schedule a call
                </div>
              </div>
              <div className="navbar-light-wrap">
                <div className="navbar-light"></div>
              </div>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=916289972924&text=Hi%2C%20Webmaak%20team%2C%20Let%27s%20discuss%20about%20project"
              target="_blank"
              className="navbar-button w-inline-block chat-now"
            >
              <div
                className={`navbar-btn-content-white ${
                  isAbout ? "scrolled" : ""
                }`}
              >
                <div
                  className={`button-bg-1-white ${isAbout ? "scrolled" : ""}`}
                ></div>
                <div className="button-bg-2"></div>
                <div className="navbar_text_white flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 48 48"
                    fill="none"
                    className={styles.secondaryBtnIconMeet}
                  >
                    <image
                      href="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                      width="48"
                      height="48"
                    />
                  </svg>
                  Chat Now
                </div>
              </div>
              <div
                className={`navbar-light-wrap-white ${
                  isAbout ? "scrolled" : ""
                }`}
              >
                <div className="navbar-light"></div>
              </div>
            </a>

            {/* Toggle Menu (unchanged functionality, optimized render) */}
            <MemoToggleMenu
              className="hidden"
              menuItems={[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ]}
              buttonText="Get Started"
              menuTitle="Menu"
              onButtonClick={() => console.log("Get Started clicked")}
              onMenuItemClick={(item) => console.log("Navigate:", item.href)}
            />

            {/* Desktop CTA */}
            <div className="navbar_light-bgtn-wrap">
              <a
                href="/contact"
                className="button-link is-navbar-link w-inline-block"
              >
                <button className="button is-navbar">
                  <div className="secondary-btn-text is-navbar-text">
                    Start Project
                  </div>
                  <div className="secondary-btn_wrap is-navbar-btn-wrap">
                    <div className="secondary-btn_icon-wrap">
                      {/* ICONS unchanged */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 12"
                        fill="none"
                      >
                        <path
                          d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="w-nav-overlay"></div>
      </div>
    </header>
  );
}
