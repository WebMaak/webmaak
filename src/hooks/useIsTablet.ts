"use client";

import { useEffect, useState } from "react";

export const useIsTablet = (): boolean => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsTablet(window.innerWidth < 1024);
    };

    checkWidth(); // run on mount
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);

  return isTablet;
};
