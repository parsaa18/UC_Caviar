import { productCategoryType } from "@/core/types/product.type";
import { FC } from "react";
import CategoryCards from "./CategoryCards";

interface IProps {
  data: productCategoryType[];
}

const CategoryList: FC<IProps> = ({ data }) => {
  return (
    <>
      {data?.map((cat, idx) => {
        return (
          <CategoryCards
            key={idx}
            picture={cat.picture}
            title={cat.name}
            link={cat.id}
            totalItems={cat.productsList.length}
          />
        );
      })}
    </>
  );
};

export default CategoryList;
