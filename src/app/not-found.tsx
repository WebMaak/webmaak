"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, ArrowLeft, Home } from "lucide-react";
import styles from "@/styles/errorPage.module.css";
import "@/styles/variables.css";
import "@/styles/globals.css";

import ImageTrail from "@/components/ImageTrail/ImageTrail";

export default function NotFound() {
  const [mode, setMode] = useState<"dark" | "light">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className={`${styles.wrapper} ${styles[mode]}`}>
      <div className={styles.noiseOverlay} />
      <div className={styles.meshGradient} />
      <ImageTrail />

      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className={styles.modeToggle}
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        aria-label="Toggle color mode"
      >
        <AnimatePresence mode="wait">
          {mode === "dark" ? (
            <motion.div
              key="moon"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Moon />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              <Sun />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      <div className={styles.overlay}>
        <div className={styles.content}>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.eyebrow}
          >
            Lost in the digital void?
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.title}
          >
            404 PAGE NOT FOUND
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.description}
          >
            The page you're looking for was moved, renamed, or never existed in
            the first place. Let's get you back on track.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={styles.actions}
          >
            <a href="/work" className={styles.primaryBtn}>
              <ArrowLeft
                size={18}
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              View Our Work
            </a>

            <a href="/" className={styles.secondaryBtn}>
              <Home
                size={18}
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              Back Home
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
