import { ReactElement } from "react";

import Image from "next/image";

import notFoundImage from "@/assets/illustrations/not-found.webp";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import styles from "./not-found.module.css";

export default function NotFound(): ReactElement {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.writings}>
        <div className={styles["status-code"]}>404</div>
        <h1>Oops! Page Not Found</h1>
        <p>
          Sorry, Find new opportunities and manage Your job search progress
          here.
        </p>
      </div>
      <div className={styles.visuals}>
        <Image src={notFoundImage} alt="" />
      </div>
      <div className={styles.search}>
        <GlobalSearchBoxComponent />
      </div>
    </div>
  );
}
