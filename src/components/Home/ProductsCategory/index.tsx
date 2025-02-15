"use client";
import { SectionTitle1 } from "@/components/common/SectionTitles/SectionTitles";
import apiFetcher from "@/core/services/api/fetcher.api";
import { productCategoryType } from "@/core/types/product.type";
import useSWR from "swr";
import CatCards from "./Cards";
import {
  ViewCursor,
  ViewedCard,
} from "@/components/common/motion/ViewMoreCursor";
import { useState } from "react";
import { cursorObjType } from "@/core/types/CursorObj/cursorObj.type";
import { div } from "framer-motion/client";
import { Skeleton } from "antd";

const ProductsCategory = () => {
  const [cursorObj, handleCursorObj] = useState<cursorObjType>({
    isActive: false,
    index: null,
  });
  const { data: categories, isLoading } = useSWR("categories/", apiFetcher);
  console.log();

  return (
    <section className="flex flex-col gap-6 w-full">
      <SectionTitle1 titleStart="Products" titleBold="Category" />
      <div className="flex md:flex-row flex-col items-center justify-center gap-5 w-full">
        {isLoading ? (
          <>
            <div className="w-full min-h-[300px] bg-ucGray rounded-[40px]"></div>
            <div className="w-full min-h-[300px] bg-ucGray rounded-[40px]"></div>
          </>
        ) : (
          categories?.map((cat: productCategoryType, idx: number) => {
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
          })
        )}
        <ViewCursor cursorObj={cursorObj} />
      </div>
    </section>
  );
};

export default ProductsCategory;
