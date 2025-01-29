import { ReactElement } from "react";

import styles from "./category.module.css";

export default function CategoryComponent(): ReactElement {
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
    <div className={styles.category}>
      {categories.map((category) => (
        <button key={category.id} onClick={() => handleScrollTo(category.id)}>
          {category.label}
        </button>
      ))}
    </div>
  );
}
