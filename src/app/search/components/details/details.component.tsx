"use client";

import { ReactElement, useContext } from "react";
import { JobsContext } from "@/app/search/providers/jobs/jobs.provider";

import Image from "next/image";

import advertisementSelect from "@/assets/illustrations/advertisement-select.webp";

import HeaderComponent from "@/app/search/components/details/components/header/header.component";
import CategoryComponent from "@/app/search/components/details/components/category/category.component";
import JobdescriptionComponent from "@/app/search/components/details/components/job-description/job-description.component";
import RequirementComponent from "@/app/search/components/details/components/requirement/requirement.component";
import BenefitComponent from "@/app/search/components/details/components/benefit/benefit.component";
import OverviewComponent from "@/app/search/components/details/components/overview/overview.component";

import styles from "./details.module.css";

export default function DetailsComponent(): ReactElement {
  const { job } = useContext(JobsContext);

  if (!job) {
    return (
      <div className={styles["select-ads"]}>
        <Image
          src={advertisementSelect}
          alt="advertisement image"
          width={300}
          height={261}
        />
        <p>
          No advertisement has been selected.
          <br /> Please select the desired advertisement to display
        </p>
      </div>
    );
  }

  return (
    <div className={styles.details}>
      <HeaderComponent />
      <CategoryComponent />
      <JobdescriptionComponent />
      <RequirementComponent />
      <BenefitComponent />
      <OverviewComponent />
    </div>
  );
}
