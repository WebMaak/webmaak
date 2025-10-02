import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./Card1.css";

// import required modules
import { EffectCards } from "swiper/modules";

// Importing card stack
import cardStack from "@/constants/cardData";

import { Star } from "lucide-react";

export default function Card1() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {cardStack.map((e, index) => (
          <SwiperSlide key={index}>
            {/* Rating Section */}
            <div className="rating-section">
              <span className="rating">{e.rating} </span>
              <Star className="star-icon" size={16} fill="#f5c518" />
              <p className="rating-text">(Out of 5 stars)</p>
            </div>

            {/* Review */}
            <p className="review">{e.review}</p>

            {/* Quote Symbol */}
            <div className="quote-symbol">”</div>

            {/* User Info */}
            <div className="user-info">
              <div className="user-info-text">
                <h3 className="user-name">{e.name}</h3>
                <p className="user-position">{e.position}</p>
              </div>
              <img
                src={e.profileImage}
                alt={e.name}
                className="profile-image"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
