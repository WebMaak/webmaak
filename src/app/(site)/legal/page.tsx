import styles from "./LegalContent.module.css";
export default function LegalPage() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>Legal & Policy Center</h1>

      <p className={styles.paragraph}>
        Welcome to our Legal & Policy Framework. Please select a section from
        the left panel to view the detailed terms and policies that govern our
        projects, collaborations, and quality standards.
      </p>

      <ul className={styles.list}>
        <li className={styles.listItem}>✔ Payment and refund conditions</li>
        <li className={styles.listItem}>
          ✔ Confidentiality and intellectual property rules
        </li>
        <li className={styles.listItem}>
          ✔ Project scope, revisions, and communication policies
        </li>
        <li className={styles.listItem}>
          ✔ Quality assurance and associate engagement guidelines
        </li>
      </ul>
    </section>
  );
}
