import React, { useState, useEffect } from "react";
import jobs from "../../data/jobs.js";
import styles from "./list.module.css";

export default function ListComponent({ selectedFilters }) {
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter((job) => {
        return selectedFilters.every((filter) => {
          return (
            job.JobType === filter ||
            job.Location === filter ||
            job.Company === filter ||
            job.Remote === filter ||
            job.DatePosted === filter
          );
        });
      });
      setFilteredJobs(filtered);
    }
  }, [selectedFilters]);

  return (
    <div className={styles.jobـlist}>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <div key={job.id} className={styles.jobـitem}>
            <div className={styles.Company}>
              <img src={job.Image} alt="job_Image" />
              <p>{job.Company}</p>
            </div>
            <h3>{job.Title}</h3>
            <p>
              {job.Location} {job.JobType}
            </p>
            <div className={styles.other}>
              <p>{job.DatePosted} ago</p>
            </div>
          </div>
        ))
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}
