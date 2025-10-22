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

export default function ItScroll() {
  return <HorizontalScrollCarousel />;
}

function HorizontalScrollCarousel() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

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
      setIsDesktop(width > 1536);
    };

    updateDevice();
    window.addEventListener("resize", updateDevice);
    return () => window.removeEventListener("resize", updateDevice);
  }, []);

  let outputRange = ["5%", "-730%"];
  if (isTablet) outputRange = ["5%", "-460%"];
  if (isScaledDesktop) outputRange = ["5%", "-235%"];
  if (isDesktop) outputRange = ["5%", "-130%"];

  const topMount = isScaledDesktop ? "lg:top-[-220px]" : "lg:top-10";
  const lgHeight = isScaledDesktop ? "lg:h-fit" : "lg:h-screen";

  const x = useTransform(
    scrollYProgress,
    [isScaledDesktop ? 0.15 : 0, 1],
    outputRange
  );

  const projectData = [
    {
      id: 1,
      title: "UI/UX Design",
      image: "it-scroll/card1.png",
      tags: ["Figma", "Design", "UI/UX"],
      link: "/contact@webapps",
      description:
        "Modern and intuitive UI/UX designs built to improve usability and engagement.",
    },
    {
      id: 2,
      title: "CMS Development",
      image: "/it-scroll/card2.png",
      link: "/contact@webapps",
      tags: ["WordPress", "Webflow", "Shopify"],
      description:
        "Easy content management solutions designed for efficiency, control, growth.",
    },
    {
      id: 4,
      title: "E-Commerce Solutions",
      image: "/it-scroll/card4.png",
      link: "/contact@webapps",
      tags: ["Shopify", "WooCommerce", "Custom Stores"],
      description:
        "Secure, fast, and sales-driven platforms designed to boost growth and trust.",
    },
    {
      id: 5,
      title: "Web Applications",
      image: "/it-scroll/card5.png",
      link: "/contact@webapps",
      tags: ["Next.js", "React.js", "Node.js"],
      description:
        "Custom apps that scale businesses. Powerful, seamless, user-focused apps.",
    },
    {
      id: 3,
      title: "Website Development",
      image: "/comming-soon.png",
      link: "/contact@webapps",
      tags: ["React.js", "Next.js", "Node.js", "Express.js"],
      description:
        "Responsive, scalable websites built for performance and strong SEO results.",
    },
    {
      id: 6,
      title: "App Development",
      image: "/comming-soon.png",
      link: "/contact@webapps",
      tags: ["React Native", "Mobile", "iOS/Android"],
      description:
        "iOS & Android, native & hybrid. Engaging apps with intuitive UX.",
    },
    {
      id: 7,
      title: "Custom Integrations",
      image: "/comming-soon.png",
      link: "/contact@webapps",
      tags: ["WhatsApp", "AI Chatbot", "API"],
      description:
        "API & third-party tool setups. Smooth workflows, connected systems.",
    },
    {
      id: 8,
      title: "AI Consulting",
      image: "/comming-soon.png",
      link: "/contact@webapps",
      tags: ["AI Strategy", "Implementation", "Consulting"],
      description:
        "Strategy, setup & implementation. Guiding your AI transformation.",
    },
    {
      id: 9,
      title: "IT Consulting",
      image: "/comming-soon.png",
      link: "/contact@webapps",
      tags: ["Technology Strategy", "Digital Growth", "Consulting"],
      description:
        "Technology strategy & digital growth. Guidance to scale your business.",
    },
    {
      id: 10,
      title: "Tech Support & Maint.",
      image: "/comming-soon.png",
      link: "/contact@webapps",
      tags: ["Support", "Maintenance", "IT Services"],
      description:
        "Ongoing updates, fixes & security. Always-on reliable IT support.",
    },
  ];

  return (
    <>
      <section
        ref={targetRef}
        id="it-section"
        className="relative h-[300vh] mb-[-6rem]"
      >
        <div
          className={`sticky top-0 ${topMount} md:top-32 flex flex-col md:h-[80vh] ${lgHeight} items-center w-[98.9vw] overflow-hidden`}
        >
          <div className="max-width-case-study center mt-24">
            <div className="section-info-wrap case-study">
              <div className="fadeup bro">
                <h2 className="section-info_primary-text">
                  Building <br className="md:hidden block" />
                  <span className="heading-text-italic">
                    Websites & Web Apps
                  </span>{" "}
                  <br />
                  That Scales Business
                </h2>
              </div>
              <div className="fadeup">
                <p split-text="true" className="sub-title">
                  &nbsp;From responsive websites to robust web applications, we
                  craft digital solutions that deliver performance, scalability,
                  and seamless user experiences.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mb-12 w-full flex-1">
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-[30rem] items-center justify-center bg-gradient-to-r from-white from-20% via-white/100 via-55% to-transparent to-100% blur-[4rem]">
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-[30rem] items-center justify-center bg-gradient-to-r from-white from-20% via-white/100 via-55% to-transparent to-75%">
            <h3 className="transform -rotate-90 whitespace-nowrap font-bold uppercase tracking-widest text-white scroll-text overflow-visible">
              Automations
            </h3>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex w-[30rem] items-center justify-center bg-gradient-to-l from-white from-20% via-white/100 via-55% to-transparent to-75%">
            <h3 className="ml-10 transform rotate-90 whitespace-nowrap font-bold uppercase tracking-widest text-white scroll-text overflow-visible">
            </h3>
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex w-[30rem] items-center justify-center bg-gradient-to-l from-white from-20% via-white/100 via-55% to-transparent to-100% blur-[4rem]">
            <h3 className="ml-10 transform rotate-90 whitespace-nowrap font-bold uppercase tracking-widest text-white scroll-text overflow-visible">
            </h3>
          </div> */}

            <motion.div style={{ x }} className="flex h-full items-center">
              <ProjectCards data={projectData} />
            </motion.div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .scroll-text {
          margin: 0px;
          padding-top: 2rem;
          padding-bottom: 2rem;
          font-size: 4.6rem;
          font-weight: 700;
          text-transform: uppercase;
          background: -webkit-linear-gradient(-90deg, #262626, #ffffff 80%);
          -webkit-background-clip: text;
          -webkit-text-stroke: 4px transparent;
          overflow: visible;
        }
      `}</style>
    </>
  );
}
