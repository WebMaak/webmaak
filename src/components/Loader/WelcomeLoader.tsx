"use client";
import { useEffect, useState } from "react";
import styles from "./WelcomeLoader.module.css";

export default function WelcomeLoader() {
  // ✅ How many times should it run? Change this to 1, 2, or 3.
  const WELCOME_LOADER_RUNS = 1;
  const [showLoader, setShowLoader] = useState(false);
  const [videoStarted, setVideoStarted] = useState(false);

  useEffect(() => {
    const runs = parseInt(localStorage.getItem("welcomeLoaderRuns") || "0", 10);

    if (runs < WELCOME_LOADER_RUNS) {
      setShowLoader(true);
      localStorage.setItem("welcomeLoaderRuns", String(runs + 1));
    }
  }, []);

  useEffect(() => {
    if (!showLoader) return;

    const startVideoOnClick = () => {
      const video = document.getElementById(
        "welcome-video"
      ) as HTMLVideoElement | null;
      if (!video) return;

      // enable sound & play after user interaction
      video.muted = false;
      video.play().then(() => {
        setVideoStarted(true);
      });

      // hide loader when video ends
      video.addEventListener(
        "ended",
        () => {
          const wrapper = document.getElementById("welcome-preloader");
          if (wrapper) {
            wrapper.style.opacity = "0";
            setTimeout(() => setShowLoader(false), 800);
          }
        },
        { once: true }
      );

      // remove listener after first click
      window.removeEventListener("click", startVideoOnClick);
    };

    // wait for user click to play
    window.addEventListener("click", startVideoOnClick);

    return () => {
      window.removeEventListener("click", startVideoOnClick);
    };
  }, [showLoader]);

  if (!showLoader) return null;

  return (
    <div id="welcome-preloader" className={styles.preloader}>
      {!videoStarted && (
        <div className={styles.clickPrompt}>Click on the ribbon</div>
      )}
      <video
        id="welcome-video"
        src="/welcome-loader.mp4" // 🎥 your video in /public
        className={styles.video}
        playsInline
        controls={false}
      />
    </div>
  );
}
