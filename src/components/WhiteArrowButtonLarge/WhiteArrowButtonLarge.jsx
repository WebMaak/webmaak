'use client'

import React from "react";
import styles from "./WhiteArrowButtonLarge.module.css";

function WhiteArrowButtonLarge() {
  return (
    <a href="/contact" className={`${styles.buttonLink} w-inline-block`}>
      <button
        // data-w-id="079d53ed-e0ae-5736-62e1-d138897c5f8c"
        className={styles.primaryButton}
      >
        <div className={styles.primaryButtonPressedOverlay}></div>
        <div className={styles.primaryButtonHoverOverlay}></div>
        <div className={styles.secondaryBtnWrap}>
          <div className={styles.secondaryBtnIconWrap}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 48 48"
              fill="none"
              className={styles.secondaryBtnIcon}
            >
              <image
                href="/microsoft-team.png"
                width="48"
                height="48"
                preserveAspectRatio="xMidYMid meet"
              />
            </svg>
            
          </div>
        </div>
        <div className={styles.primaryBtnText}>Book a Consultation</div>
        <div className={styles.secondaryBtnWrap}>
          <div className={styles.secondaryBtnIconMeetWrap}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 48 48"
              fill="none"
              className={styles.secondaryBtnIconMeet}
            >
              <image
                href="https://www.gstatic.com/marketing-cms/assets/images/25/5f/c96350b5427fbfdbdef268515872/google-chat.webp"
                width="48"
                height="48"
                preserveAspectRatio="xMidYMid meet"
              />
            </svg>
            
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              viewBox="0 0 20 12"
              fill="none"
              className="secondary-btn_icon"
              style={{color: 'red'}}
            >
              <path
                d="M13.3333 0.166687C13.3333 0.78502 13.9442 1.70835 14.5625 2.48335C15.3575 3.48335 16.3075 4.35585 17.3967 5.02169C18.2133 5.52085 19.2033 6.00002 20 6.00002M20 6.00002C19.2033 6.00002 18.2125 6.47919 17.3967 6.97835C16.3075 7.64502 15.3575 8.51752 14.5625 9.51585C13.9442 10.2917 13.3333 11.2167 13.3333 11.8334M20 6.00002H0"
                stroke="currentColor"
                stroke-width="2"
              ></path>
            </svg> */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`lucide lucide-messages-square ${styles.secondaryBtnIcon}`}
            >
              <path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              <path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" />
            </svg> */}
          </div>
        </div>
      </button>
    </a>
  );
}

export default WhiteArrowButtonLarge;

