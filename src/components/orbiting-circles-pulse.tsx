import React, { useState, useEffect } from "react";
import styles from "./orbiting.module.css";

export interface OrbitingCirclesPulseProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCirclesPulse({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesPulseProps) {
  const calculatedDuration = duration / speed;

  // ✅ Responsive top/left offsets
  const [positionOffsets, setPositionOffsets] = useState({
    top: "47.5%",
    left: "49%",
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // mobile
        setPositionOffsets({
          top: "46%",
          left: "48%",
          cx: "52%",
          cy: "48.5%",
        });
      } else if (window.innerWidth < 1024) {
        // tablet
        setPositionOffsets({
          top: "46.5%",
          left: "48.5%",
          cx: "51.5%",
          cy: "50%",
        });
      } else if (window.innerWidth < 1537) {
        // tablet
        setPositionOffsets({
          top: "46.5%",
          left: "48.5%",
          cx: "51.5%",
          cy: "51%",
        });
      } else {
        // desktop (original)
        setPositionOffsets({ top: "47.5%", left: "49%", cx: "50%", cy: "50%" });
      }
    };

    handleResize(); // initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100px",
          zIndex: 20,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,1), transparent)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px",
          zIndex: 20,
          background:
            "linear-gradient(to top, rgba(255,255,255,1), transparent)",
        }}
      ></div> */}
      {/* Orbit Path Circle */}
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <circle
            cx={positionOffsets.cx}
            cy={positionOffsets.cy}
            r={radius}
            fill="none"
            stroke="#fff"
            strokeWidth="1"
          />
        </svg>
      )}

      {/* Orbiting Icons */}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;

        return (
          <>
            <div
              style={
                {
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  "--duration": `${calculatedDuration}s`,
                  "--radius": `${radius}px`,
                  "--angle": `${angle}deg`,
                  animationDirection: reverse ? "reverse" : "normal",
                  position: "absolute",
                  top: positionOffsets.top,
                  left: positionOffsets.left,
                  transform: "translate(-50%, -50%)", // centers the orbit origin
                } as React.CSSProperties
              }
              className={`flex items-center justify-center rounded-full animate-orbit ${
                className || ""
              }`}
              {...props}
            >
              {child}
            </div>
          </>
        );
      })}
    </>
  );
}
