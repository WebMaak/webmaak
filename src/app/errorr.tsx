"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, RefreshCw, Home } from "lucide-react";
import ImageTrail from "@/components/ImageTrail/ImageTrail";
import styles from "@/styles/errorPage.module.css";
import "@/styles/variables.css";
import "@/styles/globals.css";

interface ErrorProps {
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  const [mode, setMode] = useState<"dark" | "light">("dark");
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
            Something went wrong
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.title}
          >
            An unexpected <br /> error occurred
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={styles.description}
          >
            We've encountered a glitch in the matrix. Don't worry, our team is
            on it. You can try refreshing the page or head back home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={styles.actions}
          >
            <button onClick={() => reset()} className={styles.primaryBtn}>
              <RefreshCw
                size={18}
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              Try Again
            </button>
            <Link href="/" className={styles.secondaryBtn}>
              <Home
                size={18}
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              Home
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
