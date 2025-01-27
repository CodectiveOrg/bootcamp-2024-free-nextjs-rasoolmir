"use client";

import { ReactElement, useContext } from "react";

import Link from "next/link";

import Image from "next/image";

import MingcuteBookmarkLine from "@/icons/MingcuteBookmarkLine";

import { JobsContext } from "@/app/search/providers/jobs/jobs.provider";

import styles from "./list.module.css";

export default function ListsComponent(): ReactElement {
  const { filteredJobs } = useContext(JobsContext);

  return (
    <ul className={styles.lists}>
      {filteredJobs.map((job) => (
        <li key={job.id}>
          <header>
            <div className={styles.company}>
              <div className={styles["company-image"]}>
                <Image src={job.image} alt="job image" width={24} height={24} />
              </div>
              <span>{job.company}</span>
            </div>
            <MingcuteBookmarkLine />
          </header>
          <div className={styles.details}>
            <Link href={`/job/${job.id}`}>
              <h2>{job.title}</h2>
            </Link>

            <span>
              {job.location} {job.jobType}
            </span>
          </div>
          <footer>
            {job.badges?.map((badge) => (
              <div key={badge} className={styles.badge}>
                {badge}
              </div>
            ))}
            <span>{job.datePosted}</span>
          </footer>
        </li>
      ))}
    </ul>
  );
}
