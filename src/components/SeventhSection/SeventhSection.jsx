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

  const [cards, setCards] = useState(cardData);
  return (
    <section id="reviews" className="section_testimonial">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large padding-bottom-testimonial">
            <div className="testimonail_heading">
              <div className="fadeup">
                <h2 className="section-info_primary-text">
                  What our clients think
                  <span className="heading-text-italic"> about</span>
                  our work
                </h2>
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
                <SwiperSlide className="slide-content red">1</SwiperSlide>
                <SwiperSlide className="slide-content blue">2</SwiperSlide>
                <SwiperSlide className="slide-content green">3</SwiperSlide>
                <SwiperSlide className="slide-content yellow">4</SwiperSlide>
                <SwiperSlide className="slide-content purple">5</SwiperSlide>
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
{/* comment goes above section */}
{/* <div className="fadeup">
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
      </div> */}
