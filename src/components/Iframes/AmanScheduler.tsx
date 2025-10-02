"use client";

import { useEffect } from "react";

export default function AmanScheduler() {
  useEffect(() => {
    // Dynamically inject Cal.com script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.Cal) {
        // Initialize namespace
        window.Cal("init", "30min", { origin: "https://app.cal.com" });

        window.Cal.ns["30min"]("inline", {
          elementOrSelector: "#my-cal-inline-30min",
          config: { layout: "month_view", theme: "auto" },
          calLink: "aman-ali/30min",
        });

        window.Cal.ns["30min"]("ui", {
          cssVarsPerTheme: {
            light: { "cal-brand": "#0175e4" },
            dark: { "cal-brand": "#0175e4" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Optional cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
    <div
      id="my-cal-inline-30min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
    ></div>
    <style jsx global>{`
  #my-cal-inline-30min .text-subtle {
    display: none !important;
  }
`}</style>
    </>
  );
}
