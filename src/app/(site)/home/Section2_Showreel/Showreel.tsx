"use client"

import { useEffect, useRef, useState } from "react";
import type { Metadata } from "next";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitleBlock from "@/components/sectionsShared/SectionTitleBlock";
import VideoShowcase from "./VideoShowcase";
import "@/styles/showreel/root.css";
import "@/styles/showreel/Showreel.css";
import "@/styles/showreel/ViewAllWorkPopup.css";

export const metadata: Metadata = {
  title: "WebMaak — Development Navigation",
  description:
    "Temporary development navigation to access all pages during the build process.",
};


export default function RootDevelopmentPage() {

  const sectionRef = useRef<HTMLElement | null>(null);
  const [showVideoShowcase, setVideoShowcase] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoShowcase(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.3, 
      }
    );
  
    observer.observe(section);
  
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section data-theme="light" id="showreel" ref={sectionRef}>
        <SectionTitleBlock
          normal1="Crafted Projects"
          italic1="That Speak"
          normal2="Louder Than Words"
          description="Explore how we’ve turned ideas into digital experiences that elevate brands and drive growth"
          theme="light"
        />
        <div className={`app-container video-showcase ${
          showVideoShowcase ? "fade-in-showcase" : ""
        }`}>
          <VideoShowcase />
        </div>

        {/* View All Work Button */}
        <div className="view-all-work-container">
          <button className="view-all-btn" onClick={() => setPopupOpen(true)}>
            <div className="btn-bg-hover"></div>
            View All Work
            <svg 
              className="btn-arrow" 
              width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>

        {/* Work in Progress Popup */}
        <AnimatePresence>
          {isPopupOpen && (
            <motion.div 
              className="cooking-popup-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPopupOpen(false)}
            >
              <motion.div 
                className="cooking-popup-content"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="popup-emoji">🚧</div>
                <div className="popup-text-container">
                  <h3 className="popup-title">We’re cooking</h3>
                  <p className="popup-desc">This feature isn’t live yet. We are cooking something solid. Stay tuned.</p>
                </div>
                <button className="popup-close-btn" onClick={() => setPopupOpen(false)}>
                  Got it
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
