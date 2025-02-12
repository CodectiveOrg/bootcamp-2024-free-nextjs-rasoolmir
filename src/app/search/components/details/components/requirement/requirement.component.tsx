import { ReactElement } from "react";

import styles from "./requirement.module.css";

export default function RequirementComponent(): ReactElement {
  return (
    <div className={styles.requirement} id="requirement">
      <h2> Requirement</h2>
      <h3>What will you do</h3>
      <p>
        As a UX Designer on our team, you will shape user experiences by leading
        the design of key features and projects.
      </p>
      <h3>What You’ll Bring</h3>
      <ul>
        <li>Showcase proficiency in collaborative design environments.</li>
        <li>
          Demonstrated ability to work independently, think critically, and
          maintain meticulous attention to detail.
        </li>
        <li>
          Solid grasp of interactive elements, micro-interactions, and
          animations, contributing to a seamless user experience.
        </li>
      </ul>
    </div>
  );
}
