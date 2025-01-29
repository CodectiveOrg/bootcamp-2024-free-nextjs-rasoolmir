"use client";

import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { JobModel } from "@/models/job.model";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

type ContextValue = {
  filteredJobs: JobModel[];
  selectedJobId: string | null;
  setSelectedJobId: (id: string | null) => void;
};

export const JobsContext = createContext<ContextValue>({
  filteredJobs: [],
  selectedJobId: null, 
  setSelectedJobId: () => {},
});

type Props = PropsWithChildren & {
  jobs: JobModel[];

};

export default function JobsProvider({ children, jobs }: Props): ReactElement {
  const { filters } = useContext(FiltersContext);

  const [filteredJobs, setFilteredJobs] = useState<JobModel[]>([]);
  const [selectedJobId, setSelectedJobId] = useState<string | null>(null);


  const isVisible = useCallback(
    (job: JobModel): boolean => {
      return (
        doesJobInclude(job, filters.query) &&
        doesInclude(job.title, filters.title) &&
        doesInclude(job.location, filters.location) &&
        doesInclude(job.company, filters.company) &&
        doesInclude(job.jobType, filters.jobType) &&
        doesInclude(job.datePosted, filters.datePosted)
      );
    },
    [filters],
  );

  useEffect(() => {
    setFilteredJobs(jobs.filter(isVisible));
  }, [isVisible, jobs]);

  return (
  <JobsContext.Provider
    value={{
      filteredJobs,
      selectedJobId,
      setSelectedJobId,
    }}
    >
    {children}
  </JobsContext.Provider>
  );
}

function doesJobInclude(job: JobModel, query?: string): boolean {
  if (!query) {
    return true;
  }

  return doesSomeInclude([job.title, job.company, job.location], query);
}

function doesSomeInclude(items: string[], query?: string): boolean {
  if (!query) {
    return true;
  }

  return items.some((item) => doesInclude(item, query));
}

function doesInclude(item: string, query?: string): boolean {
  if (!query) {
    return true;
  }

  return item.toLowerCase().includes(query.toLowerCase());
}