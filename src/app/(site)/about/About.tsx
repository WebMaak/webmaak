"use client";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "@/styles/about/page.module.css";
import "@/styles/about/page.css";

const Clients = dynamic(() => import("../home/Section7_Clients/Clients"));

const About: React.FC = () => {
  return (
    <>
      <div className={styles.pageWrapper}>
        {/* Hero */}
        <header className={styles.header}>
          <div className="container-medium">
            <div className="steps_heading-wrap">
              <div className="section-info-wrap">
                <div className="fadeup">
                  <h2 className="section-info_primary-text-about">
                    The <span className="heading-text-italic">Story </span>of
                    <br />{" "}
                    <span className="about-blue-heading">
                      WebMaak Creative LLP
                    </span>
                  </h2>
                </div>
                <div className="fadeup">
                  <p className="sub-title-border-about background-color-white">
                    Founded with a vision for creativity and innovation,{" "}
                    <span className={styles.semibold}>
                      {" "}
                      WebMaak Creative LLP{" "}
                    </span>
                    has been delivering impactful digital experiences since
                    <span className={styles.semibold}> 2018, </span>officially
                    registered on
                    <span className={styles.semibold}>
                      {" "}
                      May 26, 2025 in Kolkata, India
                    </span>
                    . What started as a small freelance initiative by{" "}
                    <span className={styles.semibold}> Talib Ali</span> has now
                    grown into a full-fledged creative agency with a passionate
                    team of designers, developers, and media professionals.
                  </p>
                </div>
                <div className={styles.mapWrapper}>
                  <Image
                    src="https://res.cloudinary.com/dsvgjs1qb/image/upload/f_auto,q_auto,w_1600/v1772192359/about-map_qunvih.jpg"
                    alt="Map illustration"
                    width={1400}
                    height={600}
                    className={styles.mapImage}
                    priority
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                </div>

                <div className="fadeup">
                  <p className="sub-title-border-about background-color-white ">
                    In <span className={styles.semibold}> 2023, Aman Ali </span>
                    joined the venture, expanding WebMaak’s capabilities into
                    <span className={styles.semibold}>
                      {" "}
                      Media and post-production services
                    </span>
                    , strengthening our ability to deliver end-to-end creative
                    solutions under one roof.
                  </p>
                  <p className="sub-title-border-about background-color-white ">
                    With a strong foundation in both{" "}
                    <span className={styles.semibold}>
                      {" "}
                      technology and creativity
                    </span>
                    , we have successfully delivered
                    <span className={styles.semibold}>
                      {" "}
                      350+ projects across the globe
                    </span>
                    , spanning diverse industries and markets.
                  </p>
                  <p className="sub-title-border-about background-color-white ">
                    At WebMaak, we work with a versatile range of{" "}
                    <span className={styles.semibold}>
                      {" "}
                      tech stacks and tools
                    </span>
                    , including
                    <span className={styles.semibold}>
                      {" "}
                      Next.js, React, Node.js, Express.js, MongoDB, WordPress,
                      WooCommerce, React.native
                    </span>
                    , along with the full suite of{" "}
                    <span className={styles.semibold}>
                      {" "}
                      Adobe After Effects, Adobe Premiere Pro, Da Vinci Resolve
                    </span>{" "}
                    and{" "}
                    <span className={styles.semibold}>
                      {" "}
                      Blender, and Unreal Engine
                    </span>{" "}
                    for visual and motion projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Secondary section */}
        <section className={styles.section}>
          {/* Example content area (cards) */}
          <div className={styles.stack}>
            <article className={styles.card}>
              <Image
                src="https://res.cloudinary.com/dsvgjs1qb/image/upload/f_auto,q_auto,w_300/v1772192338/talib_aruu0l.jpg"
                alt="Talib Ali"
                width={300}
                height={200}
                className={styles.image}
              />

              <div className={styles.textWrap}>
                <h3 className={styles.primaryText}>Talib Ali</h3>
                <h4 className={styles.subheading}>Founder, CEO</h4>
                <p
                  className={`${styles.description} ${styles.subTitleBorderAbout}`}
                >
                  <span className={styles.bold}> Talib Ali</span>, a{" "}
                  <span className={styles.bold}> Management Graduate</span>,
                  started his journey as a{" "}
                  <span className={styles.bold}> WordPress Developer </span> and
                  gradually expanded his expertise into{" "}
                  <span className={styles.bold}>
                    {" "}
                    UI/UX design, Web Development, and Project Management{" "}
                  </span>
                  . He now leads all{" "}
                  <span className={styles.bold}> IT and design projects, </span>
                  ensuring seamless execution, creative quality, and client
                  satisfaction.
                </p>
                <h4 className="section-info_primary-text-socials"> Socials</h4>

                <div className={styles.inlineRow}>
                  <a
                    href="https://www.linkedin.com/in/mdtalib15/"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a
                    href="https://www.instagram.com/talib_imran"
                    aria-label="Instagram"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a
                    href="https://www.facebook.com/talib.ali.15/"
                    aria-label="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </div>
              </div>
            </article>

            <article className={styles.card}>
              <Image
                src="https://res.cloudinary.com/dsvgjs1qb/image/upload/f_auto,q_auto,w_300/v1772192354/aman_mek9kv.jpg"
                alt="Aman Ali"
                width={300}
                height={200}
                className={styles.image}
              />
              <div className={styles.textWrap}>
                <h3 className={styles.primaryText}>Aman Ali</h3>
                <h4 className={styles.subheading}> Co-Founder, COO</h4>
                <p
                  className={`${styles.description} ${styles.subTitleBorderAbout}`}
                >
                  <span className={styles.bold}> Aman Ali</span>, after
                  completing school, began his creative journey while pursuing
                  Graduation and Chartered Accountancy.
                  <span className={styles.bold}>
                    {" "}
                    Passionate about photography, animation, and all forms of
                    visual storytelling, he poured his creativity into
                    post-production and video editing
                  </span>
                  . A self-taught artist,{" "}
                  <span className={styles.bold}>
                    {" "}
                    Aman now leads WebMaak’s media division{" "}
                  </span>
                  , bringing life to visuals through his keen eye for detail and
                  storytelling flair.
                </p>
                <h4 className="section-info_primary-text-socials"> Socials</h4>

                <div className={styles.inlineRow}>
                  <a
                    href="https://www.linkedin.com/in/mdaman0803/"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                  <a
                    href="https://www.instagram.com/mdaman0803/"
                    aria-label="Instagram"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                  <a
                    href="https://www.facebook.com/mdaman08"
                    aria-label="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
        <Clients />
        <div className={styles.bottomContent}>
          <p
            className={`${styles.subTitleBorderAbout} ${styles.bgWhite} ${styles.textCenter}`}
          >
            Though <span className={styles.semibold}> small in size</span>, our
            team is
            <span className={styles.semibold}> highly efficient</span>, blending
            technical precision with artistic excellence. Our{" "}
            <span className={styles.semibold}>
              {" "}
              coders, designers, and animators
            </span>
            work collaboratively to transform ideas into powerful digital
            experiences that drive results and inspire creativity.
          </p>
          <p
            className={`${styles.subTitleBorderAbout} ${styles.bgWhite} ${styles.mb14} ${styles.textCenter}`}
          >
            At <span className={styles.semibold}>WebMaak Creative LLP</span>, we
            don’t just build brands; we build success stories.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
