"use client";

import { useRef } from "react";
import "./SeventhSection.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation"; // ✅ Import Navigation CSS
import { EffectCoverflow, Navigation } from "swiper/modules";
import cardData from "@/constants/cardData";
import { useState } from "react";

// import Card1 from "@/constants/Card1";
// import Card2 from "@/constants/Card2";
// import Card from "@/constants/Card";

function SeventhSection() {
  const swiperRef = useRef(null);
  const [showFull, setShowFull] = useState(false);
  const testimonials = [
    {
      name: "Sonam Singh",
      role: "Director,",
      company: "Delfyle Solutions Pvt. Ltd.",
      image: "/testimonial/delfyle.png",
      // companyLogo: "/marquee-logo/21.png",
      quote:
        "Working with WebMaak has been an absolute delight! From concept to execution, their team handled our website design with remarkable creativity, precision, and professionalism. They understood exactly what we envisioned for Delfyle, a clean, impactful, and user-friendly website that truly represents who we are as a brand. The entire process was smooth, transparent, and efficient, with the WebMaak team ensuring every detail aligned perfectly with our expectations. What impressed me most was their proactive approach, timely delivery, and commitment to quality. They didn’t just design a website; they built a digital identity that reflects Delfyle’s vision and values. A huge thank you to the entire WebMaak team for your dedication and brilliant execution, you’ve made our online presence stronger and more inspiring than ever!",
    },
    {
      name: "Hamna Kouser",
      role: "",
      company: "",
      image: "/clients/client5.png",
      // companyLogo: "/marquee-logo/21.png",
      quote:
        "The e-card which you provided to me was amazingly great work..Great work guyz and the best part was wedding website which was absolutely cherry on the cake.. Commendable work..keep up the Good work.",
    },
    {
      name: "Arun",
      role: "",
      company: "Design Leeway",
      image: "/testimonial/arun.png",
      // companyLogo: "/marquee-logo/21.png",
      quote:
        "Working with Webmak and Team Talib was an excellent experience. The communication throughout our fintech website development in Webflow was smooth and efficient. Their quick response to feedback and commitment to maintaining design integrity truly stood out. The team’s product animation skills and turnaround time were impressive. I’d love to collaborate with them on many more projects in the future.",
    },
    {
      name: "Seema Tak",
      role: "Wedding Planner",
      company: "",
      image: "/testimonial/seema-tak.png",
      quote:
        "Hey Aman, just wanted to thanks for both the videos came out amazing! You managed to deliver them in such a short time with so little input and still made them look so creative and perfect. I’m really impressed with your work and speed. Lots of videos are coming your way soon so please be ready! Now I feel so relaxed knowing you’re there to handle videos even at the last minute. Thank you so much again for your amazing work keep it up! Looking forward to working together again very soon.",
    },
    {
      name: "Kalika Nigam",
      role: "Founder,",
      company: "Chamki",
      image: "/logo.png",
      // companyLogo: "/marquee-logo/21.png",
      quote:
        "Working with WebMaak was an absolute pleasure! They built a stunning website for my brand and truly brought my vision to life. The team was incredibly dedicated, prompt with every update, and went above and beyond to make sure everything was perfect. Highly recommend them to anyone looking for a reliable and creative web development team!",
    },
    {
      name: "DigiTalks",
      role: "Agency",
      company: "",
      image: "/testimonial/digitalks.png",
      quote:
        "We have been working with the team for over a year and the team has been nothing short of supportive. It is not only the most quality output, but it is at a very optimum price. Working with them in the long run has been very convenient, not just for me. It has given me an understanding of what the brand is about as well. And create content eventually which is very strong and with very minimal edits. It is truly a partnership more than working with a vendor..",
    },
    {
      name: "Dhiraj Tejwani",
      role: "Podcast Host,",
      company: "DTalks",
      image: "/clients/client1.png",
      // companyLogo: "/marquee-logo/21.png",
      quote:
        "Working with Aman and his team has been one of the smoothest professional experiences I’ve had. He is incredibly polite and respectful in all interactions, which makes collaboration effortless. He understands the brief quickly and with great clarity, and what really stands out is his cooperative nature, there’s never any ego, only a willingness to make the work better. No matter how many changes or modifications are needed, he handles them with patience and positivity. Beyond his attitude, his editing skills are exceptional, he has an eye for detail and creativity that consistently elevates the final output. I’ve never once been disappointed, and I can confidently say he’s someone you can trust to deliver not just quality work, but also a pleasant working relationship. I’d wholeheartedly recommend him to anyone looking for a skilled and dependable editor.",
    },
  ];
  const [cards, setCards] = useState(cardData);
  return (
    <section className="section_testimonial relative max-w-[100vw] overflow-hidden ">
      <div class="absolute bottom-[0%] left-[15%] w-[30rem] h-[30rem] bg-pink-300 rounded-full filter blur-[7.5rem] opacity-40 "></div>
      <div class="absolute top-[15%] right-[12%] w-[40rem] h-[40rem] bg-purple-300 rounded-full filter blur-[10rem] opacity-50 "></div>
      <div>
        <div className="container-large" style={{ maxWidth: "100%" }}>
          <div className="padding-section-large padding-bottom-testimonial">
            <div className="testimonail_heading">
              <div className="fadeup text-center">
                <h2 className="section-info_primary-text">
                  What our clients think <br />
                  <span className="heading-text-italic"> about</span>
                  our work
                </h2>
              </div>
              <div className="fadeup ">
                <p className="sub-title-border mx-auto background-color-white mt-2 w-[90%] lg:w-[55%] text-center">
                  At WebMaak Creative, we believe great work starts with a great
                  partnership. Here’s how we roll from your first "What if..."
                  to your final "Wow!".
                </p>
              </div>
            </div>
            <div className="fadeup">
              <Swiper
                loop={true}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 1.5,
                  slideShadows: false,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }} // Enable navigation buttons
                onSlideChangeTransitionEnd={(swiper) => {
                  document
                    .querySelectorAll(".swiper-slide")
                    .forEach((slide) => {
                      slide.style.zIndex = "1"; // Reset all slides behind
                    });
                  swiper.slides[swiper.activeIndex].style.zIndex = "10"; // Bring active slide to front
                }}
                modules={[EffectCoverflow, Navigation]} // Add Navigation module
                className="swiper-container "
              >
                {testimonials.map((t, index) => (
                  <SwiperSlide key={index} className="slide-content my-auto">
                    <TestimonialText testimonial={t} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeventhSection;
function TestimonialText({ testimonial }) {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="w-full">
      {!showFull ? (
        // Full card view
        <div className="testimonail_card flex flex-col lg:flex-row bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden w-full lg:h-[400px] md:h-[650px] h-[450px] relative">
          {/* Testimonial Content */}
          <div className="testimonail_content flex flex-col justify-between items-start w-full p-12">
            <p className="testimonial_text text-black text-[0.1rem] md:text-[1.3rem] font-normal leading-snug md:mb-6 mb-0">
              "
              {testimonial.quote.length > 170
                ? testimonial.quote.slice(0, 170) + "..."
                : testimonial.quote}
              "
              <br />
              <span
                className="cursor-pointer leading-normal font-normal text-[0.775rem] md:text-lg bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent hover:underline"
                onClick={() => setShowFull(true)}
              >
                Read More
              </span>
            </p>

            <div className="testimonial-details flex flex-col justify-center items-start">
              <p className="testimonial_client-name mb-0 text-black text-md font-semibold">
                {testimonial.name}
              </p>
              <p className="testimonial_designation mb-0 text-gray-900 text-xl font-normal">
                <span className="client-role">{testimonial.role}</span>{" "}
                <span className="client-company">{testimonial.company}</span>
              </p>
              {testimonial.companyLogo && (
                <img
                  src={testimonial.companyLogo}
                  alt={`${testimonial.company} Logo`}
                  className="testimonial_company-logo h-10 mt-0 md:mt-2"
                />
              )}
            </div>
          </div>

          {/* Testimonial Image */}
          <div className="testimonail_image relative w-[60%] md:mb-0 mb-4 flex justify-end items-end">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial_person-image object-cover w-full lg:rounded-none rounded-full ring-4 ring-white"
            />
          </div>
        </div>
      ) : (
        // Quote-only view
        <div className="bg-white border border-gray-200 rounded-2xl  p-4 md:p-12 w-full lg:h-[400px] md:h-[650px] h-[450px] flex flex-col items-start justify-center">
          <p className="text-black md:text-[1.1rem] text-[0.775rem] font-normal leading-tight text-center">
            "{testimonial.quote}"
          </p>
          <span
            className="cursor-pointer leading-normal font-normal text-[0.775rem] md:text-lg bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 bg-clip-text text-transparent hover:underline mx-auto"
            onClick={() => setShowFull(false)}
          >
            Read less
          </span>
        </div>
      )}
    </div>
  );
}
