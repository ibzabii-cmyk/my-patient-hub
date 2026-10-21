
import { SlidersHorizontal, RotateCcw } from "lucide-react";

export const initialFilters = {
  specialty: "",
  gender: "",
  condition: "",
  language: "",
  ages: [],
  online: false,
  primary: false,
};

const filterOptions = [
  {
    key: "specialty",
    label: "Specialty",
    options: ["Doctor", "Surgeon"],
  },
  {
    key: "gender",
    label: "Gender",
    options: ["Male", "Female"],
  },
  {
    key: "condition",
    label: "Condition",
    options: ["Family Doctor", "Emergency"],
  },
  {
    key: "language",
    label: "Languages",
    options: ["English", "Hindi", "German", "Pashto"],
  },
];

function ClinicFilters({ filters, onChange, onClear }) {
  const updateFilter = (key, value) => {
    onChange({
      ...filters,
      [key]: value,
    });
  };

  const toggleAge = (age) => {
    const ages = filters.ages.includes(age)
      ? filters.ages.filter((item) => item !== age)
      : [...filters.ages, age];

    updateFilter("ages", ages);
  };

  return (
    <aside className="w-full space-y-5 lg:w-64 lg:shrink-0">
      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-lg font-bold text-gray-800">
            <SlidersHorizontal size={19} className="text-pink-600" />
            Filter By
          </h2>

          <button
            type="button"
            onClick={onClear}
            className="flex items-center gap-1 text-xs font-semibold text-pink-600 hover:underline"
          >
            <RotateCcw size={14} />
            Clear
          </button>
        </div>

        <div className="space-y-4">
          {filterOptions.map((filter) => (
            <div key={filter.key}>
              <label
                htmlFor={`filter-${filter.key}`}
                className="mb-1 block text-xs font-medium text-gray-500"
              >
                {filter.label}
              </label>

              <select
                id={`filter-${filter.key}`}
                value={filters[filter.key]}
                onChange={(e) =>
                  updateFilter(filter.key, e.target.value)
                }
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-3 text-sm text-gray-700 outline-none transition focus:border-pink-500 focus:ring-2 focus:ring-pink-100"
              >
                <option value="">All {filter.label}</option>

                {filter.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <h3 className="mb-4 font-semibold text-gray-800">
          Providers Who Treat
        </h3>

        <div className="space-y-3">
          {["All Ages", "Children", "Adults"].map((age) => (
            <label
              key={age}
              className="flex cursor-pointer items-center gap-3 text-sm text-gray-600"
            >
              <input
                type="checkbox"
                checked={filters.ages.includes(age)}
                onChange={() => toggleAge(age)}
                className="h-4 w-4 accent-pink-600"
              />
              {age}
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <h3 className="mb-4 font-semibold text-gray-800">
          View Only
        </h3>

        <div className="space-y-3">
          <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={filters.online}
              onChange={(e) =>
                updateFilter("online", e.target.checked)
              }
              className="h-4 w-4 accent-pink-600"
            />
            Online Scheduling
          </label>

          <label className="flex cursor-pointer items-center gap-3 text-sm text-gray-600">
            <input
              type="checkbox"
              checked={filters.primary}
              onChange={(e) =>
                updateFilter("primary", e.target.checked)
              }
              className="h-4 w-4 accent-pink-600"
            />
            Primary Care
          </label>
        </div>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-pink-500 to-purple-700 p-6 text-white shadow-sm">
        <h3 className="text-xl font-bold">Download</h3>
        <p className="mt-2 text-sm font-medium">
          MyPIHUB Mobile App
        </p>

        <div className="mt-5 flex gap-2">
          <span className="flex-1 rounded-lg bg-white px-3 py-2 text-center text-xs font-semibold text-gray-700">
            App Store
          </span>
          <span className="flex-1 rounded-lg bg-white px-3 py-2 text-center text-xs font-semibold text-gray-700">
            Google Play
          </span>
        </div>
      </div>
    </aside>
  );
}

export default ClinicFilters;
