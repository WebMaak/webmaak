"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ScrollProgress } from "./ScrollProgress";

export const ScrollProgressPortal = () => {
  const [mounted, setMounted] = useState(false);

  // Only render portal after component is mounted (client-side)
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <ScrollProgress className="h-[2px] z-[2147483647] bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300" />,
    document.body
  );
};
