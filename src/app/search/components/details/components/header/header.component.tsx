"use client";

import { ReactElement, useContext } from "react";
import { JobsContext } from "@/app/search/providers/jobs/jobs.provider";
import Image from "next/image";

import BookMarkComponent from "@/components/bookmark-icon/book-mark.component";
import MingcuteFullscreenFill from "@/icons/MingcuteFullscreenFill";
import MdiLightningBolt from "@/icons/MdiLightningBolt";

import { notFound } from "next/navigation";

import styles from "./header.module.css";

export default function HeaderComponent(): ReactElement {
  const { job } = useContext(JobsContext);

  if (!job) {
    return notFound();
  }

  return (
    <header className={styles.header}>
      <div className={styles["header-top"]}>
        <div className={styles.company}>
          <div className={styles["company-image"]}>
            <Image src={job.image} alt="logo company" width={32} height={32} />
          </div>
          <span>{job.company}</span>
        </div>
        <div className={styles["header-icons"]}>
          <BookMarkComponent />
          <MingcuteFullscreenFill />
        </div>
      </div>

      <div className={styles["header-title"]}>
        <div className={styles.title}>
          <h2>{job.title}</h2>
          <span>
            {job.location} {job.jobType}
          </span>
        </div>
        <button className={styles.cta}>
          <MdiLightningBolt />
          {job.badges?.map((badge) => (
            <div key={badge} className={styles.badge}>
              {badge}
            </div>
          ))}
        </button>
      </div>
      <div className={styles["header-bottom"]}>
        <h3>Where you do it:</h3>
        <p>Maya</p>
        <h3>The Interview Process:</h3>{" "}
        <p>It will have 2 stages that include a 45 min HR chat</p>
        <h3>Tools:</h3> <p>Figma</p>
        <h3>Reporting to:</h3>
        <p>Design Manager, Bruno Mota</p>
        <h3>Your team:</h3>
        <p>You will mainly be part of a UX Designer’s team</p>
      </div>
    </header>
  );
}
