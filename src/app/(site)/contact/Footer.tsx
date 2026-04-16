import React from "react";
import "./Footer.css";
import { Instagram, Linkedin, Facebook } from "lucide-react";

export const PageFooter: React.FC = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "#",
      icon: <Linkedin className="footer-social-icon" />,
    },
    {
      name: "Instagram",
      url: "#",
      icon: <Instagram className="footer-social-icon" />,
    },
    {
      name: "Facebook",
      url: "#",
      icon: <Facebook className="footer-social-icon" />,
    },
  ];

  return (
    <div className="footer-container">
      <div className="footer-socials">
        {socialLinks.map((social) => (
          <a key={social.name} href={social.url} className="footer-social-link">
            <span>{social.icon}</span>
            <span>{social.name}</span>
          </a>
        ))}
      </div>

      <div className="footer-contacts">
        <a href="tel:+916289972924" className="footer-contact">
          <span className="footer-contact-label">Connect on Phone</span>
          <span className="footer-contact-email">+91 62899 72924</span>
        </a>
        <a href="mailto:hello@webmaak.com" className="footer-contact">
          <span className="footer-contact-label">Connect with us</span>
          <span className="footer-contact-email">hello@webmaak.com</span>
        </a>
      </div>
    </div>
  );
};
