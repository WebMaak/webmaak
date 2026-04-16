// "use client";

// import { motion, useMotionValue } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import styles from "./ScrollableProjects.module.css";
// import ProjectCard, { Project } from "./ProjectCard";

// interface Props {
//   projects: Project[];
// }

// export default function ScrollableProjects({ projects }: Props) {
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const x = useMotionValue(0);

//   const [constraints, setConstraints] = useState({ left: 0, right: 0 });

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const container = containerRef.current;
//     const scrollWidth = container.scrollWidth;
//     const clientWidth = container.clientWidth;

//     setConstraints({
//       left: -(scrollWidth - clientWidth),
//       right: 0,
//     });
//   }, [projects]);

//   return (
//     <div className={styles.wrapper}>
//       <motion.div
//         ref={containerRef}
//         className={styles.track}
//         drag="x"
//         dragConstraints={constraints}
//         dragElastic={0.08}
//         dragMomentum={true}
//         style={{ x }}
//         whileTap={{ cursor: "grabbing" }}
//       >
//         {projects.map((project) => (
//           <ProjectCard key={project.id} project={project} />
//         ))}
//       </motion.div>
//     </div>
//   );
// }

"use client";

import { motion, useMotionValue, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "@/styles/services/ScrollableProjects.module.css";
import ProjectCard, { Project } from "./ProjectCard";

interface Props {
  projects: Project[];
}

/* Parent: controls delay + stagger */
const trackVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.5, // ✅ 1s delay
      staggerChildren: 0.15, // ✅ stagger
    },
  },
};

/* Child: fade-up */
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // easeOut (TS-safe)
    },
  },
};

export default function ScrollableProjects({ projects }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);

  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    setConstraints({
      left: -(scrollWidth - clientWidth),
      right: 0,
    });
  }, [projects]);

  return (
    <div className={styles.wrapper}>
      <motion.div
        ref={containerRef}
        className={styles.track}
        drag="x"
        dragConstraints={constraints}
        dragElastic={0.08}
        dragMomentum={true}
        whileTap={{ cursor: "grabbing" }}
        style={{ x }}
        /* Entrance animation */
        variants={trackVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
