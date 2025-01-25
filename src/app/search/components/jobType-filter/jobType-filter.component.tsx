"use client";

import { ReactElement, useContext, useState } from "react";
import SelectComponent from "@/components/select/select.component";
import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

const options = [
  { value: "Full-time", label: "Full-time" },
  { value: "Part-time", label: "Part-time" },
  { value: "Casual", label: "Casual" },
  { value: "Remote", label: "Remote" },
  { value: "Hybrid", label: "Hybrid" },
  { value: "On-site", label: "On-site" },
];

export default function JobTypeFilterComponent(): ReactElement {
  const { dispatchFilters } = useContext(FiltersContext);
  const [selectedJobType, setSelectedJobType] = useState("JobType");

  const changeHandler = (value: string): void => {
    setSelectedJobType(value);
    dispatchFilters({ type: "updated_filter", key: "jobType", value });
  };

  let selectedOption = options.find(
    (option) => option.value === selectedJobType,
  );
  if (!selectedOption) {
    selectedOption = {
      value: "",
      label: selectedJobType,
    };
  }
  return (
    <SelectComponent
      options={options}
      selectedOption={selectedOption}
      onSelectedOptionChange={(option) => changeHandler(option.value)}
    />
  );
}
