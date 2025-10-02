import React from "react";

export interface OrbitingCirclesProps
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

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;

  return (
    <>
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
            cx="50.7%"
            cy="52%"
            r={radius}
            fill="none"
            stroke="rgba(0,0,0,0.1)"
            strokeWidth="1"
          />
        </svg>
      )}

      {/* Orbiting Icons */}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / React.Children.count(children)) * index;

        return (
          <div
            style={{
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              "--duration": `${calculatedDuration}s`,
              "--radius": `${radius}px`,
              "--angle": `${angle}deg`,
              animationDirection: reverse ? "reverse" : "normal",
              position: "absolute",
              top: "47.5%",
              left: "49%",
              transform: "translate(-50%, -50%)", // centers the orbit origin
            } as React.CSSProperties}
            className={`flex items-center justify-center rounded-full animate-orbit ${className || ""}`}
            {...props}
          >
            {child}
          </div>

        );
      })}
    </>
  );
}
