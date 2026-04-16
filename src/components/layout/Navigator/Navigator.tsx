"use client";
import { useEffect, useState } from "react";
import styles from "@/styles//navigator/Navigator.module.css";
import {
  Home,
  Lightbulb,
  Clapperboard,
  Code2,
  SquareChartGantt,
  Presentation,
  // ChartNoAxesCombined,
  Headset,
  Handshake,
  Quote,
  BringToFront,
  Link as LinkIcon,
} from "lucide-react";

const sections = [
  { id: "section1", icon: <Home size={20} />, label: "Home" },
  { id: "process", icon: <Lightbulb size={24} />, label: "Ideas" },
  {
    id: "showreel",
    icon: <Presentation size={20} />,
    label: "Crafted Projects",
  },
  { id: "it-services", icon: <Code2 size={20} />, label: "IT / Web Apps" },
  {
    id: "media-services",
    icon: <Clapperboard size={20} />,
    label: "Media / Edits",
  },
  // {
  //   id: "section9",
  //   icon: <ChartNoAxesCombined size={20} />,
  //   label: "Marketing / Ads",
  // },
  { id: "services", icon: <SquareChartGantt size={20} />, label: "Services" },
  { id: "tech-stack", icon: <BringToFront size={20} />, label: "Tech Stack" },
  {
    id: "clients",
    icon: <Handshake size={20} />,
    label: "Trusted by Clients",
  },
  { id: "testimonials", icon: <Quote size={20} />, label: "Testimonial" },
  { id: "contact", icon: <Headset size={20} />, label: "Contact" },
  // { id: "section7", icon: <LinkIcon size={20} />, label: "Footer" },
];

export default function Navigator() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [activeTheme, setActiveTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let current: string | null = null;
          let theme: "light" | "dark" = "light";

          // Select all sections with id or data-theme
          const allSections =
            document.querySelectorAll<HTMLElement>("[id], [data-theme]");

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
    } else if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
  };

  return (
    <>
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
    </>
  );
}
