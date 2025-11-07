// Loader 1 previous version (not using useRouter)
// "use client";
// import Script from "next/script";
// import styles from "./Loader.module.css";
// export default function Loader() {
//   return (
//     <>
//       <div id="preloader" className={styles.preloader}>
//         <video
//           src="/loader.mp4"
//           className={styles.loader}
//           autoPlay
//           muted
//           loop
//           playsInline
//         />
//       </div>
//       {/* 🔹 Script to hide loader safely */}
//       <Script id="remove-preloader" strategy="afterInteractive">
//         {`
//           (function() {
//             const loader = document.getElementById("preloader");
//             if (!loader) return;
//             function hideLoader() {
//               if (!loader || loader.dataset.hidden === "true") return;
//               loader.dataset.hidden = "true";
//               loader.style.opacity = "0";
//               setTimeout(() => {
//                 loader.style.display = "none";
//               }, 500);
//             }
//             if (document.readyState === "complete") {
//               hideLoader();
//             } else {
//               window.addEventListener("load", hideLoader, { once: true });
//             }
//           })();
//         `}
//       </Script>
//     </>
//   );
// }

// Loader 2 currently using
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./Loader.module.css";
export default function Loader() {
  const router = useRouter();

  useEffect(() => {
    const loader = document.getElementById("preloader");
    if (!loader) return;

    const hideLoader = () => {
      if (loader.dataset.hidden === "true") return;
      loader.dataset.hidden = "true";
      loader.style.opacity = "0";
      setTimeout(() => (loader.style.display = "none"), 500);
    };
    // When full page finishes loading (first visit)
    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader, { once: true });
    }
    // Handle route changes (Next.js internal navigation)
    router.events?.on("routeChangeStart", () => {
      loader.style.display = "flex";
      loader.style.opacity = "1";
      loader.dataset.hidden = "false";
    });
    router.events?.on("routeChangeComplete", hideLoader);
    router.events?.on("routeChangeError", hideLoader);
    return () => {
      router.events?.off("routeChangeStart", () => {});
      router.events?.off("routeChangeComplete", hideLoader);
      router.events?.off("routeChangeError", hideLoader);
      window.removeEventListener("load", hideLoader);
    };
  }, [router]);
  return (
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
  );
}
