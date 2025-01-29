import { ReactElement } from "react";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import { jobs } from "@/mock/jobs";

import { FiltersType } from "@/types/filters.type";

import CompanyFilterComponent from "@/app/search/components/company-filter/company-filter.component";
import DatePostedFilterComponent from "@/app/search/components/datePosted-filter/datePosted-filter.component";
import JobTypeFilterComponent from "@/app/search/components/jobType-filter/jobType-filter.component";
import LocationFilterComponent from "@/app/search/components/location-filter/location-filter.component";
import FiltersSummaryComponent from "@/app/search/components/filters-summary/filters-summary.component";
import ListsComponent from "@/app/search/components/lists/list.component";
import DetailsComponent from "@/app/search/components/details/details.component";

import FiltersProvider from "@/app/search/providers/filters/filters.provider";
import JobsProvider from "@/app/search/providers/jobs/jobs.provider";

import styles from "./page.module.css";

type SearchParams = { [key: string]: string | string[] | undefined };

type Props = {
  searchParams: SearchParams;
};

export default function Page({
  searchParams,
}: Props): ReactElement {
  const defaultFilters = generateDefaultFilters(searchParams);

  return (
    <FiltersProvider defaultFilters={defaultFilters}>
      <JobsProvider jobs={jobs}>
        <div className={styles.page}>
          <div className={styles["search-content"]}>
            <GlobalSearchBoxComponent />
            <div className={styles.filters}>
              <CompanyFilterComponent />
              <DatePostedFilterComponent />
              <JobTypeFilterComponent />
              <LocationFilterComponent />
              <FiltersSummaryComponent />
            </div>
          </div>
          <div className={styles.divider}></div>
          <main>
            <ListsComponent />
            <DetailsComponent />
          </main>
        </div>
      </JobsProvider>
    </FiltersProvider>
  );
}

function generateDefaultFilters(searchParams: SearchParams): FiltersType {
  const { query, title, location, company } = searchParams;

  return {
    query: normalizeFilter(query),
    title: normalizeFilter(title),
    location: normalizeFilter(location),
    company: normalizeFilter(company),
  };
}

function normalizeFilter(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}
