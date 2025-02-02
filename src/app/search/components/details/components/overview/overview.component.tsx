import { ReactElement } from "react";

import Image from "next/image";

import styles from "./overview.module.css";

export default function OverviewComponent(): ReactElement {
  return (
    <div className={styles.overview} id="overview">
      <h2> Overview</h2>

      <div className={styles["overview-details"]}>
        <div className={styles["details-text"]}>
          <div className={styles["first-text"]}>
            <h3>Size</h3> <p>510 to 1000 Employees</p>
            <h3>Type</h3> <p>Company - Private</p>
            <h3>Sector</h3> <p>Financial Service</p>
          </div>
          <div className={styles["second-text"]}>
            <h3>Founded</h3> <p>1999</p>
            <h3>Industry</h3> <p>Financial Transaction </p>
            <h3>Revenue</h3> <p>$5 to $25 milion </p>
          </div>
        </div>
        <div className={styles["overview-images"]}>
          <div className={styles["first-image"]}>
            <Image
              src="/images/detail-image-1.png"
              alt="detail image 1"
              width={260}
              height={230}
            />
          </div>
          <div className={styles["second-image"]}>
            <Image
              src="/images/detail-image-2.png"
              alt="detail image 2"
              width={130}
              height={110}
            />
            <Image
              src="/images/detail-image-3.png"
              alt="detail image 3"
              width={130}
              height={110}
            />
            <Image
              src="/images/detail-image-4.png"
              alt="detail image 4"
              width={130}
              height={110}
            />
            <Image
              src="/images/detail-image-5.png"
              alt="detail image 5"
              width={130}
              height={110}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
