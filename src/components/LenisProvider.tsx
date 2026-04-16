"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    __lenis: Lenis | undefined;
  }
}

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // Exclude certain routes from smooth scroll
    const excludedRoutes = ["/work", "/personal@work"];
    const isExcluded = excludedRoutes.some((route) =>
      pathname.startsWith(route)
    );

    if (isExcluded) {
      if (window.__lenis) {
        window.__lenis.destroy();
        window.__lenis = undefined;
      }
      return;
    }

    const lenis = new Lenis({
      smooth: true,
      smoothTouch: true,
      lerp: 0.08,
      duration: 1.2,
      direction: "vertical",
      gestureDirection: "vertical",
      wheelMultiplier: 1.2,
      touchMultiplier: 1.1,
      normalizeWheel: true,
    });

    window.__lenis = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.__lenis = undefined;
    };
  }, [pathname]);

  return <>{children}</>;
}
