"use client";

import React, { useState, useEffect } from "react";
import styles from "@/styles/orbit/OrbitingIcons.module.css";

export interface OrbitingCirclesPulseProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

function OrbitingCirclesPulse({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  isInView = true,
  ...props
}: OrbitingCirclesPulseProps & { isInView?: boolean }) {
  const calculatedDuration = duration / speed;

  const [positionOffsets, setPositionOffsets] = useState({
    top: "47.5%",
    left: "49%",
    cx: "50%",
    cy: "50%",
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPositionOffsets({
          top: "46%",
          left: "48%",
          cx: "52%",
          cy: "48.5%",
        });
      } else if (window.innerWidth < 1024) {
        setPositionOffsets({
          top: "46.5%",
          left: "48.5%",
          cx: "51.5%",
          cy: "50%",
        });
      } else if (window.innerWidth < 1537) {
        setPositionOffsets({
          top: "46.5%",
          left: "48.5%",
          cx: "51.5%",
          cy: "52%",
        });
      } else {
        setPositionOffsets({
          top: "47.5%",
          left: "49%",
          cx: "51%",
          cy: "52%",
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className={styles.orbitPath}
        >
          <circle
            cx={positionOffsets.cx}
            cy={positionOffsets.cy}
            r={radius}
            fill="none"
            stroke="rgb(0,0,0, 0.07)"
            strokeWidth="1"
          />
        </svg>
      )}

      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;

        return (
          <div
            style={
              {
                width: `${iconSize}px`,
                height: `${iconSize}px`,
                "--duration": `${calculatedDuration}s`,
                "--radius": `${radius}px`,
                "--angle": `${angle}deg`,
                animationDirection: reverse ? "reverse" : "normal",
                animationPlayState: isInView ? "running" : "paused",
                position: "absolute",
                top: positionOffsets.top,
                left: positionOffsets.left,
                transform: "translate(-50%, -50%)",
              } as React.CSSProperties
            }
            className={`${styles.orbitingItem} ${className || ""}`}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}

export default OrbitingCirclesPulse;
