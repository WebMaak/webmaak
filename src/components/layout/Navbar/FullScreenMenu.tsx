"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Linkedin, Instagram, Facebook, X } from "lucide-react";
import { MENU_ITEMS, SOCIAL_LINKS } from "./constants";
import StarBackground from "./StarBackground";
import "@/styles/navbar/FullScreenMenu.css";

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const DESKTOP_BREAKPOINT = 1025;

const overlayVariants: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "circle(0% at 90% 10%)",
  },
  visible: {
    opacity: 1,
    clipPath: "circle(150% at 90% 10%)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    clipPath: "circle(0% at 90% 10%)",
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

const overlayVariantsMobile: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
  },
};

const itemVariants: Variants = {
  hidden: { x: 80, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2 + i * 0.1,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
  exit: (i: number) => ({
    x: -40,
    opacity: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const itemVariantsMobile: Variants = {
  hidden: { x: 40, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.1 + i * 0.06,
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
  exit: (i: number) => ({
    x: -20,
    opacity: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const bgVariants: Variants = {
  animate: {
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const socialCardVariants: Variants = {
  hidden: { x: 30, opacity: 0 },
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5 + i * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
  exit: { x: 20, opacity: 0, transition: { duration: 0.3 } },
};

const socialIcons: Record<
  string,
  React.ComponentType<{ size?: number; className?: string }>
> = {
  linkedin: Linkedin,
  instagram: Instagram,
  facebook: Facebook,
};

const FullScreenMenu: React.FC<FullScreenMenuProps> = ({ isOpen, onClose }) => {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`).matches
      : true,
  );

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const handler = () => setIsDesktop(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const overlayVariantsChoice = useMemo(
    () => (isDesktop ? overlayVariants : overlayVariantsMobile),
    [isDesktop],
  );
  const itemVariantsChoice = useMemo(
    () => (isDesktop ? itemVariants : itemVariantsMobile),
    [isDesktop],
  );

  const socialCount = SOCIAL_LINKS.length;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="menu-overlay"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={overlayVariantsChoice}
          className="menu-overlay"
        >
          <button
            className="close-menu-btn"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
          <div className="menu-background">
            <StarBackground isActive={isOpen} reducedDensity={!isDesktop} />

            {isDesktop && (
              <motion.div
                variants={bgVariants}
                animate="animate"
                className="nebula-container"
              >
                <div className="nebula-layer layer-1" />
                <div className="nebula-layer layer-2" />
                <div className="nebula-layer layer-3" />
              </motion.div>
            )}
          </div>

          <div className="menu-content">
            <nav className="menu-nav">
              <ul className="menu-list">
                {MENU_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.id}
                    custom={i}
                    variants={itemVariantsChoice}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="menu-item-container"
                  >
                    <a
                      href={item.href}
                      onClick={() => onClose()}
                      className="menu-link group"
                    >
                      <span className="menu-number">0{i + 1}</span>
                      <span className="menu-text">{item.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {isDesktop && (
              <div className="menu-social-cards">
                {SOCIAL_LINKS.map((social, i) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <motion.a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      custom={i}
                      variants={socialCardVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="social-card"
                      aria-label={social.label}
                    >
                      {Icon && <Icon size={22} className="social-card-icon" />}
                      <span className="social-card-label">{social.label}</span>
                    </motion.a>
                  );
                })}

                <div className="bottom-btn">
                  <motion.a
                    href="/contact"
                    className="navbar-button w-inline-block desktop-only"
                    custom={socialCount}
                    variants={socialCardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
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
                  </motion.a>

                  {/* Chat Now */}
                  <motion.a
                    href="https://api.whatsapp.com/send?phone=916289972924&text=Hi%2C%20Webmaak%20team%2C%20Let%27s%20discuss%20about%20project"
                    target="_blank"
                    className="navbar-button w-inline-block chat-now desktop-only"
                    custom={socialCount + 1}
                    variants={socialCardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className={`navbar-btn-content-white fullscreen-btn`}>
                      <div className={`button-bg-1-white`}></div>
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
                    <div className={`navbar-light-wrap-white`}>
                      <div className="navbar-light"></div>
                    </div>
                  </motion.a>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;
