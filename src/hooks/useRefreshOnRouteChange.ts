"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useRefreshOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    // if ScrollTrigger isn't registered yet, skip
    if (!ScrollTrigger?.refresh) return;

    // refresh after route change
    const id = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120); // slightly safer delay

    return () => clearTimeout(id);
  }, [pathname]);
}
