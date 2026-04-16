"use client";

import { useRefreshOnRouteChange } from "@/hooks/useRefreshOnRouteChange";

export default function ClientScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useRefreshOnRouteChange();
  return <>{children}</>;
}
