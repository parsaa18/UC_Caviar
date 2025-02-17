"use client";

import ListTitle from "@/components/common/ListTitle";
import HorizontalScrollingCarousel from "@/components/common/motion/HorizontalScroll";
import ListBar from "@/components/Products/Products/ListBar";
import ProductsCard from "@/components/Products/Products/ProductsCard";
import ProductsList from "@/components/Products/Products/ProductsList";
import apiFetcher from "@/core/services/api/fetcher.api";
import useScrollStore from "@/core/store/scroll.store";
import { productCategoryType } from "@/core/types/product.type";
import { useThrottle } from "@/core/utils/scroll.util";
import { useParams } from "next/navigation";
import useSWR from "swr";

const ProductCategoryItems = () => {
  const { category } = useParams();
  const {
    data,
    error,
    isLoading: productLoading,
  } = useSWR("categories/" + category, apiFetcher);

  const { data: categories, isLoading } = useSWR("categories/", apiFetcher);
  const cat = categories?.filter(
    (cat: productCategoryType) => cat.id === category
  )[0];

  const { productLeft: left, setproductLeft: setLeft } = useScrollStore(
    (state) => state
  );

  const handleWheelThrottled = useThrottle((e: React.WheelEvent) => {
    e.preventDefault();
    const size = window.innerWidth > 1024 ? 3 : 2;
    const windowSize = window.innerWidth;
    const newLeft = left + e.deltaY;
    if (
      newLeft >= 0 &&
      newLeft <= (data?.productsList?.length - size) * (windowSize / size + 32)
    ) {
      setLeft(newLeft);
    }
  }, 16);

  return (
    <div
      onWheel={(e) => {
        handleWheelThrottled(e);
      }}
      className="pt-32 h-[calc(100vh-32px)] flex items-center flex-col gap-6 px-6 "
    >
      <>
        <ListTitle
          title={cat?.name}
          titleStart="Products"
          back="Category"
          totalItems={data?.productsList?.length}
        />
        <ListBar />
        <HorizontalScrollingCarousel totalItems={data?.productsList?.length}>
          <ProductsList data={data?.productsList} />
        </HorizontalScrollingCarousel>
        <div className="flex-col flex md:hidden gap-8 pb-8">
          {data?.productsList?.map((product, idx) => {
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
      </>
    </div>
  );
};

export default ProductCategoryItems;
