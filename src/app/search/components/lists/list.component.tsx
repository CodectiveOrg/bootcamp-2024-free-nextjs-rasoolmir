"use client";

import { ReactElement, useContext } from "react";

import Link from "next/link";

import Image from "next/image";

import MingcuteBookmarkLine from "@/icons/MingcuteBookmarkLine";

import { JobsContext } from "@/app/search/providers/jobs/jobs.provider";

import styles from "./list.module.css";

export default function ListsComponent(): ReactElement {
  const { filteredJobs, setSelectedJobId } = useContext(JobsContext);

  return (
    <ul className={styles.lists}>
      {filteredJobs.map((job) => (
        <li key={job.id}>
          <header>
            <div className={styles.company}>
              <div className={styles["company-image"]}>
                <Image
                  src={job.image}
                  alt="logo company"
                  width={24}
                  height={24}
                />
              </div>
              <span>{job.company}</span>
            </div>
            <MingcuteBookmarkLine />
          </header>
          <div className={styles.details}>
            <h2
              onClick={() => setSelectedJobId(job.id)}
              className={styles["desktop-link"]}
            >
              {job.title}
            </h2>

            <Link href={`/job/${job.id}`} className={styles["mobile-link"]}>
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
