"use client";

import { ReactElement, useContext } from "react";
import { JobsContext } from "@/app/search/providers/jobs/jobs.provider";
import Image from "next/image";

import MingcuteBookmarkLine from "@/icons/MingcuteBookmarkLine";
import MingcuteFullscreenFill from "@/icons/MingcuteFullscreenFill";
import MdiLightningBolt from "@/icons/MdiLightningBolt";

import styles from "./details.module.css";

export default function JobDetails(): ReactElement {
  const { filteredJobs, selectedJobId } = useContext(JobsContext);

  const job = filteredJobs.find((job) => job.id === selectedJobId);

  if (!job) {
    return (
      <div className={styles["select-ads"]}>
        No advertisement has been selected. Please select the desired
        advertisement to display
      </div>
    );
  }

  const categories = [
    { id: "job-description", label: "Job Description" },
    { id: "requirement", label: "Requirement" },
    { id: "benefit", label: "Benefit" },
    { id: "overview", label: "Overview" },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={styles.details}>
      <header>
        <div className={styles["header-top"]}>
          <div className={styles.company}>
            <div className={styles["company-image"]}>
              <Image src={job.image} alt="job image" width={32} height={32} />
            </div>
            <span>{job.company}</span>
          </div>
          <div className={styles["header-icons"]}>
            <MingcuteBookmarkLine />
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

      <div className={styles.category}>
        {categories.map((category) => (
          <button key={category.id} onClick={() => handleScrollTo(category.id)}>
            {category.label}
          </button>
        ))}
      </div>

      <div className={styles["job-description"]} id="job-description">
        <h2> Job Description</h2>
        <h3>What will make your journey with us unique?</h3>
        <ul>
          <li>
            A supportive manager who cares about your well-being and is invested
            in your professional growth.
          </li>
          <li>
            A culture of continuous learning with clear targets and feedback.
          </li>
          <li>
            A global company with over 2600 employees located in more than 26
            countries, including offices in 3 countries.
          </li>
        </ul>
      </div>

      <div className={styles["job-description"]} id="requirement">
        <h2> Requirement</h2>
        <h3>What will you do</h3>
        <p>
          As a UX Designer on our team, you will shape user experiences by
          leading the design of key features and projects.
        </p>
        <h3>What You’ll Bring</h3>
        <ul>
          <li>Showcase proficiency in collaborative design environments.</li>
          <li>
            Demonstrated ability to work independently, think critically, and
            maintain meticulous attention to detail.
          </li>
          <li>
            Solid grasp of interactive elements, micro-interactions, and
            animations, contributing to a seamless user experience.
          </li>
        </ul>
      </div>

      <div className={styles["job-description"]} id="benefit">
        <h2>Benefit</h2>
        <h3>Base Pay Range</h3>
        <p>$50.00- $60.00 per/h</p>
        <h3>What’s in it for you?</h3>
        <ul>
          <li>Enjoy 22 days + Birthday + Carnival Tuesday.</li>
          <li>Participate in team-building activities and events.</li>
          <li>Utilize the best tools and technology for work.</li>
        </ul>
      </div>

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
    </div>
  );
}
