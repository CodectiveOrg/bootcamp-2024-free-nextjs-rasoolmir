"use client";

import { ReactElement, useContext, useState } from "react";

import Image from "next/image";

import MingcuteBookmarkLine from "@/icons/MingcuteBookmarkLine";

import { JobsContext } from "@/app/search/providers/jobs/jobs.provider";

import { JobModel } from "@/models/job.model";

import styles from "./list.module.css";

export default function ListsComponent(): ReactElement {
  const { filteredJobs, setJob } = useContext(JobsContext);

  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const handleJobClick = (job: JobModel) => {
    setSelectedJob(job.id);
    setJob(job);
  };

  return (
    <ul className={styles.lists}>
      {filteredJobs.map((job) => (
        <li
          key={job.id}
          onClick={() => handleJobClick(job)}
          className={job.id === selectedJob ? styles.selected : ""}
        >
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
            <h2>{job.title}</h2>
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
