"use client";

import React, { useEffect, useRef } from "react";
import "./SpaceBackground.css";

interface RealisticStar {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  pulsePhase: number;
  pulseSpeed: number;
  velocity: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  active: boolean;
}

const SpaceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<RealisticStar[]>([]);
  const shootingStars = useRef<ShootingStar[]>([]);
  const animationFrameId = useRef<number | null>(null);

  const initStars = (width: number, height: number) => {
    // Regular falling stars
    const starCount = Math.floor((width * height) / 3000);
    stars.current = Array.from({ length: starCount }, () => {
      const size =
        Math.random() < 0.9
          ? Math.random() * 0.4 + 0.1
          : Math.random() * 0.7 + 0.3;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        size: size,
        baseOpacity:
          size < 0.3 ? Math.random() * 0.3 + 0.1 : Math.random() * 0.5 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.01 + 0.005,
        velocity: size * 0.3 + 0.1,
        color: Math.random() > 0.8 ? "#cbd5e1" : "#ffffff",
      };
    });

    // Shooting stars pool
    shootingStars.current = Array.from({ length: 3 }, () => ({
      x: 0,
      y: 0,
      length: 0,
      speed: 0,
      opacity: 0,
      active: false,
    }));
  };

  const spawnShootingStar = (width: number, height: number) => {
    const star = shootingStars.current.find((s) => !s.active);
    if (!star) return;

    star.active = true;
    star.x = Math.random() * width;
    star.y = Math.random() * (height / 2);
    star.length = Math.random() * 100 + 50;
    star.speed = Math.random() * 15 + 10;
    star.opacity = 1;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars(canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const render = (time: number) => {
      const { width, height } = canvas;

      // Deep space base
      ctx.fillStyle = "#03060c";
      ctx.fillRect(0, 0, width, height);

      // Occasional shooting star trigger
      if (Math.random() < 0.005) {
        spawnShootingStar(width, height);
      }

      // Draw regular stars
      stars.current.forEach((star) => {
        star.y += star.velocity;
        if (star.y > height) {
          star.y = -5;
          star.x = Math.random() * width;
        }

        const pulse = Math.sin(time * 0.002 + star.pulsePhase) * 0.2 + 0.8;
        const opacity = star.baseOpacity * pulse;

        ctx.beginPath();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = opacity;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw shooting stars
      shootingStars.current.forEach((star) => {
        if (!star.active) return;

        star.x += star.speed;
        star.y += star.speed * 0.5;
        star.opacity -= 0.015;

        if (star.opacity <= 0 || star.x > width || star.y > height) {
          star.active = false;
        } else {
          const grad = ctx.createLinearGradient(
            star.x,
            star.y,
            star.x - star.length,
            star.y - star.length * 0.5,
          );
          grad.addColorStop(0, `rgba(255, 255, 255, ${star.opacity})`);
          grad.addColorStop(1, "rgba(255, 255, 255, 0)");

          ctx.beginPath();
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1;
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(star.x - star.length, star.y - star.length * 0.5);
          ctx.stroke();
        }
      });

      ctx.globalAlpha = 1;
      animationFrameId.current = requestAnimationFrame(render);
    };

    animationFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  return (
    <div className="space-bg-wrap">
      <canvas ref={canvasRef} className="canvas-el" />
      <div className="grain-noise"></div>
    </div>
  );
};

export default SpaceBackground;
