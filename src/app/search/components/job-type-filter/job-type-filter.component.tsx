import { ComponentContext } from "@/app/search/providers/filters/filters.provider";

const jobTypeOptions = [
  { value: "all", label: "All" },
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Casual", label: "Casual" },
  { value: "Remote", label: "Remote" },
  { value: "Hybrid", label: "Hybrid" },
  { value: "On-site", label: "On-site" },
];

export default function JobTypeFilterComponent() {
  return (
    <ComponentContext
      options={jobTypeOptions}
      filterKey="jobType"
      defaultLabel="jobType"
      initialValue="JobType"
    />
  );
}
