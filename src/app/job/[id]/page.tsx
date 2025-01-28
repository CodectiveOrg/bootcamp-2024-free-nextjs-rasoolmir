import { ReactElement } from "react";

import Image from "next/image";

import { notFound } from "next/navigation";

import MingcuteBookmarkLine from "@/icons/MingcuteBookmarkLine";

import { jobs } from "@/mock/jobs";

import { JobModel } from "@/models/job.model";

import styles from "./page.module.css";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props): Promise<ReactElement> {
  const job = await getJob(params.id);

  if (!job) {
    return notFound();
  }
  return (
    <div className={styles.page}>
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
    </div>
  );

  async function getJob(id: string): Promise<JobModel | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const result = jobs.find((x): boolean => x.id === id);
        resolve(result);
      }, 4000);
    });
  }
}
