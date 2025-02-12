import { ReactElement } from "react";

import styles from "./lodading.module.css";

export default function loading(): ReactElement {
  return (
    <div className={styles.loading}>
      <div className={styles.loader}></div>
    </div>
  );
}
