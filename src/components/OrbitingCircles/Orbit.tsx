import React from "react";
import styles from "./Orbit.module.css";

// Techstack icons
const techstackIcons = [
  "/tech-stack/icon-2.png",
  "/tech-stack/icon-2.png",
  "/tech-stack/icon-2.png",
  "/tech-stack/icon-2.png",
  "/tech-stack/icon-2.png",
  "/tech-stack/icon-2.png",
];

// Orbit configuration
const orbitData = [
  { size: 2, duration: 10000 },
  { size: 3, duration: 15000 },
  { size: 4, duration: 20000 },
  { size: 5, duration: 25000 },
  { size: 6, duration: 30000 },
  { size: 7, duration: 35000 },
];

const OrbitingOrbits: React.FC = () => {
  return (
    <div className={styles.orbitsWrapper}>
      <div className={styles.planet}>
        <img src="/tech-stack/icon-3.png" alt="planet" />
      </div>

      {orbitData.map((orbit, index) => {
        // Pick an icon from techstackIcons array cyclically
        const icon = techstackIcons[index % techstackIcons.length];

        return (
          <div
            key={index}
            className={styles.orbit}
            style={{ "--size": orbit.size, "--duration": orbit.duration } as React.CSSProperties}
          >
            <div className={styles.satellite}>
              <img src={icon} alt={`satellite-${index}`} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrbitingOrbits;