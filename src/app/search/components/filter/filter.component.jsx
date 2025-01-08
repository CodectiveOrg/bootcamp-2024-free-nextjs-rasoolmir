import { useState, useCallback } from "react";
import styles from "./filter.module.css";

export default function FiltersComponent({
  selectedFilters,
  setSelectedFilters,
}) {
  const [dropdownStates, setDropdownStates] = useState({});

  const toggleDropdown = (label) => {
    setDropdownStates((prev) => ({
      ...prev,
      [label]: { ...prev[label], isOpen: !prev[label]?.isOpen },
    }));
  };

  const handleOptionClick = useCallback(
    (label, option) => {
      setDropdownStates((prev) => ({
        ...prev,
        [label]: { ...prev[label], selectedOption: option, isOpen: false },
      }));
      setSelectedFilters((prevFilters) =>
        prevFilters.includes(option)
          ? prevFilters.filter((f) => f !== option)
          : [...prevFilters, option],
      );
    },
    [setSelectedFilters],
  );

  const dropdowns = [
    {
      label: "JobType",
      options: ["Full-time", "Part-time", "Casual"],
    },
    {
      label: "Remote",
      options: ["Remote", "Hybrid", "On-site"],
    },
    {
      label: "DatePosted",
      options: ["1d", "2d", "3d"],
    },
    {
      label: "Company",
      options: ["Meta", "Apple", "Amazon"],
    },
    {
      label: "Location",
      options: ["Iran", "Canada", "Germany"],
    },
  ];

  return (
    <div className={styles.filters}>
      <div className={styles.dropdown_container}>
        {dropdowns.map((dropdown, index) => (
          <div key={index} className={styles.dropdown}>
            <button
              onClick={() => toggleDropdown(dropdown.label)}
              className={styles.dropdown_button}
            >
              {dropdownStates[dropdown.label]?.selectedOption || dropdown.label}
            </button>
            {dropdownStates[dropdown.label]?.isOpen && (
              <ul className={styles.dropdown_menu}>
                {dropdown.options.map((option, index) => (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(dropdown.label, option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
