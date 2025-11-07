"use client";

import React from "react";
import "./FirstSection.css";
import { useIntersection } from "@/hooks/useIntersection";

function FirstSection() {
  useIntersection();
  useIntersection("fadeup");
  return (
    <>
      <section className="section_steps" id="section2" data-theme="light">
        <div className="steps-bottom-shadow"></div>
        <div className="steps-bg">
          <img
            src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66048a2826da1ef22f8260b8_Background%20pattern.webp"
            loading="lazy"
            sizes="100vw"
            srcset="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66048a2826da1ef22f8260b8_Background%20pattern-p-500.png 500w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66048a2826da1ef22f8260b8_Background%20pattern-p-800.png 800w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66048a2826da1ef22f8260b8_Background%20pattern-p-1080.png 1080w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66048a2826da1ef22f8260b8_Background%20pattern-p-1600.png 1600w, https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66048a2826da1ef22f8260b8_Background%20pattern.webp 2160w"
            alt=""
            className="steps-dot-pattern"
          />
          <div className="steps_border-box right"></div>
          <div className="steps_border-box left"></div>
        </div>
        <div className="padding-section-large-first-section">
          <div className="padding-global relative">
            <div className="container-medium">
              <div className="steps_heading-wrap relative">
                <div className="section-info-wrap">
                  <div className="fadeup">
                    <h2 className="section-info_primary-text">
                      How We Bring Your <br /> Ideas{" "}
                      <span className="heading-text-italic">to Life</span>
                    </h2>
                  </div>
                  <div className="fadeup">
                    <p className="sub-title-border background-color-white">
                      At WebMaak Creative, we believe great work starts with a
                      great partnership. Here’s how we roll—from your first
                      "What if..." to your final "Wow!".
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-large">
              <div className="steps_wrapper">
                <div className={`steps_card-wrapper _1`}>
                  <div className="fade-up-desktop fadeup">
                    <div className="steps_card">
                      <p className="steps_card_step-number">01</p>
                      <div className="steps_card_content">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 25"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="steps_card_icon "
                        >
                          <path d="M10.1 2.182a10 10 0 0 1 3.8 0" />
                          <path d="M13.9 21.818a10 10 0 0 1-3.8 0" />
                          <path d="M17.609 3.72a10 10 0 0 1 2.69 2.7" />
                          <path d="M2.182 13.9a10 10 0 0 1 0-3.8" />
                          <path d="M20.28 17.61a10 10 0 0 1-2.7 2.69" />
                          <path d="M21.818 10.1a10 10 0 0 1 0 3.8" />
                          <path d="M3.721 6.391a10 10 0 0 1 2.7-2.69" />
                          <path d="m6.163 21.117-2.906.85a1 1 0 0 1-1.236-1.169l.965-2.98" />
                        </svg>

                        <div className="steps_card_title">
                          Let’s Chat & Dream
                          <br />
                          <span className="text-style-secondary steps">
                            Your ideas guide us. We listen first, then craft
                            with purpose.
                          </span>
                        </div>
                      </div>
                      <div className="steps_card_image-wrap">
                        <div class="steps-card_lottie_1 figma">
                          <img
                            src="/card-images/g-meet-1.png"
                            alt="Google Meet"
                          />
                        </div>
                        <div class="steps-card_lottie_2 figma">
                          <img
                            src="/card-images/g-meet-2.png"
                            alt="Google Meet"
                          />
                        </div>
                        <div class="steps-card_lottie_3 figma">
                          <img
                            src="/card-images/g-meet-3.png"
                            alt="Google Meet"
                          />
                        </div>
                        <div class="steps-card_lottie_4 figma">
                          <img
                            src="https://www.gstatic.com/marketing-cms/assets/images/25/5f/c96350b5427fbfdbdef268515872/google-chat.webp"
                            alt="Google Meet"
                          />
                        </div>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          viewBox="0 0 260 192"
                          fill="none"
                          className="steps_card_image_line"
                        >
                          <path
                            d="M-31.6172 187.554C-29.4299 121.933 7.09853 -5.36942 135.714 10.3794C296.483 30.0654 265.06 216.513 462.72 187.554C556.209 173.856 586.817 97.8714 626.204 47.0171C682.925 -26.219 789.978 -1.09107 867.681 49.3367V49.3367C888.074 62.5707 945.308 73.0384 960.557 54.1063C984.085 24.8972 1019.93 2.01901 1060.3 5.91648"
                            stroke="currentColor"
                            stroke-dasharray="4 6"
                          ></path>
                        </svg>
                      </div>
                      <div className="steps_card-lines-holder">
                        <div className="steps_card-green-line _1 card_1_color"></div>
                        <div className="steps_card-green-line _2 card_1_color"></div>
                        <div className="steps_card-green-line _3 card_1_color"></div>
                        <div className="steps_card-green-line _4 card_1_color"></div>
                      </div>
                    </div>
                  </div>
                  <div className="steps_border-box _1"></div>
                </div>
                <div className={`steps_card-wrapper _2`}>
                  <div className="fade-up-desktop fadeup">
                    <div
                      data-w-id="64205669-bc89-99ef-b9eb-e5b51f1839f3"
                      className="steps_card"
                    >
                      <p className="steps_card_step-number">02</p>
                      <div className="steps_card_content">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 25"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="steps_card_icon"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" />
                          <path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" />
                          <path d="M9.7 17l4.6 0" />
                        </svg>

                        <div className="steps_card_title">
                          Create & Collaborate
                          <br />
                          <span className="text-style-secondary steps">
                            Ideas come alive here. We design, develop, and edit
                            while keeping you involved at every stage.
                          </span>
                        </div>
                      </div>
                      <div className="steps_card-lines-holder">
                        <div className="steps_card-green-line _1 card_2_color"></div>
                        <div className="steps_card-green-line _2 card_2_color"></div>
                        <div className="steps_card-green-line _3 card_2_color"></div>
                        <div className="steps_card-green-line _4 card_2_color"></div>
                      </div>
                      <div className="steps_card_image-wrap">
                        <div class="steps-card_2_1 figma">
                          <img
                            src="/card-images/figma-1.png"
                            alt="figma logo"
                          />
                        </div>
                        <div class="steps-card_2_2 figma">
                          <img
                            src="/card-images/figma-2.png"
                            alt="figma logo"
                          />
                        </div>
                        <div class="steps-card_2_3 figma">
                          <img
                            src="/card-images/figma-3.png"
                            alt="figma logo"
                          />
                        </div>
                        <div class="steps-card_2_4 figma">
                          <img
                            src="/card-images/figma-4.png"
                            alt="figma logo"
                          />
                        </div>
                        <div class="steps-card_2_5 figma">
                          <img
                            src="/card-images/figma-logo.png"
                            alt="figma logo"
                          />
                        </div>
                        <div
                          data-is-ix2-target="1"
                          className="steps-card_lottie webflow"
                          data-w-id="c2ca5753-92b3-5dde-2042-a3e747623f39"
                          data-animation-type="lottie"
                          data-src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/662c0ab9893f6579e96e44ec_webflow.lottie"
                          data-loop="0"
                          data-direction="1"
                          data-autoplay="0"
                          data-renderer="svg"
                          data-duration="0"
                          data-ix2-initial-state="0"
                        ></div>
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6602aac33505d7363704674c_webfllow-line.svg"
                          loading="lazy"
                          alt=""
                          className="steps_card_image_line"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="steps_border-box _2"></div>
                </div>
                <div className={`steps_card-wrapper _3`}>
                  <div className="fade-up-desktop fadeup">
                    <div
                      data-w-id="64205669-bc89-99ef-b9eb-e5b51f183a0a"
                      className="steps_card lottie"
                    >
                      <p className="steps_card_step-number">03</p>
                      <div className="steps_card_content">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="steps_card_icon"
                        >
                          <path d="M15 4V2" />
                          <path d="M15 16v-2" />
                          <path d="M8 9h2" />
                          <path d="M20 9h2" />
                          <path d="M17.8 11.8 19 13" />
                          <path d="M15 9h.01" />
                          <path d="M17.8 6.2 19 5" />
                          <path d="m3 21 9-9" />
                          <path d="M12.2 6.2 11 5" />
                        </svg>

                        <div className="steps_card_title">
                          Refine & Shine
                          <br />
                          <span className="text-style-secondary steps">
                            From good to great, we fine-tune until it feels just
                            right.
                          </span>
                        </div>
                      </div>
                      <div className="steps_card_image-wrap lottie-wrap">
                        <div class="steps-card_3_1 figma">
                          <img
                            src="/card-images/card-35.png"
                            alt="Google Meet"
                          />
                        </div>
                        <div class="steps-card_3_2 figma">
                          <img
                            src="/card-images/card-36.png"
                            alt="Google Meet"
                          />
                        </div>
                        <div class="steps-card_3_3 figma">
                          <img
                            src="/card-images/card-37.png"
                            alt="Google Meet"
                          />
                        </div>
                        <div class="steps-card_3_4 figma">
                          <img
                            src="/card-images/card-39.png"
                            alt="Google Meet"
                          />
                        </div>
                        <div class="steps-card_3_5 figma">
                          <img
                            src="/card-images/card-38.png"
                            alt="Google Meet"
                          />
                        </div>
                        <div class="steps-card_3_6 figma">
                          <img
                            src="/card-images/card-34.png"
                            alt="Google Meet"
                          />
                        </div>
                        <div class="steps-card_3_7 figma">
                          <img
                            src="/card-images/card-32.png"
                            alt="Google Meet"
                          />
                        </div>
                        <div
                          data-is-ix2-target="1"
                          className="steps-card_lottie"
                          data-w-id="5e2c88b6-1b3c-54ae-83c4-259ade95117a"
                          data-animation-type="lottie"
                          data-src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/661506759b4e4e53e9e2732a_speed.lottie"
                        ></div>
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6602ab114b5e6ae4a3622a0f_seo-line.svg"
                          loading="lazy"
                          alt=""
                          className="steps_card_image_line"
                        />
                      </div>
                      <div className="steps_card-lines-holder">
                        <div className="steps_card-green-line _1 card_3_color"></div>
                        <div className="steps_card-green-line _2 card_3_color"></div>
                        <div className="steps_card-green-line _3 card_3_color"></div>
                        <div className="steps_card-green-line _4 card_3_color"></div>
                      </div>
                    </div>
                  </div>
                  <div className="steps_border-box _3"></div>
                </div>
                <div className={`steps_card-wrapper _4`}>
                  <div
                    data-w-id="1c6ea753-1b90-de87-d736-b6b6224c0167"
                    className="fade-up-desktop fadeup"
                  >
                    <div
                      data-w-id="64205669-bc89-99ef-b9eb-e5b51f183a1f"
                      className="steps_card lottie"
                    >
                      <p className="steps_card_step-number">04</p>
                      <div className="steps_card_content">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="steps_card_icon"
                        >
                          <path d="M5.8 11.3 2 22l10.7-3.79" />
                          <path d="M4 3h.01" />
                          <path d="M22 8h.01" />
                          <path d="M15 2h.01" />
                          <path d="M22 20h.01" />
                          <path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10" />
                          <path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17" />
                          <path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7" />
                          <path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z" />
                        </svg>

                        <div className="steps_card_title">
                          Launch & Celebrate
                          <br />‍
                          <span className="text-style-secondary steps">
                            Launch day made simple — we manage the details so
                            you can focus on celebrating and scaling.
                          </span>
                        </div>
                      </div>
                      <div className="steps_card_image-wrap lottie-wrap">
                        <div class="steps-card_4_1 figma">
                          <img
                            src="/card-images/vs-code-1.png"
                            alt="Google Meet"
                          />
                        </div>
                        <div class="steps-card_4_2 figma">
                          <img
                            src="/card-images/vs-code-2.png"
                            alt="Google Meet"
                          />
                        </div>
                        <div class="steps-card_4_3 figma">
                          <img
                            src="/card-images/vs-code-3.png"
                            alt="Google Meet"
                          />
                        </div>
                        <div class="steps-card_4_4 vscode">
                          <img
                            src="/card-images/vs-code-logo.png"
                            alt="VS Code"
                          />
                        </div>

                        <div
                          data-is-ix2-target="1"
                          className="steps-card_publish-lottie"
                          data-w-id="259fed10-8fee-564e-e49f-3f5f25bbc89b"
                          data-animation-type="lottie"
                          data-src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66150381cfa35563cd4beae1_publishing.lottie"
                          data-loop="0"
                          data-direction="1"
                          data-autoplay="0"
                          data-renderer="svg"
                          data-default-duration="6.016666666666667"
                          data-duration="0"
                          data-ix2-initial-state="99"
                        ></div>
                        <img
                          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/6602ab4e6da9e63e10db2cc9_publish-line.svg"
                          loading="lazy"
                          alt=""
                          className="steps_card_image_line"
                        />
                      </div>
                      <div className="steps_card-lines-holder">
                        <div className="steps_card-green-line _1 card_4_color"></div>
                        <div className="steps_card-green-line _2 card_4_color"></div>
                        <div className="steps_card-green-line _3 card_4_color"></div>
                        <div className="steps_card-green-line _4 card_4_color"></div>
                      </div>
                    </div>
                  </div>
                  <div className="steps_border-box _4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default FirstSection;
