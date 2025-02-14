import Modal from "@/components/common/Modal";
import Cancel01Icon from "@/components/icons/X";
import { useState } from "react";
import FilterModal from "./FilterModal";
import { useQueryState } from "nuqs";

const ListBar = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [_search, setSearch] = useQueryState("search");
  const [_packType, setPackType] = useQueryState("pack-type");
  const [_weight, setWeight] = useQueryState("weight");
  return (
    <div className="flex items-center justify-between w-full">
      <div
        className="flex rounded-full bg-ucGray py-2 px-4 cursor-pointer"
        onClick={() => setModalOpen(true)}
      >
        Filter
      </div>
      <p className="text-sm">Scroll to see more...</p>
      <Modal
        isOpen={isModalOpen}
        width={466}
        theme="white"
        onClose={() => setModalOpen(false)}
        titleExtra={
          <div
            onClick={() => {
              setSearch("");
              setPackType("");
              setWeight("");
            }}
            className="text-xs text-ucRed cursor-pointer flex items-center"
          >
            <Cancel01Icon width={16} height={16} />
            Cancel All
          </div>
        }
        title="ّFilter"
      >
        <FilterModal
          onClose={() => {
            setModalOpen(false);
          }}
        />
      </Modal>
    </div>
  );
};

export default ListBar;
