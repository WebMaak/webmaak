import React from "react";
import { motion } from "framer-motion";
import { ProjectVideo } from "./types";
import "@/styles/showreel/LogoBar.css";
import Image from "next/image";

interface LogoBarProps {
  projects: ProjectVideo[];
  activeProjectId: string;
  onProjectSelect: (project: ProjectVideo) => void;
}

const LogoBar: React.FC<LogoBarProps> = ({
  projects,
  activeProjectId,
  onProjectSelect,
}) => {
  return (
    <div className="logo-bar-container">
      <div className="logo-bar-card">
        <div className="logo-bar-flex">
          {projects.map((project) => {
            const isActive = activeProjectId === project.id;

            // Optimize logo URL
            const optimizedLogo = project.logo.includes("cloudinary.com")
              ? project.logo.replace("/upload/", "/upload/w_128,f_auto,q_auto/")
              : project.logo;

            return (
              <motion.button
                key={project.id}
                onClick={() => onProjectSelect(project)}
                whileTap={{ scale: 0.96 }}
                className={`logo-btn ${isActive ? "active" : ""}`}
              >
                <div
                  className={`logo-text-wrapper ${isActive ? "active" : ""}`}
                >
                  <Image
                    className="logo-image"
                    src={optimizedLogo}
                    alt={project.name}
                    width={100}
                    height={100}
                    style={{ objectFit: "contain" }}
                  />
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="selection-dot"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
