import styles from "./UiShowcase.module.css";

const UiShowcase = () => {
  return (
    <div className={styles.wrapper}>
      {/* Floating Tags */}
      <div className={`${styles.tag} ${styles.tagLeft}`} style={{ top: "20%", left: "5%" }}>Breadcrumb</div>
      <div className={`${styles.tag} ${styles.tagLeft}`} style={{ top: "40%", left: "5%" }}>Button</div>
      <div className={`${styles.tag} ${styles.tagLeft}`} style={{ top: "60%", left: "5%" }}>Badge</div>
      <div className={`${styles.tag} ${styles.tagLeft}`} style={{ top: "80%", left: "5%" }}>Date Picker</div>

      <div className={`${styles.tag} ${styles.tagRight}`} style={{ top: "20%", right: "5%" }}>File Upload</div>
      <div className={`${styles.tag} ${styles.tagRight}`} style={{ top: "40%", right: "5%" }}>Rich Input Field</div>
      <div className={`${styles.tag} ${styles.tagRight}`} style={{ top: "60%", right: "5%" }}>Loader</div>
      <div className={`${styles.tag} ${styles.tagRight}`} style={{ top: "80%", right: "5%" }}>Time Picker</div>

      {/* Main Card */}
      <div className={styles.card}>
        <h3>
          13 UI <span className={styles.highlight}>Design Patterns</span> You Need to Know
        </h3>
        <div className={styles.image}></div>
        <p>
          Transform your user's journey! Don’t let code slow you down—get design
          patterns to build impactful projects faster.
        </p>
        <button className={styles.cta}>Book a Call</button>
      </div>
    </div>
  );
};

export default UiShowcase;
