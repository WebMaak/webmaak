"use client"; // Next.js 14+ for client-only components

import React, { useState, useRef, useEffect } from "react";
import { FiVolume2, FiVolumeX } from "react-icons/fi";
import dynamic from "next/dynamic";
import "./SecondSection.css";

// Dynamically import react-youtube to avoid SSR issues
const YouTube = dynamic(() => import("react-youtube"), { ssr: false });

const tabsData = [
  {
    id: 0,
    name: "Porsche",
    logo: "./case-studies/porsche.png",
    videoId: "5LS7dZQ1pEM",
    title: "Porsche Landing Page",
    tags: ["Figma Design", "SEO Optimized", "Wordpress Development"],
    buttonText: "More on Youtube",
    buttonLink: "https://www.youtube.com/@web-xx6hs",
  },
  {
    id: 1,
    name: "My Happy Space",
    logo: "./case-studies/my-happy-space.png",
    videoId: "D54HZwgu66M",
    title: "My Happy Space",
    tags: ["Figma Design", "Wordpress Development"],
    buttonText: "More on Youtube",
    buttonLink: "https://www.youtube.com/@web-xx6hs",
  },
  {
    id: 2,
    name: "Hyperverge",
    logo: "./case-studies/delfyle.png",
    videoId: "dQw4w9WgXcQ",
    title: "Hyperverge",
    tags: ["Visual Design", "Webflow Development"],
    buttonText: "More on Youtube",
    buttonLink: "https://www.youtube.com/@web-xx6hs",
  },
  {
    id: 3,
    name: "Crux",
    logo: "./case-studies/porsche.png",
    videoId: "tgbNymZ7vqY",
    title: "Crux",
    tags: ["Visual Design", "Webflow Development"],
    buttonText: "More on Youtube",
    buttonLink: "https://www.youtube.com/@web-xx6hs",
  },
  {
    id: 4,
    name: "Zuddl",
    logo: "./case-studies/my-happy-space.png",
    videoId: "3JZ_D3ELwOQ",
    title: "Zuddl",
    tags: ["Visual Design", "Webflow Development"],
    buttonText: "More on Youtube",
    buttonLink: "https://www.youtube.com/@web-xx6hs",
  },
];
const CaseStudiesDM = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true); // track mute state
  const playerRef = useRef(null);
  const progressInterval = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setVideoProgress(0);

    // Stop previous video safely
    if (playerRef.current?.pauseVideo) {
      playerRef.current.pauseVideo();
    }
  };

  const onPlayerReady = (event) => {
  playerRef.current = event.target;

  // Force highest quality
  playerRef.current.setPlaybackQuality("highres");

  try {
    playerRef.current.playVideo(); // autoplay
  } catch (e) {
    console.warn("Autoplay failed", e);
  }
};


  const onPlayerStateChange = (event) => {
    clearInterval(progressInterval.current);

    if (event.data === 1) {
      // playing
      const duration = event.target.getDuration();
      progressInterval.current = setInterval(() => {
        if (playerRef.current) {
          const currentTime = playerRef.current.getCurrentTime();
          setVideoProgress((currentTime / duration) * 100);
        }
      }, 500);
    }
  };

  const handleVideoEnd = () => {
    setActiveTab((prev) => (prev + 1) % tabsData.length);
  };

  const toggleMute = () => {
    if (!playerRef.current) return;

    if (isMuted) {
      playerRef.current.unMute();
      playerRef.current.setVolume(40); // fixed 50%
    } else {
      playerRef.current.mute();
    }

    setIsMuted(!isMuted);
  };

  const togglePlay = () => {
  if (!playerRef.current) return;

  if (playing) {
    playerRef.current.pauseVideo(); // pause
  } else {
    playerRef.current.playVideo();  // resume
  }

  setPlaying(!playing); // toggle state
};


  setInterval(() => {
  if (playerRef.current && playerRef.current.getPlaybackQuality() !== "highres") {
    playerRef.current.setPlaybackQuality("highres");
  }
}, 2000);
  


  useEffect(() => {
    return () => clearInterval(progressInterval.current);
  }, []);

  return (
    <div className="tab-wrapper">
      <div className="home-case-studies_tabs">
        <div className="home-case-studies_tabs-content">
          {tabsData.map((tab) => (
            <div
              key={tab.id}
              className="home-case-studies_tab-pane-wrap w-tab-pane"
              role="tabpanel"
              aria-labelledby={`w-tabs-0-data-w-tab-${tab.id}`}
              style={{
                display: activeTab === tab.id ? "flex" : "none",
                flexDirection: "column",
                position: "relative",
                width: "100%",
              }}
            >
              <div className="home-case_studies_tab-pane" style={{ flex: 1 }}>
                <div
                  className="home-case_studies_image video-copy"
                  style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
                >
                  {activeTab === tab.id && (
                    <YouTube
                    videoId={tab.videoId}
                    opts={{
                        width: "100%",
                        height: "100%",
                        playerVars: { 
                        autoplay: 1,
                        modestbranding: 0, // removes small YouTube logo
                        controls: 0,       // hides play/pause bar
                        disablekb: 1,      // disables keyboard shortcuts
                        rel: 0,            // disables related videos at the end
                        showinfo: 0,       // legacy, but used sometimes
                        fs: 0,             // disables fullscreen button
                        iv_load_policy: 3, // hides annotations
                        mute: 1,
                      },
                    }}
                    onReady={onPlayerReady}
                    onStateChange={onPlayerStateChange}
                    onEnd={handleVideoEnd}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                    }}
                    />

                  )}
                </div>

                <div className="home-case-studies_overlay hover-visibility">
                  
                </div>

                <div className="home-case-studies_detail-row hover-visibility-content">
                  <div className="home-case-studies_detail-left">
                    <h3 className="home-case-studies_title">{tab.title}</h3>
                    <div className="home-case-studies_detail-tag-wrapper">
                      {tab.tags.map((tag, idx) => (
                        <div key={idx} className="home-case-studies_detail-tag">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="home-case-studies_button hover-visibility-content">
                    <button className="mute-toggle-btn" onClick={toggleMute}>
                      {isMuted ? <FiVolumeX size={24} color="black"/> : <FiVolume2 size={24} color="black"/>}
                    </button>
                    <a
                      onClick={togglePlay}
                      className="button-link w-inline-block"
                    >
                      <button className="secondary-button" style={{ padding: "0.75rem 1.5rem" }}>
                       <div className="secondary-btn-text flex align-center gap-2 justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="21"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide"
                        >
                          {playing ? (
                            // Pause icon
                            <>
                              <rect x="14" y="3" width="5" height="18" rx="1" />
                              <rect x="5" y="3" width="5" height="18" rx="1" />
                            </>
                          ) : (
                            // Play icon
                            <path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" />
                          )}
                        </svg>

                        {playing ? "Pause" : "Play"}
                      </div>

                      </button>
                    </a>
                    <a
                      href={tab.buttonLink}
                      className="button-link w-inline-block"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="secondary-button" style={{ padding: "0.75rem 1.5rem" }}>
                        <div className="secondary-btn-text">{tab.buttonText}</div>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs menu */}
        <div className="home-case-studies_tabs-menu w-tab-menu" role="tablist">
          {tabsData.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              className={`home-case-studies-tab w-inline-block w-tab-link ${
                activeTab === tab.id ? "w--current" : ""
              }`}
              onClick={() => handleTabClick(tab.id)}
              style={{ background: "none", border: "none", padding: 0, outline: "none" }}
            >
              <img
                src={tab.logo}
                alt={tab.name}
                className="home-case-studies_tab-image"
                style={{ opacity: activeTab === tab.id ? 1 : 0.8 }}
              />
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="home-case-study_progress-bar-wrap">
          <div className="home-case-study_progress-bar-back">
            <div
              className="home-case-study_progress-bar-color"
              style={{ width: `${videoProgress}%`, transition: "width 0.2s linear" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesDM;