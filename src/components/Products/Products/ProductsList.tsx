"use client";

import { productDetailType } from "@/core/types/product.type";
import { FC } from "react";
import ProductsCard from "./ProductsCard";
import { useQueryState } from "nuqs";

interface IProps {
  data: productDetailType[];
}
const chunkArray = (array: productDetailType[], size: number) => {
  const result = [];
  for (let i = 0; i < array?.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const ProductsList: FC<IProps> = ({ data }) => {
  const size = window.innerWidth > 1024 ? 3 : 2;

  const chunkedData = chunkArray(data, size);

  const [search, _setSearch] = useQueryState("search");
  const [packType, _setPackType] = useQueryState("pack-type");
  const [weight, _setWeight] = useQueryState("weight");
  const isFilterActive = search || packType || weight;
  return (
    <>
      {chunkedData.map((chunk, idx) => {
        return (
          <div
            className="w-[calc(100vw-80px)] grid grid-cols-2 lg:grid-cols-3 gap-8 h-full "
            key={idx}
          >
            {chunk
              .filter((product) => {
                if (!isFilterActive) return true;
                const matchesSearch = search
                  ? product.name.toLowerCase().includes(search.toLowerCase())
                  : true;
                const matchesPackType = packType
                  ? product["packing-type"] === packType
                  : true;
                const matchesWeight = weight
                  ? product.weight == parseInt(weight)
                  : true;
                return matchesSearch && matchesPackType && matchesWeight;
              })
              ?.map((product, idx) => {
                const {
                  "packing-type": packType,
                  picture,
                  name,
                  rate,
                  weight,
                  id,
                } = product;
                return (
                  <ProductsCard
                    key={idx}
                    packType={packType}
                    picture={picture[0]}
                    title={name}
                    rate={rate}
                    weight={weight}
                    id={id}
                  />
                );
              })}
          </div>
        );
      })}
    </>
  );
};

export default ProductsList;
