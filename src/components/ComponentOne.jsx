"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ProjectSection() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Floating card animation
    gsap.to(".float-card", {
      y: 15,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 2,
      stagger: 0.3,
    });

    // Marquee animation
    let ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "linear",
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-b from-[#0a0f2c] to-[#050816] flex flex-col items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,_rgba(29,78,216,0.3),transparent_70%)]"></div>

      {/* Headline */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white">
          Ready to <span className="text-blue-500">scale</span> your business?
        </h2>
        <p className="text-neutral-300 mt-4 text-lg max-w-xl mx-auto">
          Let’s craft digital solutions that drive measurable growth.
        </p>

        {/* CTA */}
        <button className="mt-6 px-8 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-500/40">
          Book a Free Consultation →
        </button>
      </div>

      {/* Floating Cards */}
      <div className="relative z-10 mt-16 flex gap-8">
        {[
          "/card-images/figma-1.png",
          "/card-images/vs-code-1.png",
          "/card-images/g-meet-1.png",
          "/card-images/after-effect-1.png",
        ].map((card, idx) => (
          <div
            key={idx}
            className="float-card w-40 h-52 bg-[#111] rounded-2xl shadow-lg shadow-blue-500/20 flex items-center justify-center"
          >
            <img src={card} alt="Card" className="h-20" />
          </div>
        ))}
      </div>

      {/* Marquee Logos */}
      <div
        ref={marqueeRef}
        className="relative w-full overflow-hidden mt-20"
      >
        <div className="marquee-track flex gap-16 w-[200%]">
          {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((n, idx) => (
            <img
              key={idx}
              src={`/marquee-logo/${n}.png`}
              alt="Client Logo"
              className="h-12 opacity-70 hover:opacity-100 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
