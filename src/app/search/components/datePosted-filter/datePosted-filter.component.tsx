"use client";

import { ReactElement, useContext, useState } from "react";

import SelectComponent from "@/components/select/select.component";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

const options = [
  { value: "1d", label: "1d" },
  { value: "2d", label: "2d" },
  { value: "3d", label: "3d" },
];

export default function DatePostedFilterComponent(): ReactElement {
  const { dispatchFilters } = useContext(FiltersContext);
  const [selectedDatePosted, setSelectedDatePosted] = useState("DatePosted");

  const changeHandler = (value: string): void => {
    setSelectedDatePosted(value);
    dispatchFilters({ type: "updated_filter", key: "datePosted", value });
  };

  return (
    <SelectComponent
      options={options}
      selectedOption={
        options.find((option) => option.value === selectedDatePosted) || {
          value: "",
          label: selectedDatePosted,
        }
      }
      onSelectedOptionChange={(option) => changeHandler(option.value)}
    />
  );
}
