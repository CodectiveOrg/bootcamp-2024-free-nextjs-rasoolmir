"use client";

import { ReactElement, useContext, useState } from "react";
import SelectComponent from "@/components/select/select.component";
import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

const options = [
  { value: "Meta", label: "Meta" },
  { value: "Apple", label: "Apple" },
  { value: "Amazon", label: "Amazon" },
];

export default function CompanyFilterComponent(): ReactElement {
  const { dispatchFilters } = useContext(FiltersContext);
  const [selectedCompany, setSelectedCompany] = useState("Company");

  const changeHandler = (value: string): void => {
    setSelectedCompany(value);
    dispatchFilters({ type: "updated_filter", key: "Company", value });
  };

  return (
    <SelectComponent
      options={options}
      selectedOption={
        options.find((option) => option.value === selectedCompany) || {
          value: "",
          label: selectedCompany,
        }
      }
      onSelectedOptionChange={(option) => changeHandler(option.value)}
    />
  );
}
