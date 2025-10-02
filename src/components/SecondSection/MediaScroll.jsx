// import { motion, useTransform, useScroll } from "framer-motion";
// import { useRef } from "react";
// import ProjectCards from "./ProjectCard";

// export default function Example() {
//   return (
//     <div className="bg-neutral-800">
//       <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll down
//         </span>
//       </div>
//       <HorizontalScrollCarousel />
//       <div className="flex h-48 items-center justify-center">
//         <span className="font-semibold uppercase text-neutral-500">
//           Scroll up
//         </span>
//       </div>
//     </div>
//   );
// }

// function HorizontalScrollCarousel() {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//   });

//   const x = useTransform(scrollYProgress, [0, 1], ["46%", "-46%"]);

//   return (
//     <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
//       <div className="sticky top-0 flex h-screen items-center overflow-hidden">
//         <motion.div style={{ x }} className="">
//           {/* {cards.map((card) => (
//             <Card card={card} key={card.id} />
//           ))} */}
//           <ProjectCards />
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ProjectCards from "./ProjectCard";
import "./SecondSection.css";

export default function MediaScroll() {
  return (
    <div >
      <HorizontalScrollCarousel />
    </div>
  );
}

function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const updateDevice = () => {
      
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
      setIsDesktop(width >= 1024);
    };
    
    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);
  
  // const x = useTransform(scrollYProgress, [0, 1], ["46%", "-46%"]);
  
  let outputRange = ["-46%", "46%"]; 
  if (isTablet) outputRange = ["-38%", "38%"];
  if (isDesktop) outputRange = ["-25vw", "10vw"];
  
  const x = useTransform(scrollYProgress, [0, 1], outputRange);
  const projectData = [
  {
    id: 1,
    title: "Video Editing",
    link: '/contact@media',
    image: "/comming-soon.png",
    tags: ["Premiere Pro", "DaVinci", "After Effects"],
    description: "Crafting stories by shaping raw footage into engaging content.",
  },
  {
    id: 2,
    title: "Motion Graphics",
    link: '/contact@media',
    image: "/comming-soon.png",
    tags: ["DaVinci", "After Effects"],
    description: "Bringing visuals to life with animated design and dynamic effects.",
  },
  {
    id: 3,
    title: "3D Modelling",
    link: '/contact@media',
    image: "/comming-soon.png",
    tags: ["Blender", "Unreal Engine"],
    description: "Creating realistic objects and environments in 3D space.",
  },
  {
    id: 4,
    title: "3D Animation",
    link: '/contact@media',
    image: "/comming-soon.png",
    tags: ["Blender", "Unreal Engine"],
    description: "Precise, detailed, and dynamic 3D animation.",
  },
  {
    id: 5,
    title: "Architectural Visualisation",
    link: '/contact@media',
    image: "/comming-soon.png",
    tags: ["Unreal Engine"],
    description: "Turning 2D architectural plans into realistic 3D visuals and walkthroughs.",
  },
];


  return (
    <>
    <section ref={targetRef} id="media-section" data-theme="light" className="relative h-[300vh] ">
      <div className="sticky top-0 flex flex-col h-screen items-center w-[98.9vw] overflow-hidden">
        <div className="max-width-case-study center mt-24">
          <div className="section-info-wrap case-study">
            <div className="fadeup bro">
              <h2 className="section-info_primary-text">
                From{" "}
                <span className="heading-text-italic">Trimming Clips</span> <br/>
                To Building <span className="heading-text-italic">3D Experiences</span> 
              </h2>
            </div>
            <div className="fadeup">
              <p split-text="true" className="sub-title">
                &nbsp;We bring stories to life with high-quality video production, 3D animations, 
                and post-production that captivate audiences and drive engagement.
              </p>
            </div>
          </div>
        </div>
        <div className="relative mb-12 w-full flex-1">
          <motion.div style={{ x }} className="flex h-full items-center">
            <ProjectCards data={projectData} />
          </motion.div>
        </div>
      </div>
    </section>
    <style jsx>{`
      .scroll-text {
      font-size: 6.2rem;
      font-weight: 700;
      text-transform: uppercase;
      background: -webkit-linear-gradient(-90deg, #262626, #ffffff 80%);
      -webkit-background-clip: text;
      -webkit-text-stroke: 4px transparent;
      overflow: visible;
      padding: 1.4rem 0rem;
      padding-right: 3rem;
    }
    `}</style>
    </>
  );
}
