// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import "./Marquee.css"; // We'll keep styles separate

// const Marquee = () => {
//   const tickerRefs = useRef([]);

//   useEffect(() => {
//   tickerRefs.current.forEach((ticker) => {
//     if (!ticker) return;

//     const inner = ticker.querySelector(".ticker-wrap");
//     const content = inner.querySelector(".ticker-text");
//     const duration = ticker.getAttribute("data-duration");

//     // Reset inner first
//     inner.innerHTML = "";
//     inner.append(content);

//     // Clone until content is wider than container
//     let totalWidth = content.offsetWidth;
//     while (totalWidth < ticker.offsetWidth * 2) {
//       const clone = content.cloneNode(true);
//       inner.append(clone);
//       totalWidth += content.offsetWidth;
//     }

//     // Animate all copies
//     const animations = [];
//     inner.querySelectorAll(".ticker-text").forEach((element) => {
//       const animation = gsap.to(element, {
//         x: "-100%",
//         repeat: -1,
//         duration: duration,
//         ease: "linear",
//       });
//       animations.push(animation);
//     });

//     // Pause on hover
//     ticker.addEventListener("mouseenter", () => {
//       animations.forEach((anim) => anim.pause());
//     });

//     ticker.addEventListener("mouseleave", () => {
//       animations.forEach((anim) => anim.play());
//     });
//   });
// }, []);


//   return (
//     <section className="marquee-section">
//       <div
//         className="ticker"
//         data-duration="10"
//         ref={(el) => (tickerRefs.current[0] = el)}
//       >
//         <div className="ticker-wrap">
//           <div className="ticker-text">
//             Let's collaborate • Drop me a line at{" "}
//             <span className="accent">hello@studio.com</span> • Available for{" "}
//             <span className="accent">freelance projects</span> • Ready to create
//             something amazing •
//           </div>
//         </div>
//       </div>

//       <div
//         className="ticker"
//         data-duration="5"
//         ref={(el) => (tickerRefs.current[1] = el)}
//       >
//         <div className="ticker-wrap">
//           <div className="ticker-text">
//             Connect with me <span className="accent">@yourhandle</span> • Open
//             to new <span className="accent">opportunities</span> • Let's build
//             something <span className="accent">incredible</span> together •
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Marquee;


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Marquee.css";

const Marquee = ({ position = "middle", duration = 10, text, accentText }) => {
  const tickerRef = useRef(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    const inner = ticker.querySelector(".ticker-wrap");
    const content = inner.querySelector(".ticker-text");

    // Reset & clone enough times
    inner.innerHTML = "";
    inner.append(content);
    let totalWidth = content.offsetWidth;
    while (totalWidth < ticker.offsetWidth * 2) {
      const clone = content.cloneNode(true);
      inner.append(clone);
      totalWidth += content.offsetWidth;
    }

    // Animate all copies
    const animations = [];
    inner.querySelectorAll(".ticker-text").forEach((element) => {
      const animation = gsap.to(element, {
        x: "-100%",
        repeat: -1,
        duration: duration,
        ease: "linear",
      });
      animations.push(animation);
    });

    // Pause on hover
    ticker.addEventListener("mouseenter", () => {
      animations.forEach((anim) => anim.pause());
    });
    ticker.addEventListener("mouseleave", () => {
      animations.forEach((anim) => anim.play());
    });
  }, [duration]);

  return (
    <div
      className={`marquee ${position}`}
      data-duration={duration}
      ref={tickerRef}
    >
      <div className="ticker-wrap">
        <div className="ticker-text">
          {text} <span className="accent">{accentText}</span> • {text}{" "}
          <span className="accent">{accentText}</span> •
        </div>
      </div>
    </div>
  );
};

export default Marquee;


// Usage Example:

{/* <div className="scroll-trigger" style={{ position: "relative" }}>
  <FifthSection />
  <SixthSection />

  <Marquee
    position="top"
    duration={10}
    text="Let's collaborate"
    accentText="hello@studio.com"
  />

  <Marquee
    position="bottom"
    duration={5}
    text="Connect with me"
    accentText="@yourhandle"
  />
</div> */}