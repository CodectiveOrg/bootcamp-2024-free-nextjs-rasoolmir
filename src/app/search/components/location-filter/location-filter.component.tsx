import { ComponentContext } from "@/app/search/providers/filters/filters.provider";

const locationOptions = [
  { value: "all", label: "All" },
  { value: "Iran", label: "Iran" },
  { value: "Canada", label: "Canada" },
  { value: "Germany", label: "Germany" },
];

export default function LocationFilterComponent() {
  return (
    <ComponentContext
      options={locationOptions}
      filterKey="location"
      defaultLabel="location"
      initialValue="Location"
    />
  );
}
