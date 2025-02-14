import Cancel01Icon from "@/components/icons/X";
import { Select, SelectProps } from "antd";
import "./ant.css";
import { Dispatch, FC, SetStateAction } from "react";

interface IProps {
  filterName: string;
  shortname: string;
  value: string;
  inputs: { label: string; value: string | number }[];
  setState: Dispatch<SetStateAction<any>>;
}

const labelRender: SelectProps["labelRender"] = (props) => {
  const { label, value } = props;

  if (label) {
    return value;
  }
  return <span>Choose...</span>;
};

const FilterSelect: FC<IProps> = ({
  filterName,
  inputs,
  shortname,
  setState,
  value,
}) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full flex justify-between items-center">
        <h4 className="text-sm ">{filterName}</h4>
        <div
          onClick={() => {
            setState("");
          }}
          className="text-xs cursor-pointer text-ucRed flex items-center"
        >
          <Cancel01Icon width={16} height={16} />
          Cancel
        </div>
      </div>
      <Select
        labelRender={labelRender}
        defaultValue="1"
        popupClassName="bg-ucWhite"
        placeholder={shortname}
        style={{ width: "100%" }}
        value={value}
        onChange={(value) => {
          setState(value);
        }}
        options={inputs}
      />
    </div>
  );
};

export default FilterSelect;
