import styles from "@/styles/security/AccessRestricted.module.css";
import "@/styles/variables.css"
export default function AccessRestricted() {
  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <span className={styles.badge}>ACCESS RESTRICTED</span>

        <h1 className={styles.title}>
          DEV TOOLS <em>detected</em>
        </h1>

        <p className={styles.text}>
          Curious about how this was built?
          <br />
          Let’s connect and chat about it.
        </p>

        <a href="/" className={styles.primaryBtn}>
          Return Home
        </a>

        <a href="/contact" className={styles.secondaryBtn}>
          Get in Touch
        </a>

        <div className={styles.links}>
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="/about" >About</a>
        </div>

        <div className={styles.footer}>© 2026 WebMaak</div>
      </div>
    </div>
  );
}
