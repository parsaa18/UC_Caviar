"use client";

import Search01Icon from "@/components/icons/Search";
import FilterSelect from "./FilterSelect";
import { useQueryState } from "nuqs";
import { FC } from "react";

interface IProps {
  onClose: () => void;
}

const FilterModal: FC<IProps> = ({ onClose }) => {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  const [packType, setPackType] = useQueryState("pack-type", {
    defaultValue: "",
  });
  const [weight, setWeight] = useQueryState("weight", { defaultValue: "" });

  return (
    <div className="flex flex-col gap-10 w-full mt-6">
      <div className="border-2 border-ucGray rounded-full flex items-center ">
        <input
          type="search"
          name="searchInput"
          id="searchInput"
          placeholder="Search Products..."
          value={search}
          onChange={(value) => setSearch(value.target.value)}
          className="border-none outline-none bg-transparent focus:bg-none w-full h-full mx-6"
        />
        <label htmlFor="searchInput" className="bg-ucGray p-3 rounded-full">
          <Search01Icon width={24} height={24} />
        </label>
      </div>
      <div className="flex flex-col gap-8">
        <FilterSelect
          filterName="Packaging Type"
          setState={setPackType}
          value={packType}
          shortname="Type"
          inputs={[{ label: "DSEJApokap", value: "DSEJApokap" }]}
        />
        <FilterSelect
          filterName="Weight"
          shortname="Weight"
          setState={setWeight}
          value={weight}
          inputs={[
            { label: "50", value: 50 },
            { label: "100", value: 100 },
          ]}
        />
      </div>

      <button
        onClick={onClose}
        className="w-full py-3 rounded-full font-bold font-montrealBold  bg-ucNavyBlue1 text-ucWhite"
      >
        Apply
      </button>
    </div>
  );
};

export default FilterModal;
