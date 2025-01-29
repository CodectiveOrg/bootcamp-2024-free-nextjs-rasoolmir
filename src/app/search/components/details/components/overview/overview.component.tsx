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
            <Image src="/ad1.png" alt="ad image" width={260} height={230} />
          </div>
          <div className={styles["second-image"]}>
            <Image src="/ad2.png" alt="ad image" width={130} height={110} />
            <Image src="/ad3.png" alt="ad image" width={130} height={110} />
            <Image src="/ad4.png" alt="ad image" width={130} height={110} />
            <Image src="/ad5.png" alt="ad image" width={130} height={110} />
          </div>
        </div>
      </div>
    </div>
  );
}
