"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import WhiteArrowButton from "../WhiteArrowButton/WhiteArrowButton";
import ToggleMenu from "../MorphingMenu/MorphingMenu";
import styles from "../WhiteArrowButtonLarge/WhiteArrowButtonLarge.module.css";
import Menu from "../Menu/Menu";

export default function Navbar() {
  const pathname = usePathname(); // current route
  const [scrolled, setScrolled] = useState(false);

  const pageScrollPoints = {
    "/": 0.9,
    "/contact": 0.2,
    "/contact@media": 0.2,
    "/contact@webapps": 0.2,
    "/contact@marketing": 0.2,
  };

  useEffect(() => {
    const scrollPoint = pageScrollPoints[pathname] || 0.9;

    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * scrollPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className={`section_navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-embed w-embed"></div>
      <div
        className="navbar_component w-nav"
        fs-scrolldisable-element="smart-nav"
        role="banner"
      >
        <div className="navbar_container">
          <a
            href="/"
            aria-current="page"
            className="navbar_logo-link w-nav-brand w--current"
            aria-label="home"
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
              <div className="navbar_menu-top">
                {/* <a
                  href="/#reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    const section = document.querySelector("#reviews");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`navbar_menu-item w-inline-block ${
                    scrolled ? "scrolled" : ""
                  }`}
                >
                  <div className="navbar_link">Reviews</div>
                  <div className="mobile-menu_icon-circle">
                    <div className="mobile-menu_icon-wrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 23 23"
                        fill="none"
                        className="mobile-menu_arrow-icon"
                      >
                        <path
                          d="M8.38626 14.6143L14.9859 8.01462M14.9859 8.01462H8.38626M14.9859 8.01462V14.6143"
                          stroke="currentColor"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a> */}
              </div>
              <div className="mobile-menu_bottom-v2">
                {/* <a href="/contact" className="button-link w-inline-block">
                  <div className="hide w-embed"></div>
                  <button type="" className="secondary-button">
                    <div className="secondary-btn-text">Contact us</div>
                    <div className="secondary-btn_wrap">
                      <div className="secondary-btn_icon-wrap">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 20 12"
                          fill="none"
                          className="secondary-btn_icon"
                        >
                          <path
                            d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                            stroke="currentColor"
                            stroke-width="2"
                          ></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 20 12"
                          fill="none"
                          className="secondary-btn_icon"
                        >
                          <path
                            d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                            stroke="currentColor"
                            stroke-width="2"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </button>
                </a> */}

                <WhiteArrowButton txt="Schedule a call" />
                <WhiteArrowButton
                  txt="Chat Now"
                  href="https://api.whatsapp.com/send?phone=916289972924&text=Hi%2C%20Webmaak%20team%2C%20Let%27s%20discuss%20about%20project"
                />
              </div>
            </div>
          </nav>
          <div
            id="w-node-d5229618-d2f9-dcdf-f238-806b9aeacf98-9aeacf7f"
            className="navbar_button-wrapper"
          >
            <Menu scrolled={scrolled} />
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
                      preserveAspectRatio="xMidYMid meet"
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
                  scrolled ? "scrolled" : ""
                }`}
              >
                <div
                  className={`button-bg-1-white ${scrolled ? "scrolled" : ""}`}
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
                      preserveAspectRatio="xMidYMid meet"
                    />
                  </svg>
                  Chat Now
                </div>
              </div>
              <div
                className={`navbar-light-wrap-white ${
                  scrolled ? "scrolled" : ""
                }`}
              >
                <div className="navbar-light"></div>
              </div>
            </a>
            <ToggleMenu
              className="hidden"
              menuItems={[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" },
              ]}
              onMenuItemClick={(item) => {
                // Your navigation logic here
                console.log("Navigate to:", item.href);
                // router.push(item.href) for Next.js
              }}
              onButtonClick={() => {
                // Your button action
                console.log("Get Started clicked");
              }}
              buttonText="Get Started"
              menuTitle="Menu"
            />

            <div className="navbar_light-bgtn-wrap">
              <a
                href="/contact"
                className="button-link is-navbar-link w-inline-block"
              >
                <div className="hide w-embed"></div>
                <button type="" className="button is-navbar">
                  <div className="secondary-btn-text is-navbar-text">
                    Start Project
                  </div>
                  <div className="secondary-btn_wrap is-navbar-btn-wrap">
                    <div className="secondary-btn_icon-wrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 20 12"
                        fill="none"
                        className="secondary-btn_icon is-navbar-icon"
                      >
                        <path
                          d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        viewBox="0 0 20 12"
                        fill="none"
                        className="secondary-btn_icon is-navbar-icon"
                      >
                        <path
                          d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                          stroke="currentColor"
                          stroke-width="2"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </a>
            </div>
            {/* Toggle mobile Menu */}
            <div
              className="mobile-menu-btn w-nav-button w--open hidden"
              aria-label="menu"
              role="button"
              tabindex="0"
              aria-controls="w-nav-overlay-0"
              aria-haspopup="menu"
              aria-expanded="true"
            >
              <div
                className="navbar-humburger_button-open-v2"
                onClick={() => {
                  const menu = document.querySelector(".w-nav-menu");
                  const hamBtn = document.querySelector(
                    ".navbar-humburger_button-open-v2"
                  );
                  const closeBtn = document.querySelector(
                    ".navbar-humburger_button-close-copy "
                  );
                  menu.style.display = "block";
                  hamBtn.style.display = "none";
                  closeBtn.style.display = "block";
                }}
              >
                <div className="navbar-menu-content">
                  <div className="button-bg-1 menu"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="navbar-menu-btn"
                  >
                    <path
                      d="M2 8H14"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M2 4H14"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M2 12H14"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
              <div
                className="navbar-humburger_button-close-copy"
                onClick={() => {
                  const menu = document.querySelector(".w-nav-menu");
                  const hamBtn = document.querySelector(
                    ".navbar-humburger_button-open-v2"
                  );
                  const closeBtn = document.querySelector(
                    ".navbar-humburger_button-close-copy"
                  );
                  menu.style.display = "none";
                  hamBtn.style.display = "block";
                  closeBtn.style.display = "none";
                }}
              >
                <div className="navbar-menu-content">
                  <div className="button-bg-1 menu"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="navbar-menu-btn"
                  >
                    <path
                      d="M3.75732 12.2422L12.2426 3.75691"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M3.94434 3.57812L12.0556 12.4216"
                      stroke="currentColor"
                      stroke-width="1.2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <div className="navbar_text">Close</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-nav-overlay" id="w-nav-overlay-0"></div>
      </div>
    </header>
  );
}
