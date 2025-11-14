"use client";
import React from "react";
import { cn } from "@/app/lib/utils";

type SpinningTextProps = {
  children: string | string[];
  className?: string;
  reverse?: boolean;
  fontSize?: number;
  radius?: number;
  duration?: number;
  style?: React.CSSProperties;
};

export function SpinningText({
  children,
  className,
  reverse = false,
  fontSize = 16,
  radius = 5,
  duration = 20,
  style,
}: SpinningTextProps) {
  if (typeof children !== "string" && !Array.isArray(children)) {
    throw new Error("children must be a string or an array of strings");
  }

  const text = Array.isArray(children) ? children.join("") : children;
  const letters = text.split("");
  letters.push(" ");

  return (
    <div
      className={cn("relative spinning-text", className)}
      style={{
        ...style,
        animation: `spin ${duration}s linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {letters.map((letter, index) => (
        <span
          key={`${index}-${letter}`}
          aria-hidden="true"
          className="absolute hidden lg:block left-1/2 top-1/2 text-white font-semibold uppercase spinning-letter"
          style={
            {
              "--i": index,
              "--total": letters.length,
              "--r": radius,
              fontSize,
            } as any
          }
        >
          {letter}
        </span>
      ))}

      <span className="sr-only">{text}</span>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .spinning-letter {
          transform: translate(-50%, -50%)
            rotate(calc(360deg / var(--total) * var(--i)))
            translateY(calc(var(--r) * -1ch));
          transform-origin: center;
          letter-spacing: 2px;
          font-weight: 400;
          text-shadow: 0 4px 10px rgba(65, 121, 225, 0.77);
        }
      `}</style>
    </div>
  );
}
