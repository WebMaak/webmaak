"use client";

import { useEffect, useState } from "react";

export default function HydrationDelay({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Delay hydration by 1 second
    const timer = setTimeout(() => setHydrated(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!hydrated) return null; // nothing is rendered yet
  return <>{children}</>;
}
