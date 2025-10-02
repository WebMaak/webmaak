import React from "react";
import "./LogoMarquee.Module.css";

const logos = [
  "./marquee-logo/1.png",
  "./marquee-logo/2.png",
  "./marquee-logo/3.png",
  "./marquee-logo/4.png",
  "./marquee-logo/5.png",
  "./marquee-logo/6.png",
  "./marquee-logo/7.png",
  "./marquee-logo/8.png",
  "./marquee-logo/9.png",
  "./marquee-logo/10.png",
  "./marquee-logo/11.png",
  "./marquee-logo/12.png",
  "./marquee-logo/13.png",
  "./marquee-logo/14.png",
  "./marquee-logo/15.png",
  "./marquee-logo/16.png",
  "./marquee-logo/17.png",
  "./marquee-logo/18.png",
  "./marquee-logo/19.png",
  "./marquee-logo/20.png",
  "./marquee-logo/21.png",
  "./marquee-logo/22.png",
  "./marquee-logo/23.png",
  "./marquee-logo/24.png",
  "./marquee-logo/25.png",
  "./marquee-logo/26.png",
  "./marquee-logo/27.png",
  "./marquee-logo/28.png",
  "./marquee-logo/29.png",
  "./marquee-logo/30.png",
  "./marquee-logo/31.png",
  "./marquee-logo/32.png",
  "./marquee-logo/33.png",
  "./marquee-logo/34.png",
];


function LogoMarquee() {
  return (
    <div className="marquee">
      <div className="marquee-content">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`logo-${index}`} className="logo_image" draggable="false" />
        ))}
      </div>
      <div className="marquee-content">
        {logos.map((logo, index) => (
          <img key={`dup-${index}`} src={logo} alt={`logo-dup-${index}`} className="logo_image" draggable="false" />
        ))}
      </div>

      {/* fade mask */}
      <div className="fade fade-left"></div>
      <div className="fade fade-right"></div>
    </div>
  );
}

export default LogoMarquee;
