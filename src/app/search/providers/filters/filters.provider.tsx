"use client";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  useReducer,
  useState,
  useContext,
} from "react";

import {
  FiltersAction,
  filtersReducer,
} from "@/app/search/reducers/filters.reducer";

import SelectComponent from "@/components/select/select.component";

import { FiltersType } from "@/types/filters.type";

import { SelectOptionType } from "@/types/select-option.type";

type Value = {
  filters: FiltersType;
  dispatchFilters: Dispatch<FiltersAction>;
};

export const FiltersContext = createContext<Value>({
  filters: {},
  dispatchFilters: () => {},
});

type Props = PropsWithChildren & {
  defaultFilters: FiltersType;
};

export default function FiltersProvider({
  children,
  defaultFilters,
}: Props): ReactElement {
  const [filters, dispatchFilters] = useReducer(filtersReducer, defaultFilters);

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}

type ComponentFilterProps = {
  options: SelectOptionType[];
  filterKey: keyof FiltersType;
  defaultLabel: string;
  initialValue?: string;
};

export function ComponentContext({
  options,
  filterKey,
  initialValue = "",
}: ComponentFilterProps) {
  const { dispatchFilters } = useContext(FiltersContext);
  const [selectedValue, setSelectedValue] = useState<string>(initialValue);

  const changeHandler = (value: string): void => {
    setSelectedValue(value);
    if (value === "all") {
      dispatchFilters({ type: "updated_filter", key: filterKey, value: "" });
    } else {
      setSelectedValue(value);
      dispatchFilters({ type: "updated_filter", key: filterKey, value });
    }
  };

  const selectedOption = options.find(
    (SelectOptionType) => SelectOptionType.value === selectedValue,
  ) || {
    value: "",
    label: selectedValue,
  };

  return (
    <SelectComponent
      options={options}
      selectedOption={selectedOption}
      onSelectedOptionChange={(SelectOptionType) =>
        changeHandler(SelectOptionType.value)
      }
    />
  );
}
