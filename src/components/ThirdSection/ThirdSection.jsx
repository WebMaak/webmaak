'use client'

import React from "react";
import "./ThirdSectionNew.css";
import WhiteArrowButton from "@/components/WhiteArrowButton/WhiteArrowButton";
import  "./UiShowcase.css"

function ThirdSection() {
  return (
    <div className="section_cta background-color-primary">
      <div className="cta-bg">
        <img
          src="/section-three.png"
          loading="lazy"
          sizes="100vw"
          srcset="/section-three.png 500w, /section-three.png 800w, /section-three.png"
          alt=""
          class="cta-bg-image"
        />
        <img
          src="https://cdn.prod.website-files.com/65fb34308fabd933e87cbcb1/66253f0daadb32f354667c75_BG.webp"
          loading="lazy"
          alt=""
          class="cta-bg-image-mobile"
        />
      </div>
      {/* <UiShowcase/> */}
      <div className="padding-global relative">
        <div className="container-large">
          <div className="padding-section-medium" style={{paddingBottom: '0px', paddingTop: '0px'}}>
            <div className="ui-wrapper">
              {/* Floating Tags */}
              <div className="ui-tag" style={{ top: "30%", left: "3.5%" }}>Clean Typography</div>
              <div className="ui-line" style={{ top: "32%", left: "17.5%", height: "1px", width: "9%" }}></div>
              <div className="ui-tag" style={{ top: "40%", left: "2.5%" }}>Smart Buttons</div>
              <div className="ui-line" style={{ top: "42%", left: "14%", height: "1px", width: "12%" }}></div>
              <div className="ui-tag" style={{ top: "50%", left: "5.5%" }}>Quick Filters</div>
              <div className="ui-line" style={{ top: "52%", left: "16%", height: "1px", width: "10%" }}></div>
              <div className="ui-tag" style={{ top: "60%", left: "7%" }}>Dynamic Grid</div>
              <div className="ui-line" style={{ top: "62%", left: "18.5%", height: "1px", width: "8%" }}></div>
              <div className="ui-tag" style={{ top: "70%", left: "2.5%" }}>Promo Highlight</div>
              <div className="ui-line" style={{ top: "72%", left: "15.5%", height: "1px", width: "11%" }}></div>

              <div className="ui-tag" style={{ top: "30%", right: "5%" }}>Immersive Visuals</div>
              <div className="ui-line" style={{ top: "32%", right: "19%", height: "1px", width: "7%" }}></div>
              <div className="ui-tag" style={{ top: "40%", right: "6.5%" }}>Warm Aesthetic</div>
              <div className="ui-line" style={{ top: "42%", right: "19.3%", height: "1px", width: "7%" }}></div>
              <div className="ui-tag" style={{ top: "50%", right: "0%" }}>Bold Typography</div>
              <div className="ui-line" style={{ top: "52%", right: "13.5%", height: "1px", width: "13%" }}></div>
              <div className="ui-tag" style={{ top: "60%", right: "7%" }}>Clear CTA</div>
              <div className="ui-line" style={{ top: "62%", right: "16.3%", height: "1px", width: "10%" }}></div>
              <div className="ui-tag" style={{ top: "70%", right: "4%" }}>Engaging Message</div>
              <div className="ui-line" style={{ top: "72%", right: "18.3%", height: "1px", width: "8%" }}></div>

              {/* Main Card */}
              <div className="ui-card">
                <img src="/mockup-app-1.png" alt="Mobile Mockup" className="ui-card-image" />
              </div>
              <div className="ui-card">
                <img src="/mockup-app-2.png" alt="Mobile Mockup" className="ui-card-image" />
              </div>
            </div>
          </div>
          <div className="padding-section-medium " style={{paddingTop: '0px'}}>
            <div className="cta_wrapper">
              <div className="fadeup">
                <div className="section-info-wrap">
                  <h2 className="section-info_primary-text-light">
                    Trusted by businesses<br/>
                    <span className="heading-text-italic"> That scaled </span>with us
                  </h2>
                </div>
              </div>
              <div className="fadeup">
                <div className="cta_button-wrap">
                  <WhiteArrowButton
                    txt="Let’s Build Together"
                    newClass="third_section-button"
                  />
                </div>
              </div>
            </div>
            <div className="cta_client-wrapper">
              <div className="fadeup">
                <div split-text="true" className="cta_client-heading">
                  We’ve helped startups and enterprises build impactful digital products.
                </div>
              </div>
              <div className="cta_client-row">
                <div
                  className="cta_client-item scaleup"
                >
                  <img src="/marquee-logo/3.png" />
                </div>
                <div
                  className="cta_client-item scaleup"
                >
                  <img src="/marquee-logo/8.png" />
                </div>
                <div
                  className="cta_client-item scaleup"
                >
                  <img src="/marquee-logo/4.png" />
                </div>
                <div
                  className="cta_client-item scaleup"
                >
                  <img src="/marquee-logo/5.png" />
                </div>
                <div
                  className="cta_client-item scaleup"
                >
                  <img src="/marquee-logo/14.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
