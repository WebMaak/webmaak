"use client";

import Script from "next/script";
import styles from "./Loader.module.css"
import Image from "next/image";

export default function Loader() {
  return (
    <>
      {/* 🔹 Preloader */}
      <div id="preloader" className={`hidden ${styles.preloader}`}>
        <div className="hero-bg">
                <img
                  src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6624ea07d7c146d72463727e_green-line-mobile.webp"
                  loading="lazy"
                  sizes="100vw"
                  srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6624ea07d7c146d72463727e_green-line-mobile-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6624ea07d7c146d72463727e_green-line-mobile-p-800.png 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6624ea07d7c146d72463727e_green-line-mobile-p-1080.png 1080w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6624ea07d7c146d72463727e_green-line-mobile.webp 1213w"
                  alt=""
                  className="hero-bg_gradient-lines-mobile animation"
                />
            <img
                src="./hero-bg.JPG"
                 loading="lazy"
                 sizes="100vw"
                 srcset="./hero-bg.JPG 500w, ./hero-bg.JPG 1440w"
                 alt=""
                 className="contact_desktop-bg"
            />   
        </div>
        <p className={styles.loader}>
          <span>Webmaak</span>
        </p>
      </div>
      <div id="preloader" className={styles.preloader}>
        <Image
          src="/loader.gif"
          alt="Loading..."
          className={styles.loader}
          width={500}
          height={500}
          unoptimized
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
