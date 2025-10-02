"use client";

import Script from "next/script";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <div id="preloader" className={styles.preloader}>
        <video
          src="/loader.mp4"
          className={styles.loader}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* 🔹 Script to hide loader safely */}
      <Script id="remove-preloader" strategy="afterInteractive">
        {`
          (function() {
            const loader = document.getElementById("preloader");
            if (!loader) return;

            function hideLoader() {
              if (!loader || loader.dataset.hidden === "true") return;
              loader.dataset.hidden = "true";
              loader.style.opacity = "0";
              setTimeout(() => {
                loader.style.display = "none";
              }, 500);
            }

            if (document.readyState === "complete") {
              hideLoader();
            } else {
              window.addEventListener("load", hideLoader, { once: true });
            }
          })();
        `}
      </Script>
    </>
  );
}
