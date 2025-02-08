import { ReactElement } from "react";

import Image from "next/image";

import detailImage1 from "@/assets/illustrations/detail-image-1.webp";
import detailImage2 from "@/assets/illustrations/detail-image-2.webp";
import detailImage3 from "@/assets/illustrations/detail-image-3.webp";
import detailImage4 from "@/assets/illustrations/detail-image-4.webp";
import detailImage5 from "@/assets/illustrations/detail-image-5.webp";

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
              src={detailImage1}
              alt="detail image 1"
              width={300}
              height={260}
            />
          </div>
          <div className={styles["second-image"]}>
            <Image
              src={detailImage2}
              alt="detail image 2"
              width={170}
              height={130}
            />
            <Image
              src={detailImage3}
              alt="detail image 3"
              width={170}
              height={130}
            />
            <Image
              src={detailImage4}
              alt="detail image 4"
              width={170}
              height={130}
            />
            <Image
              src={detailImage5}
              alt="detail image 5"
              width={170}
              height={130}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
