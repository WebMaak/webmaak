// Standard CTA button component.
"use client";

import "@/styles/ui/button-work.css";

export default function ButtonConsult() {
  return (
    <a href="/contact">
      <button className="wm-btn">
        <span className="wm-btn-icon left"></span>

        <span className="wm-btn-text button-text">Book a Consultation</span>

        <span className="wm-btn-icon right"></span>
      </button>
    </a>
  );
}
