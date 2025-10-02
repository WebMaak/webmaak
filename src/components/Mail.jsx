// Mail.jsx
import React from "react";
import styles from "./Mail.module.css";

const Mail = () => {
  return (
    <div className={styles["letter-image"]}>
      <div className={styles["animated-mail"]}>
        <div className={styles["back-fold"]}></div>
        <div className={styles.letter}>
          <div className={styles["letter-border"]}></div>
          <div className={styles["letter-title"]}></div>
          <div className={`${styles["letter-context"]} pt-4`}>ContactUs</div>
          <div className={styles["letter-stamp"]}>
            <div className={styles["letter-stamp-inner"]}></div>
          </div>
        </div>
        <div className={styles["top-fold"]}></div>
        <div className={styles.body}></div>
        <div className={styles["left-fold"]}></div>
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default Mail;
