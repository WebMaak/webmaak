// "use client";

// import React, { useRef, useEffect, useState } from "react";
// import "./GlassTabs.css";

// interface Tab {
//   id: string;
//   label: string;
//   icon: React.ReactNode;
// }

// interface GlassTabsProps {
//   tabs: Tab[];
//   activeId: string;
//   onChange: (id: string) => void;
// }

// export const GlassTabs: React.FC<GlassTabsProps> = ({
//   tabs,
//   activeId,
//   onChange,
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [indicator, setIndicator] = useState({ left: 0, width: 0 });

//   useEffect(() => {
//     const updateIndicator = () => {
//       const activeBtn = containerRef.current?.querySelector(
//         `[data-id="${activeId}"]`,
//       ) as HTMLElement;
//       if (activeBtn) {
//         setIndicator({
//           left: activeBtn.offsetLeft,
//           width: activeBtn.offsetWidth,
//         });
//       }
//     };

//     updateIndicator();
//     window.addEventListener("resize", updateIndicator);
//     return () => window.removeEventListener("resize", updateIndicator);
//   }, [activeId]);

//   return (
//     <div className="tabs-outer-container">
//       <div ref={containerRef} className="tabs-inner-container no-scrollbar">
//         {/* Morphing Indicator */}
//         <div
//           className="tabs-indicator"
//           style={{
//             left: `${indicator.left}px`,
//             width: `${indicator.width}px`,
//           }}
//         />

//         {/* Tabs */}
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             data-id={tab.id}
//             onClick={() => onChange(tab.id)}
//             className={`tab-button ${activeId === tab.id ? "tab-button-active" : ""}`}
//           >
//             <span
//               className={`tab-icon ${activeId === tab.id ? "tab-icon-active" : ""}`}
//             >
//               {tab.icon}
//             </span>
//             {tab.label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

"use client";

import React, { useCallback, useLayoutEffect, useRef } from "react";
import "./GlassTabs.css";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface GlassTabsProps {
  tabs: Tab[];
  activeId: string;
  onChange: (id: string) => void;
}

export const GlassTabs: React.FC<GlassTabsProps> = ({
  tabs,
  activeId,
  onChange,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const updateIndicator = useCallback(() => {
    const container = containerRef.current;
    const indicator = indicatorRef.current;
    if (!container || !indicator) return;

    const activeBtn = container.querySelector(
      `[data-id="${activeId}"]`,
    ) as HTMLElement | null;
    if (!activeBtn) return;

    // If the tab row is horizontally scrolled, offsetLeft doesn't include scrollLeft.
    const left = activeBtn.offsetLeft - container.scrollLeft;
    const width = activeBtn.offsetWidth;

    indicator.style.width = `${width}px`;
    indicator.style.transform = `translate3d(${left}px, 0, 0)`;
  }, [activeId]);

  useLayoutEffect(() => {
    updateIndicator();

    const container = containerRef.current;
    if (!container) return;

    // Keep indicator aligned on scroll / resize / font load shifts.
    const onScroll = () => updateIndicator();
    container.addEventListener("scroll", onScroll, { passive: true });

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => updateIndicator());
      ro.observe(container);
      const btns = container.querySelectorAll("button[data-id]");
      btns.forEach((b) => ro?.observe(b));
    } else {
      window.addEventListener("resize", updateIndicator);
    }

    return () => {
      container.removeEventListener("scroll", onScroll);
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", updateIndicator);
    };
  }, [updateIndicator]);

  return (
    <div className="tabs-outer-container">
      <div ref={containerRef} className="tabs-inner-container no-scrollbar">
        {/* Indicator */}
        <div ref={indicatorRef} className="tabs-indicator" />

        {tabs.map((tab) => {
          const isMarketing = tab.id === "MARKETING";

          return (
            <button
              key={tab.id}
              data-id={tab.id}
              disabled={isMarketing}
              onClick={!isMarketing ? () => onChange(tab.id) : undefined}
              className={`tab-button
        ${activeId === tab.id ? "tab-button-active" : ""}
        ${isMarketing ? "tab-button-disabled" : ""}
      `}
            >
              <span
                className={`tab-icon ${
                  activeId === tab.id ? "tab-icon-active" : ""
                }`}
              >
                {tab.icon}
              </span>
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
