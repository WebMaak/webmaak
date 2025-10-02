"use client";
import { useEffect, useState } from "react";
import styles from "./Navigator.module.css";
import {
  Home,
  Lightbulb,
  PlayCircle,
  Layers,
  Grid,
  Cpu,
  Link as LinkIcon,
} from "lucide-react";

const sections = [
  { id: "section1", icon: <Home size={20} />, label: "Home" },
  { id: "section2", icon: <Lightbulb size={24} />, label: "Ideas" },
  { id: "section3", icon: <PlayCircle size={20} />, label: "Ads / Videos" },
  { id: "section4", icon: <Layers size={20} />, label: "Services" },
  { id: "section5", icon: <Grid size={20} />, label: "Projects" },
  { id: "section6", icon: <Cpu size={20} />, label: "Tech Stack" },
  { id: "section7", icon: <LinkIcon size={20} />, label: "Footer" },
];

export default function Navigator() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeTheme, setActiveTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let current: string | null = null;
          let theme: "light" | "dark" = "light";

          // Select all sections with id or data-theme
          const allSections = document.querySelectorAll<HTMLElement>(
            "[id], [data-theme]"
          );

          allSections.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;

            if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
              // Update theme if data-theme exists
              const sectionTheme = el.getAttribute("data-theme") as
                | "light"
                | "dark"
                | null;
              if (sectionTheme) theme = sectionTheme;

              // Update active section only if id is in sections array
              const id = el.getAttribute("id");
              if (id && sections.find((sec) => sec.id === id)) {
                current = id;
              }
            }
          });

          if (current) setActiveSection(current);
          setActiveTheme(theme);

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (id === "section1") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    else if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
  };

  return (
    <div className={`${styles.navigator} ${styles[activeTheme]}`}>
      {sections.map((sec) => {
        const isActive = activeSection === sec.id;

        return (
          <div
            key={sec.id}
            className={`${styles.navItem} ${isActive ? styles.active : ""}`}
            onClick={() => handleClick(sec.id)}
          >
            <div className={styles.icon}>{sec.icon}</div>
            <span
              className={`${styles.label} ${
                isActive ? styles.showLabel : ""
              } ${styles[activeTheme]}`}
            >
              {sec.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
