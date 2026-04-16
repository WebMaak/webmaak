"use client";

import { ChevronsRight, ChevronsLeft } from "lucide-react";
import styles from "@/styles/ui/BookCallButton.module.css";

export default function BookCallButton({
  txt,
  radius,
}: {
  txt: string;
  radius?: boolean;
}) {
  return (
    <button
      type="button"
      className={`${styles.button} ${radius ? styles.radius : ""}`}
    >
      {/* <span className={styles.reverseIconWrapper}>
        <ChevronsLeft className={styles.arrowPrimary} strokeWidth={1.8} />
        <ChevronsLeft className={styles.arrowSecondary} strokeWidth={1.8} />
      </span> */}
      <span className={styles.label}>{txt}</span>
      <span className={styles.iconWrapper}>
        <ChevronsRight className={styles.arrowPrimary} strokeWidth={1.8} />
        <ChevronsRight className={styles.arrowSecondary} strokeWidth={1.8} />
      </span>
    </button>
  );
}
