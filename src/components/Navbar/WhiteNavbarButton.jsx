"use client";
import React from "react";
import "./WhiteNavbarButton.css"; // We'll put the CSS here

export default function WhiteNavbarButton({ text = "Schedule a call", href = "/contact" }) {
  return (
    <a
      href={href}
      className="navbar-button-extraelem w-inline-block"
    >
      <div className="navbar-btn-content-extraelem">
        <div className="button-bg-1-extraelem"></div>
        <div className="button-bg-2-extraelem"></div>
        <div className="navbar_text-extraelem">{text}</div>
      </div>
      <div className="navbar-light-wrap-extraelem">
        <div className="navbar-light-extraelem"></div>
      </div>
    </a>
  );
}
