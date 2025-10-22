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

export default function DigitalMarketing() {
  return (
    <div>
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
  const [isScaledDesktop, setIsScaledDesktop] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateDevice = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIsTablet(width >= 640 && width < 1024);
      setIsScaledDesktop(width >= 1024 && width <= 1536);
      setIsDesktop(width >= 1024);
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  // const x = useTransform(scrollYProgress, [0, 1], ["46%", "-46%"]);

  let outputRange = ["5%", "-730%"];
  if (isTablet) outputRange = ["5%", "-460%"];
  if (isScaledDesktop) outputRange = ["5%", "-235%"];
  if (isDesktop) outputRange = ["5%", "-130%"];

  const topMount = isScaledDesktop ? "lg:top-[-170px]" : "lg:top-10";
  const lgHeight = isScaledDesktop ? "lg:h-fit" : "lg:h-screen";

  const x = useTransform(
    scrollYProgress,
    [isScaledDesktop ? 0.15 : 0, 1],
    outputRange
  );

  const projectData = [
    {
      id: 1,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Innovation", "Future"],
      description: "Exciting project launching soon...",
    },
    {
      id: 2,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Creative", "Tech"],
      description: "Stay tuned for our next big launch!",
    },
    {
      id: 3,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Design", "Growth"],
      description: "Innovative solutions on the horizon.",
    },
    {
      id: 4,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Digital", "Branding"],
      description: "Crafting the future of digital presence.",
    },
    {
      id: 5,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Strategy", "NextGen"],
      description: "Big ideas are on their way.",
    },
    {
      id: 6,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Solutions", "Impact"],
      description: "Building smarter digital experiences.",
    },
    {
      id: 7,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Tech", "Future-Ready"],
      description: "Where creativity meets technology.",
    },
    {
      id: 8,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Vision", "Digital"],
      description: "Pioneering the next wave of innovation.",
    },
    {
      id: 9,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Ideas", "Growth"],
      description: "Transforming concepts into reality.",
    },
    {
      id: 10,
      title: "Coming Soon",
      link: "/contact@marketing",
      image: "/comming-soon.png",
      tags: ["WebMaak", "Innovation", "Launch"],
      description: "Something new around the corner.",
    },
  ];

  return (
    <>
      <section
        ref={targetRef}
        data-theme="light"
        className="relative h-[300vh] "
      >
        <div
          className={`sticky top-0 ${topMount} md:top-32 flex flex-col md:h-[80vh] ${lgHeight} items-center w-[98.9vw] overflow-hidden`}
        >
          <div className="max-width-case-study center mt-24">
            <div className="section-info-wrap case-study">
              <div className="fadeup bro">
                <h2 className="section-info_primary-text">
                  Driving <br className="md:hidden block" />
                  <span className="heading-text-italic">Digital Marketing</span>
                  <br />
                  that fuels growth
                </h2>
              </div>
              <div className="fadeup">
                <p split-text="true" className="sub-title">
                  &nbsp;Boosting brand visibility with SEO, targeted ads, and
                  performance-driven campaigns designed to maximize ROI.
                </p>
              </div>
            </div>
          </div>
          <div className="relative mb-12 w-full flex-1 h-full">
            <motion.div style={{ x }} className="flex items-center">
              <ProjectCards data={projectData} />
            </motion.div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .scroll-text {
          font-size: 5.5rem;
          font-weight: 700;
          text-transform: uppercase;
          background: -webkit-linear-gradient(-90deg, #262626, #ffffff 80%);
          -webkit-background-clip: text;
          -webkit-text-stroke: 4px transparent;
          overflow: visible;
          padding: 1.5rem 0rem;
          padding-left: 1.6rem;
        }
      `}</style>
    </>
  );
}
