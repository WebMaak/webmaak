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
  const testimonials = [
    {
      name: "Emma Watson",
      role: "Marketing Director",
      company: "Logoipsum",
      image: "/loader.gif",
      companyLogo: "/marquee-logo/21.png",
      quote:
        "Since Noda.ai, our team meetings are 90% more productive. It's like having a genius scribe who never misses a thing.",
    },
    {
      name: "John Doe",
      role: "Product Manager",
      company: "TechCorp",
      image: "/loader.gif",
      companyLogo: "/marquee-logo/21.png",
      quote:
        "Noda.ai has completely changed the way we organize our projects. It's incredibly efficient.",
    },
    {
      name: "Alice Smith",
      role: "CEO",
      company: "InnovateX",
      image: "/loader.gif",
      companyLogo: "/marquee-logo/21.png",
      quote:
        "Our productivity skyrocketed after using Noda.ai. It's like having an extra team member.",
    },
    {
      name: "Michael Brown",
      role: "Designer",
      company: "CreativesHub",
      image: "/loader.gif",
      companyLogo: "/marquee-logo/21.png",
      quote:
        "I can't imagine going back to our old workflow. Noda.ai makes collaboration effortless.",
    },
    {
      name: "Sophia Lee",
      role: "Engineer",
      company: "DevWorks",
      image: "/loader.gif",
      companyLogo: "/marquee-logo/21.png",
      quote:
        "The clarity and organization Noda.ai provides is unmatched. It's a game changer.",
    },
  ];
  const [cards, setCards] = useState(cardData);
  return (
    <section id="reviews" className="section_testimonial relative max-w-[100vw] overflow-hidden ">
      <div class="absolute bottom-[0%] left-[15%] w-[30rem] h-[30rem] bg-pink-300 rounded-full filter blur-[7.5rem] opacity-40 "></div>
      <div class="absolute top-[15%] right-[12%] w-[40rem] h-[40rem] bg-purple-300 rounded-full filter blur-[10rem] opacity-50 "></div>
      <div className="padding-global">
        <div className="container-large" style={{ maxWidth: "100%" }}>
          <div className="padding-section-large padding-bottom-testimonial">
            <div className="testimonail_heading">
              <div className="fadeup text-center">
                <h2 className="section-info_primary-text">
                  What our clients think
                  <span className="heading-text-italic"> about</span>
                  our work
                </h2>
              </div>
              <div className="fadeup">
                <p className="sub-title-border mx-auto background-color-white mt-2 w-[55%] text-center">
                  At WebMaak Creative, we believe great work starts with a great
                  partnership. Here’s how we roll—from your first "What if..."
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
                    <div className="testimonail_card flex flex-col lg:flex-row bg-white border border-gray-200 rounded-2xl shadow-[0_26px_46.5px_-22px_rgba(0,0,0,0.3)] overflow-hidden w-full h-full relative">
                      {/* Testimonial Content */}
                      <div className="testimonail_content flex flex-col justify-between items-start w-full  p-12">
                        <div className="testimonial_text text-black text-2xl font-normal leading-snug mb-6">
                          "{t.quote}"
                        </div>

                        <div className="testimonial-details flex flex-col justify-center items-start ">
                          <p className="testimonial_client-name mb-0 text-black text-md font-semibold">
                            {t.name}
                          </p>
                          <p className="testimonial_designation text-gray-900 text-xl font-normal">
                            {t.role}, {t.company}
                          </p>
                          {t.companyLogo && (
                            <img
                              src={t.companyLogo}
                              alt={`${t.company} Logo`}
                              className="testimonial_company-logo h-10 mt-2"
                            />
                          )}
                        </div>
                      </div>

                      {/* Testimonial Image */}
                      <div className="testimonail_image relative w-full lg:w-2/5 flex justify-end items-end">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="testimonial_person-image rounded-full object-cover w-40 h-40 shadow-xl ring-4 ring-white"
                        />
                        {t.bgIcon && (
                          <img
                            src={t.bgIcon}
                            alt=""
                            className="testimonial-image-back-icon absolute top-0 left-0"
                          />
                        )}
                        {t.bgMobile && (
                          <img
                            src={t.bgMobile}
                            alt=""
                            className="testimonial-image-back-mobile absolute bottom-0 right-0"
                          />
                        )}
                      </div>
                    </div>
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

// Bottom little card carousel
{
  /* comment goes above section */
}
{
  /* <div className="fadeup">
        <div className="result-wraperr">
          <div className="result-wrapper_list w-dyn-list">
            <div
              role="list"
              className="marquee-pane loop-move-left w-dyn-items"
            >
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">25%</div>
                    <p className="result_card-info_description">
                      Growth in enterprise leads
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/66547b7d336c6f9e33398c4a_Hyper.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">42%</div>
                    <p className="result_card-info_description">
                      Increase in Signup requests
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1f495074243de013633_SuperrpEts.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">41%</div>
                    <p className="result_card-info_description">
                      Increase in monthly leads
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1b352ec61fb427b6aad_Saral.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">45%</div>
                    <p className="result_card-info_description">
                      Increase in website conversions
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1182989eb1e11c4c0bb_Skuad.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">34%</div>
                    <p className="result_card-info_description">
                      Increase in conversion rate
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb0ad1f430c2501fb6aa1_Richpanel.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="result-wrapper_list w-dyn-list">
            <div
              role="list"
              className="marquee-pane loop-move-left w-dyn-items"
            >
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">25%</div>
                    <p className="result_card-info_description">
                      Growth in enterprise leads
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/66547b7d336c6f9e33398c4a_Hyper.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">42%</div>
                    <p className="result_card-info_description">
                      Increase in Signup requests
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1f495074243de013633_SuperrpEts.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">41%</div>
                    <p className="result_card-info_description">
                      Increase in monthly leads
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1b352ec61fb427b6aad_Saral.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">45%</div>
                    <p className="result_card-info_description">
                      Increase in website conversions
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1182989eb1e11c4c0bb_Skuad.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">34%</div>
                    <p className="result_card-info_description">
                      Increase in conversion rate
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb0ad1f430c2501fb6aa1_Richpanel.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="result-wrapper_list w-dyn-list">
            <div
              role="list"
              className="marquee-pane loop-move-left w-dyn-items"
            >
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">25%</div>
                    <p className="result_card-info_description">
                      Growth in enterprise leads
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/66547b7d336c6f9e33398c4a_Hyper.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">42%</div>
                    <p className="result_card-info_description">
                      Increase in Signup requests
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1f495074243de013633_SuperrpEts.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">41%</div>
                    <p className="result_card-info_description">
                      Increase in monthly leads
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1b352ec61fb427b6aad_Saral.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">45%</div>
                    <p className="result_card-info_description">
                      Increase in website conversions
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb1182989eb1e11c4c0bb_Skuad.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
              <div role="listitem" className="result-card_item w-dyn-item">
                <div className="result_card">
                  <div className="result_card-info">
                    <div className="result_card-info_number">34%</div>
                    <p className="result_card-info_description">
                      Increase in conversion rate
                    </p>
                  </div>
                  <div className="result_card-logo">
                    <img
                      src="https://cdn.prod.website-files.com/65fcbd0ae4a1ef93ccf63114/65feb0ad1f430c2501fb6aa1_Richpanel.svg"
                      loading="eager"
                      alt="client logo"
                      className="result_card-info_logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loop-move-left"></div>
        </div>
      </div> */
}
