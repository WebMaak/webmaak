"use client";

import React, { useEffect, useState, useRef } from "react";
import AmanScheduler from "./AmanScheduler";
import TalibScheduler from "./TalibScheduler";
import BookCallButton from "@/components/ui/BookCallButton";
import "./ContentArea.css";

interface ContentAreaProps {
  activeTab: string;
  onNavigate: (id: string) => void;
  openForm: (open: boolean) => void;
}

export const ContentArea: React.FC<ContentAreaProps> = ({
  activeTab,
  onNavigate,
  openForm,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayContent, setDisplayContent] = useState(activeTab);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | string>("auto");

  useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setHeight(entry.target.scrollHeight);
        }
      });
      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  useEffect(() => {
    // Start transition
    setIsTransitioning(true);

    // Update content after a short delay to allow for fade-out
    const contentTimer = setTimeout(() => {
      setDisplayContent(activeTab);
    }, 150);

    // End transition state after content has had time to mount
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(transitionTimer);
    };
  }, [activeTab]);

  const overviewCards = [
    {
      id: "WEBAPPS",
      title: "Web Apps",
      desc: "Modern engineering for web platforms.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
    },
    {
      id: "MEDIA",
      title: "Media Editing",
      desc: "Cinematic visual storytelling & production.",
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
    {
      id: "MARKETING",
      title: "Digital Marketing",
      desc: "Strategic growth and data-backed scale.",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
    },
  ];

  return (
    <div
      className="content-area-root"
      style={{ height: typeof height === "number" ? `${height}px` : height }}
    >
      <div ref={contentRef} className="content-area-inner">
        {/* Header Section */}
        <div className="content-header">
          <div className="content-header-left">
            <div className="header-labels">
              <span className="header-tagline">
                {displayContent === "OVERVIEW" ? "Webmaak" : displayContent}
              </span>
              <h2 className="header-title">
                {displayContent === "OVERVIEW"
                  ? "Explore Webapps & Media"
                  : `Exploring ${displayContent.toLowerCase()}`}
              </h2>
            </div>
          </div>
          <div className="content-header-right">
            {displayContent !== "OVERVIEW" && (
              <button
                onClick={() => onNavigate("OVERVIEW")}
                className="back-button"
              >
                <svg
                  className="back-icon"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                BACK
              </button>
            )}
            <div className="getAQuote" onClick={() => openForm(true)}>
              <BookCallButton txt="Get a Quote" radius={true} />
              {/* <span>Get a Quote</span>
              <ArrowUpRight className="arrow-icon" /> */}
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div
          className={`content-body ${isTransitioning ? "content-body-transition" : ""}`}
        >
          {displayContent === "OVERVIEW" ? (
            <div className="grid-container">
              {overviewCards.map((card, idx) => {
                const isDisabled = card.id === "MARKETING";

                return (
                  <div
                    key={card.id}
                    onClick={
                      !isDisabled
                        ? () => {
                            console.log("Navigating to:", card.id);
                            onNavigate(card.id);
                          }
                        : undefined
                    }
                    className={`card-root ${isDisabled ? "card-disabled" : ""}`}
                  >
                    {/* Premium Tilted Diagonal Shimmer */}
                    <div className="shimmer-container">
                      <div
                        className="shimmer-element"
                        style={{ animationDelay: `${idx * 0.15}s` }}
                      />
                    </div>

                    {/* Premium Border Highlight */}
                    <div className="card-border-highlight" />

                    {/* Icon Container */}
                    <div className={`icon-container ${card.bg} ${card.color}`}>
                      <svg
                        className="card-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d={card.icon}
                        />
                      </svg>
                    </div>

                    <h3 className="card-title">{card.title}</h3>

                    <p className="card-desc">{card.desc}</p>

                    <div className="card-cta">
                      View
                      <svg
                        className="cta-icon"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="calendly-wrapper">
              <div className="calendly-card">
                {displayContent === "WEBAPPS" && <TalibScheduler />}
                {displayContent === "MEDIA" && <AmanScheduler />}
                {displayContent !== "WEBAPPS" && displayContent !== "MEDIA" && (
                  <iframe
                    src="https://calendly.com/acme-corp/meeting?hide_landing_page_details=1&hide_gdpr_banner=1&primary_color=4f46e5"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="Schedule a Call"
                    className="calendly-iframe"
                  ></iframe>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
