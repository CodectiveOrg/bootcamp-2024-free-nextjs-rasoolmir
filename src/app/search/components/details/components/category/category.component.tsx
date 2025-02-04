import { ReactElement } from "react";

import styles from "./category.module.css";

export default function CategoryComponent(): ReactElement {
  return (
    <div className={styles.category}>
      <a href="#job-description">Job-description</a>
      <a href="#requirement">Requiremen</a>
      <a href="#benefit">Benefit</a>
      <a href="#overview">Overview</a>
    </div>
  );
}
