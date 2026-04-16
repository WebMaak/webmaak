"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import "@/styles/loader/RouteLoader.css";

export default function RouteLoader() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);

    // Hide loader AFTER next paint
    const raf = requestAnimationFrame(() => {
      setActive(false);
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  if (!active || pathname.startsWith("/legal")) return null;

  return (
    <div className="route-loader">
      <div className="route-loader-inner">
        <video autoPlay loop muted playsInline width={120} height={120}>
          <source
            src="https://res.cloudinary.com/dsvgjs1qb/video/upload/v1772193888/loader-ezgif.com-video-to-gif-converter_wq4lg0.webm"
            type="video/webm"
          />
          <source
            src="https://res.cloudinary.com/dsvgjs1qb/video/upload/v1772193888/loader-ezgif.com-video-to-gif-converter_wq4lg0.mp4"
            type="video/mp4"
          />
        </video>
        <p>Loading page…</p>
      </div>
    </div>
  );
}
