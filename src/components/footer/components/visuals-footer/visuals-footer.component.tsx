import { ReactElement } from "react";

import Link from "next/link";

import styles from "./visuals-footer.module.css";

export default function VisualsFooterComponent(): ReactElement {
  return (
    <div className={styles.visuals}>
      <ul className={styles["visuals-link"]}>
        <h3>Company</h3>
        <li>
          <Link href="#">Blog</Link>
        </li>
        <li>
          <Link href="#">Career</Link>
        </li>
        <li>
          <Link href="#">News</Link>
        </li>
      </ul>
      <ul className={styles["visuals-link"]}>
        <h3>Resources</h3>
        <li>
          <Link href="#">Accessibility</Link>
        </li>
        <li>
          <Link href="#">Partners</Link>
        </li>
        <li>
          <Link href="#">Employers</Link>
        </li>
      </ul>
      <ul className={styles["visuals-link"]}>
        <h3>Suport</h3>
        <li>
          <Link href="#">FAQ</Link>
        </li>
        <li>
          <Link href="#">Privacy Plicy</Link>
        </li>
        <li>
          <Link href="#">Terms Of Use</Link>
        </li>
      </ul>
      <ul className={styles["visuals-link"]}>
        <h3>About Us</h3>
        <li>
          <Link href="#">About Jobior</Link>
        </li>
        <li>
          <Link href="#">Work for Jobior</Link>
        </li>
        <li>
          <Link href="#">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
}
