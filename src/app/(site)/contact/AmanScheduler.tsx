"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import "./schedulers.css";

export default function AmanScheduler() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "30min",
      });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#0175e4" },
          dark: { "cal-brand": "#0175e4" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div className="cursor-cal-wrapper">
      <Cal
        namespace="30min"
        calLink="aman-ali/30min"
        style={{ width: "100%", height: "100%" }}
        config={{ layout: "month_view", theme: "dark" }}
      />
    </div>
  );
}
