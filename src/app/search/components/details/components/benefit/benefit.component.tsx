import { ReactElement } from "react";

import styles from "./benefit.module.css";

export default function BenefitComponent(): ReactElement {
  return (
    <div className={styles.benefit} id="benefit">
      <h2>Benefit</h2>
      <h3>Base Pay Range</h3>
      <p>$50.00- $60.00 per/h</p>
      <h3>What’s in it for you?</h3>
      <ul>
        <li>Enjoy 22 days + Birthday + Carnival Tuesday.</li>
        <li>Participate in team-building activities and events.</li>
        <li>Utilize the best tools and technology for work.</li>
      </ul>
    </div>
  );
}
