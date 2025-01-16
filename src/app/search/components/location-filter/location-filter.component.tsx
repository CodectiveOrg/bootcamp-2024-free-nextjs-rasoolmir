"use client";

import { ReactElement, useContext, useState } from "react";

import SelectComponent from "@/components/select/select.component";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

const options = [
  { value: "Iran", label: "Iran" },
  { value: "Canada", label: "Canada" },
  { value: "Germany", label: "Germany" },
];

export default function LocationFilterComponent(): ReactElement {
  const { dispatchFilters } = useContext(FiltersContext);
  const [selectedLocation, setSelectedLocation] = useState("Location");

  const changeHandler = (value: string): void => {
    setSelectedLocation(value);
    dispatchFilters({ type: "updated_filter", key: "location", value });
  };

  return (
    <SelectComponent
      options={options}
      selectedOption={
        options.find((option) => option.value === selectedLocation) || {
          value: "",
          label: selectedLocation,
        }
      }
      onSelectedOptionChange={(option) => changeHandler(option.value)}
    />
  );
}
