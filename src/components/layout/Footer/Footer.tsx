"use client";

import { useState } from "react";
import { useScrollFade } from "@/hooks/fadeinObserver";
import { usePathname } from "next/navigation";
import styles from "@/styles/footer/Footer.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SectionTitleBlock from "@/components/sectionsShared/SectionTitleBlock";
import BookCallButton from "@/components/ui/BookCallButton";
import QuotePopup from "@/components/popup-form/QuotePopup";
import Button from "@/components/ui/Button";

const footerLinks = [
  {
    title: "Resources",
    links: [
      { label: "Sign in", href: "https://webmaak.workway.pro/login" },
      {
        label: "Get a Quote",
        href: "https://webmaak.workway.pro/lead-form/cab7978cc6df39803c26bc4186b8d6a6?styled=1&with_logo=1",
      },
      { label: "Privacy Policy", href: "/legal" },
      { label: "Terms of Services", href: "/legal" },
      { label: "Project Onboarding Guide", href: "/legal" },
      {
        label: "Legal & Compliance",
        href: "/legal/payment-terms",
      },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "UI/UX Design", href: "/contact" },
      { label: "App Development", href: "/contact" },
      { label: "Video Editing & MGFX", href: "/contact" },
      { label: "3D Modelling & Animation", href: "/contact" },
      { label: "Web Design & Development", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about" },
      { label: "Our Work", href: "/work" },
      { label: "Careers", href: "mailto:hello@webmaak.com" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

export default function ModernFooter() {
  const pathname = usePathname();
  const { ref, isVisible } = useScrollFade<HTMLDivElement>({ threshold: 0.3 });
  const [open, setOpen] = useState(false);

  const hideOnRoutes = [
    "/about",
    "/contact",
    "/contact@media",
    "/contact@webapps",
    "/contact@marketing",
    "/privacy-policy",
    "/terms-of-services",
    "/project-onboarding-guide",
    "/project-delivery-refund-policy",
  ];

  const shouldHide = hideOnRoutes.includes(pathname);

  return (
    <div className={styles.pageWrapper}>
      {!shouldHide && (
        <section data-theme="dark" className={styles.hero}>
          <div className={styles.heroCard}>
            {/* ✅ ONLY THIS PART IS REPLACED */}
            <SectionTitleBlock
              normal1="Crafting"
              italic1=" digital stories"
              normal2="that inspire and"
              italic2="engage."
              description="Every great brand deserves an exceptional online presence. We’re here to bring your vision to life with design, strategy, and technology that work in harmony."
              theme="dark"
            />
            <div
              ref={ref}
              className={`transition-opacity duration-600 ease-out ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? "500ms" : "0ms",
              }}
            >
              <Button />
            </div>
          </div>
        </section>
      )}

      <footer data-theme="light" id="contact" className={styles.footerOuter}>
        <div className={styles.footerInner}>
          <div className={styles.topSection}>
            {/* Left */}
            <div className={styles.footerLeft}>
              <img
                src="/company-logos/site-logo-colored.png"
                alt="WebMaak"
                className={styles.logo}
              />

              <p className={styles.description}>
                WebMaak empowers brands to turn ideas into powerful digital
                experiences, making design, performance, and storytelling come
                together seamlessly.
              </p>

              <div className={styles.socials}>
                <a
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/company/webmaak-creative"
                >
                  <i className="fa-brands fa-linkedin-in" />
                </a>
                <a
                  aria-label="Instagram"
                  href="https://www.instagram.com/webmaak/"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                <a
                  aria-label="Facebook"
                  href="https://www.facebook.com/webmaak"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a>
              </div>
            </div>

            {/* Columns */}
            <div className={styles.columns}>
              {footerLinks.map((column) => (
                <div key={column.title}>
                  <h3 className={styles.columnTitle}>{column.title}</h3>

                  <ul className={styles.menuList}>
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a aria-label={link.label} href={link.href}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.bottomBar}>
            <p>© 2025 WebMaak. All rights reserved.</p>
            <div className={styles.contactLinks}>
              <a aria-label="Email" href="mailto:hello@webmaak.com">
                hello@webmaak.com
              </a>
              <a
                aria-label="WhatsApp"
                href="https://api.whatsapp.com/send?phone=916289972924"
              >
                +91 62899 72924
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bigTextWrapper}>
          <h1 className={styles.bigText}>WEBMAAK</h1>
        </div>
      </footer>
      <QuotePopup isOpen={open} onClose={() => setOpen(false)} mode="light" />
    </div>
  );
}
