import { ComponentContext } from "@/app/search/providers/filters/filters.provider";

const datePostedOptions = [
  { value: "all", label: "All" },
  { value: "1d", label: "1d" },
  { value: "2d", label: "2d" },
  { value: "3d", label: "3d" },
];

export default function DatePostedFilterComponent() {
  return (
    <ComponentContext
      options={datePostedOptions}
      filterKey="datePosted"
      defaultLabel="datePosted"
      initialValue="DatePosted"
    />
  );
}
