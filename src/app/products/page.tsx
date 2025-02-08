import ListTitle from "@/components/common/ListTitle";
import HorizontalScrollingCarousel from "@/components/common/motion/HorizontalScroll";
import CategoryList from "@/components/Products/CategoryList";

import apiFetcher from "@/core/services/api/fetcher.api";

const ProductsCategory = async () => {
  const data = await apiFetcher("categories/");
  return (
    <div className="mt-32 flex items-center flex-col gap-16">
      <ListTitle title="Products" titleStart="Our" totalItems={data?.length} />
      <HorizontalScrollingCarousel>
        <CategoryList data={data} />
      </HorizontalScrollingCarousel>
    </div>
  );
};

export default ProductsCategory;
