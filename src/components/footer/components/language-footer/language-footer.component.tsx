"use client";

import { ReactElement, useState } from "react";

import SelectComponent from "@/components/select/select.component";

import { SelectOptionType } from "@/types/select-option.type";

const options: SelectOptionType[] = [
  { value: "en", label: "English" },
  { value: "fa", label: "فارسی" },
];

export default function LanguageFooterComponent(): ReactElement {
  const [selectedlanguage, setSelectedlanguage] = useState("language");
  const changeHandler = (value: string): void => {
    setSelectedlanguage(value);
  };

  let selectedOption = options.find(
    (option) => option.value === selectedlanguage,
  );
  if (!selectedOption) {
    selectedOption = {
      value: "",
      label: selectedlanguage,
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
