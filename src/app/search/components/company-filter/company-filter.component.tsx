import { ComponentContext } from "@/app/search/providers/filters/filters.provider";

const companyOptions = [
  { value: "all", label: "All" },
  { value: "Meta", label: "Meta" },
  { value: "Apple", label: "Apple" },
  { value: "Amazon", label: "Amazon" },
];

export default function CompanyFilterComponent() {
  return (
    <ComponentContext
      options={companyOptions}
      filterKey="company"
      defaultLabel="company"
      initialValue="Company"
    />
  );
}
