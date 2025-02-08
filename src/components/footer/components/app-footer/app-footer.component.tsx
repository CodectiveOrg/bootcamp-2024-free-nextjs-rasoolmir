import { ReactElement } from "react";

import MingcuteGooglePlayLine from "@/icons/MingcuteGooglePlayLine";
import MingcuteAppleLine from "@/icons/MingcuteAppleLine";

import styles from "./app-footer.module.css";

export default function AppFooterComponent(): ReactElement {
  return (
    <div className={styles.app}>
      <button className={styles["app-button"]}>
        <MingcuteGooglePlayLine /> Google Play
      </button>
      <button className={styles["app-button"]}>
        <MingcuteAppleLine /> App Store
      </button>
    </div>
  );
}
