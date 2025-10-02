import React from "react";
import styles from "./services.module.css";

const ServicesPage = () => {
  return (
    <div className={styles.services}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>WordPress Excellence for Your Business</h1>
        <p>Custom Solutions, Faster Results!</p>
        <p>
          We build secure, SEO-friendly, and high-performing WordPress websites
          tailored to your goals.
        </p>
        <div className={styles.heroButtons}>
          <button className={styles.chatBtn}>Chat Now</button>
          <button className={styles.quoteBtn}>Get A Quote</button>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.servicesGrid}>
        <div className={styles.serviceCard}>
          <h3>UI/UX Design Solutions</h3>
          <p>Transform your ideas into visually stunning and user-friendly designs.</p>
          <button>Discover</button>
        </div>
        <div className={styles.serviceCard}>
          <h3>WordPress Website Design</h3>
          <p>
            We replicate designs with pixel-perfect precision or create a custom design
            tailored to your needs.
          </p>
        </div>
        <div className={styles.serviceCard}>
          <h3>WordPress Development</h3>
          <p>
            Your website’s needs may vary in complexity and functionality, but we’re here
            to help.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricing}>
        <h2>Choose the Right Plan for Your Business</h2>
        <div className={styles.pricingGrid}>
          <div className={styles.priceCard}>
            <h3>3 Pages Template</h3>
            <p className={styles.price}>$599</p>
            <ul>
              <li>Responsive Design</li>
              <li>Basic Customization</li>
              <li>SEO Optimized</li>
            </ul>
            <button>Book Demo</button>
          </div>
          <div className={`${styles.priceCard} ${styles.highlight}`}>
            <h3>Custom Design & Development</h3>
            <p className={styles.price}>$1,895</p>
            <ul>
              <li>Advanced Functionality</li>
              <li>SEO Optimization</li>
              <li>Custom Features</li>
            </ul>
            <button>Book Demo</button>
          </div>
          <div className={styles.priceCard}>
            <h3>WooCommerce</h3>
            <p className={styles.price}>$1,595</p>
            <ul>
              <li>E-commerce Setup</li>
              <li>Payment Integration</li>
              <li>Custom Products</li>
            </ul>
            <button>Book Demo</button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.features}>
        <h2>Delivering Excellence: Features & Benefits That Drive Success</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>Custom WordPress Development</div>
          <div className={styles.featureCard}>Responsive Design for All Devices</div>
          <div className={styles.featureCard}>Speed Optimization</div>
          <div className={styles.featureCard}>Secure and Scalable Website</div>
          <div className={styles.featureCard}>Seamless E-commerce Integration</div>
          <div className={styles.featureCard}>Customizable Solutions</div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
