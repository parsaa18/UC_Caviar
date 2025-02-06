"use client";
import { SectionTitle1 } from "@/components/common/SectionTitles/SectionTitles";
import apiFetcher from "@/core/services/api/index.api";
import { productCategoryType } from "@/core/types/product.type";
import useSWR from "swr";
import CatCards from "./Cards";
import {
  ViewCursor,
  ViewedCard,
} from "@/components/common/motion/ViewMoreCursor";
import { useState } from "react";
import { cursorObjType } from "@/core/types/CursorObj/cursorObj.type";

const ProductsCategory = () => {
  const [cursorObj, handleCursorObj] = useState<cursorObjType>({
    isActive: false,
    index: null,
  });
  const { data: categories, error } = useSWR("categories/", apiFetcher);
  console.log(categories);
  return (
    <section className="flex flex-col gap-6">
      <SectionTitle1 titleStart="Products" titleBold="Category" />
      <div className="flex items-center justify-center gap-5">
        {categories?.map((cat: productCategoryType, idx: number) => {
          return (
            <ViewedCard
              key={idx + cat.id}
              index={idx}
              handleCursorObj={handleCursorObj}
            >
              <CatCards
                title={cat.name}
                picture={cat.picture}
                totalItems={cat.productsList.length}
              />
            </ViewedCard>
          );
        })}
        <ViewCursor cursorObj={cursorObj} />
      </div>
    </section>
  );
};

export default ProductsCategory;
