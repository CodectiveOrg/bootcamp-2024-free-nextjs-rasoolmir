"use client";

import { ReactElement, useContext, useMemo } from "react";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import styles from "./filters-summary.module.css";

export default function FiltersSummaryComponent(): ReactElement | null {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const isEmpty = useMemo(() => {
    return Object.values(filters).every((value) => !value);
  }, [filters]);

  if (isEmpty) return null;

  return (
    <div className={styles["filters-summary"]}>
      <button
        type="button"
        onClick={() => dispatchFilters({ type: "removed_all" })}
      >
        Delete All
      </button>
    </div>
  );
}
