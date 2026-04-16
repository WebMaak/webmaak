"use client";

import React, { useEffect, useRef } from "react";
import { Star, FallingStar } from "./types";
import "@/styles/navbar/StarBackground.css";

const StarBackground: React.FC<{ isActive: boolean; reducedDensity?: boolean }> = ({
  isActive,
  reducedDensity = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let fallingStars: FallingStar[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      stars = [];
      const divisor = reducedDensity ? 12000 : 5800;
      const starCount = Math.floor(
        (window.innerWidth * window.innerHeight) / divisor,
      );
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.2 + 0.1,
          // Increased speed by 50% (from 0.05+0.01 to 0.075+0.015)
          speed: Math.random() * 0.075 + 0.25,
          opacity: Math.random() * 0.7 + 0.3,
        });
      }
    };

    const createFallingStar = () => {
      const threshold = reducedDensity ? 0.998 : 0.993;
      if (Math.random() > threshold) {
        // Slightly adjusted frequency for sparser sky
        const angle = Math.PI / 4 + (Math.random() * 0.2 - 0.1);
        fallingStars.push({
          x: Math.random() * canvas.width * 1.2,
          y: Math.random() * -100,
          length: Math.random() * 180 + 100,
          // Increased speed by 50% (from 8+5 to 12+7.5)
          speed: Math.random() * 12 + 7.5,
          opacity: 1,
          angle: angle,
          width: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height) star.y = 0;
      });

      createFallingStar();
      fallingStars = fallingStars.filter((fs) => fs.opacity > 0);

      fallingStars.forEach((fs) => {
        const dx = Math.cos(fs.angle + Math.PI / 2) * fs.length;
        const dy = Math.sin(fs.angle + Math.PI / 2) * fs.length;

        ctx.save();
        const gradient = ctx.createLinearGradient(
          fs.x,
          fs.y,
          fs.x + dx,
          fs.y - dy,
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${fs.opacity})`);
        gradient.addColorStop(0.3, `rgba(56, 189, 248, ${fs.opacity * 0.7})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = fs.width;
        ctx.lineCap = "round";

        ctx.beginPath();
        ctx.moveTo(fs.x, fs.y);
        ctx.lineTo(fs.x + dx, fs.y - dy);
        ctx.stroke();

        // Lead glow
        const glow = ctx.createRadialGradient(
          fs.x,
          fs.y,
          0,
          fs.x,
          fs.y,
          fs.width * 5,
        );
        glow.addColorStop(0, `rgba(255, 255, 255, ${fs.opacity})`);
        glow.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(fs.x, fs.y, fs.width * 5, 0, Math.PI * 2);
        ctx.fill();

        const vx = Math.cos(fs.angle + Math.PI / 2) * fs.speed;
        const vy = Math.sin(fs.angle + Math.PI / 2) * fs.speed;

        fs.x -= vx;
        fs.y += vy;
        // Faster fade for faster movement
        fs.opacity -= 0.018;
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedDensity]);

  return (
    <div className={`star-canvas-container ${isActive ? "is-open" : ""}`}>
      <canvas ref={canvasRef} className="star-canvas" />
    </div>
  );
};

export default StarBackground;
