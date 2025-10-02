'use client'

import React from "react";
import "./WhiteArrowButton.css";

function WhiteArrowButton({ txt, newClass = "" }) {
  return (
    <div className={`hero-content_btn-wrapper ${newClass} fade-in`}>
      <a href="/contact" className="button-link w-inline-block">
        <button
          data-w-id="079d53ed-e0ae-5736-62e1-d138897c5f8c"
          className="primary-button-White"
        >
          <div className="primary-button-pressed-overlay"></div>
          <div className="primary-button-hover-overlay"></div>
          <div className="primary-btn-text">{txt}</div>
          <div className="secondary-btn_wrap">
            <div className="secondary-btn_icon-wrap">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 20 12"
                fill="none"
                class="secondary-btn_icon"
              >
                <path
                  d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                  stroke="currentColor"
                  stroke-width="2"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                viewBox="0 0 20 12"
                fill="none"
                class="secondary-btn_icon"
              >
                <path
                  d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                  stroke="currentColor"
                  stroke-width="2"
                ></path>
              </svg>
            </div>
          </div>
        </button>
      </a>
    </div>
  );
}

export default WhiteArrowButton;
