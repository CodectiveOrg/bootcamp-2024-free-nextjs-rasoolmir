import { ReactElement } from "react";

import MingcuteSearchLine from "@/icons/MingcuteSearchLine";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";

import styles from "./global-search-box.module.css";

export default function GlobalSearchBoxComponent(): ReactElement {
  return (
    <div className={styles["global-search-box"]}>
      <input type="text" placeholder="FrontEnd Developer" />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button>
          <MingcuteLocationLine />
          Iran
        </button>
      </div>
      <div className={styles.prefix}>
        <MingcuteSearchLine />
      </div>
    </div>
  );
}
