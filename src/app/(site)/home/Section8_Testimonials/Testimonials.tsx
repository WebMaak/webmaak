"use client";

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import styles from "@/styles/testimonials/Testimonials.module.css";
import SectionTitleBlock from "@/components/sectionsShared/SectionTitleBlock";
import Image from "next/image";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sonam Singh",
    role: "Director,",
    company: "Delfyle Solutions Pvt. Ltd.",
    image:
      "https://res.cloudinary.com/dgf5ru8jw/image/upload/f_auto,q_auto/sonam-singh_vnqah1.jpg",
    // companyLogo: "/marquee-logo/21.png",
    quote:
      "Working with WebMaak has been an absolute delight! From concept to execution, their team handled our website design with remarkable creativity, precision, and professionalism. They understood exactly what we envisioned for Delfyle, a clean, impactful, and user-friendly website that truly represents who we are as a brand. The entire process was smooth, transparent, and efficient, with the WebMaak team ensuring every detail aligned perfectly with our expectations. What impressed me most was their proactive approach, timely delivery, and commitment to quality. They didn’t just design a website; they built a digital identity that reflects Delfyle’s vision and values. A huge thank you to the entire WebMaak team for your dedication and brilliant execution, you’ve made our online presence stronger and more inspiring than ever!",
  },
  {
    name: "Hamna Kouser",
    role: "",
    company: "",
    image:
      "https://res.cloudinary.com/dgf5ru8jw/image/upload/f_auto,q_auto/hamna-kouser_segpng.jpg",
    // companyLogo: "/marquee-logo/21.png",
    quote:
      "The e-card which you provided to me was amazingly great work..Great work guyz and the best part was wedding website which was absolutely cherry on the cake.. Commendable work..keep up the Good work.",
  },
  {
    name: "Arun Kumar",
    role: "Founder,",
    company: "Design Leeway",
    image:
      "https://res.cloudinary.com/dgf5ru8jw/image/upload/f_auto,q_auto/design-leeway_gtov3t.jpg",
    // companyLogo: "/marquee-logo/21.png",
    quote:
      "Working with WebMaak and Team Talib was an excellent experience. The communication throughout our fintech website development in Webflow was smooth and efficient. Their quick response to feedback and commitment to maintaining design integrity truly stood out. The team’s product animation skills and turnaround time were impressive. I’d love to collaborate with them on many more projects in the future.",
  },
  {
    name: "Seema Tak",
    role: "Wedding Planner",
    company: "",
    image:
      "https://res.cloudinary.com/dgf5ru8jw/image/upload/f_auto,q_auto/seema-tak_skdwq8.jpg",
    quote:
      "Hey Aman, just wanted to thanks for both the videos came out amazing! You managed to deliver them in such a short time with so little input and still made them look so creative and perfect. I’m really impressed with your work and speed. Lots of videos are coming your way soon so please be ready! Now I feel so relaxed knowing you’re there to handle videos even at the last minute. Thank you so much again for your amazing work keep it up! Looking forward to working together again very soon.",
  },
  {
    name: "Kalika Nigam",
    role: "Founder,",
    company: "Chamki",
    image:
      "https://res.cloudinary.com/dgf5ru8jw/image/upload/f_auto,q_auto/v1772038862/chamki_kycln9.png",
    // companyLogo: "/marquee-logo/21.png",
    quote:
      "Working with WebMaak was an absolute pleasure! They built a stunning website for my brand and truly brought my vision to life. The team was incredibly dedicated, prompt with every update, and went above and beyond to make sure everything was perfect. Highly recommend them to anyone looking for a reliable and creative web development team!",
  },
  {
    name: "DigiTalks",
    role: "",
    company: "",
    image:
      "https://res.cloudinary.com/dgf5ru8jw/image/upload/f_auto,q_auto/v1772038862/digitalks_xz0lql.png",
    quote:
      "We have been working with the team for over a year and the team has been nothing short of supportive. It is not only the most quality output, but it is at a very optimum price. Working with them in the long run has been very convenient, not just for me. It has given me an understanding of what the brand is about as well. And create content eventually which is very strong and with very minimal edits. It is truly a partnership more than working with a vendor..",
  },
];

export default function SeventhSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [showSwiper, setShowSwiper] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsTablet(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowSwiper(true);
          observer.disconnect(); // run once
        }
      },
      {
        threshold: 0.5, // adjust if needed
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      data-theme="light"
      id="testimonials"
      className={styles.section}
      ref={sectionRef}
    >
      <div className={styles.bgPink} />
      <div className={styles.bgPurple} />

      <div className={styles.container}>
        <div className={styles.paddingSection}>
          <SectionTitleBlock
            normal1="What our clients think"
            normal2="about"
            italic2="our work"
            description="At WebMaak Creative, we believe great work starts with a great partnership. Here’s how we roll from your first 'What if...' to your final 'Wow!'."
            theme="light"
          />

          <Swiper
            className={`${styles.swiper} ${styles.swiperFadeIn} ${
              showSwiper ? styles.swiperFadeInVisible : ""
            }`}
            loop
            centeredSlides
            slidesPerView="auto"
            effect="coverflow"
            grabCursor
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: isTablet ? 50 : 100,
              modifier: isTablet ? 1.2 : 1.5,
              slideShadows: false,
            }}
            speed={600}
            resistanceRatio={0.85}
            threshold={8}
            touchReleaseOnEdges={true}
            preventClicks={false}
            preventClicksPropagation={false}
            noSwiping={true}
            noSwipingClass="swiper-no-swiping"
            modules={[EffectCoverflow]}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className={styles.slide}>
                <TestimonialCard testimonial={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [expanded, setExpanded] = useState(false);

  // Optimize Cloudinary profile image
  const profileImage = testimonial.image.includes("cloudinary.com")
    ? testimonial.image.replace("/upload/", "/upload/w_400,f_auto,q_auto/")
    : testimonial.image;

  return (
    <div
      className={`${styles.card} ${
        expanded ? styles.cardExpanded : styles.cardCollapsed
      }`}
      data-theme="light"
    >
      {/* LEFT CONTENT */}
      <div className={styles.left}>
        {/* QUOTE */}
        <div className={styles.quoteBlock}>
          <p className={styles.quote}>
            “
            {expanded
              ? testimonial.quote
              : testimonial.quote.slice(0, 220) + "..."}
            ”
          </p>

          <button
            type="button"
            className={`${styles.readMore} swiper-no-swiping`}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        </div>

        {/* META – ONLY WHEN COLLAPSED */}
        {!expanded && (
          <div className={styles.meta}>
            <p className={styles.name}>{testimonial.name}</p>
            <p className={styles.designation}>
              <span className={styles.role}>{testimonial.role}</span>{" "}
              {testimonial.company}
            </p>
          </div>
        )}
      </div>

      {/* RIGHT IMAGE */}
      {!expanded && (
        <div className={styles.imageWrap}>
          <Image
            src={profileImage}
            alt={testimonial.name}
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
      )}
    </div>
  );
}
