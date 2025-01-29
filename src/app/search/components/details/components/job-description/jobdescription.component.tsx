import { ReactElement } from "react";

import styles from "./jobdescription.module.css";

export default function JobdescriptionComponent(): ReactElement {
  return (
    <div className={styles["job-description"]} id="job-description">
      <h2> Job Description</h2>
      <h3>What will make your journey with us unique?</h3>
      <ul>
        <li>
          A supportive manager who cares about your well-being and is invested
          in your professional growth.
        </li>
        <li>
          A culture of continuous learning with clear targets and feedback.
        </li>
        <li>
          A global company with over 2600 employees located in more than 26
          countries, including offices in 3 countries.
        </li>
      </ul>
    </div>
  );
}
