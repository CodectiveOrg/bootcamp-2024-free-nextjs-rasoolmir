"use client";

import { ReactElement, useState } from "react";
import FiltersComponent from "./components/filter/filter.component";
import ListComponent from "./components/list/listcomponent";
import DetailsComponent from "./components/details/detailscomponent";
import style from "./page.module.css";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import jobs from "./data/jobs.js";

export default function Page(): ReactElement {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className={style.page}>
      <div className={style.searh_content}>
        <aside>
          <GlobalSearchBoxComponent />
          <FiltersComponent
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </aside>
      </div>
      <div className={style.divider}></div>
      <main className={style.main}>
        <ListComponent
          selectedFilters={selectedFilters}
          setSelectedJob={setSelectedJob}
        />
        <DetailsComponent />
      </main>
    </div>
  );
}
