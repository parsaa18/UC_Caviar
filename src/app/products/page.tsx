import ListTitle from "@/components/common/ListTitle";
import CategoryList from "@/components/Products/CategoryList";

import apiFetcher from "@/core/services/api/fetcher.api";

const ProductsCategory = async () => {
  const data = await apiFetcher("categories/");
  return (
    <div className="pt-32 h-[calc(100vh-32px)] flex items-center flex-col gap-16 p-6">
      <ListTitle title="Products" titleStart="Our" totalItems={data?.length} />
      <div className="flex md:flex-row flex-col gap-8 h-full">
        <CategoryList data={data} />
      </div>
    </div>
  );
};

export default ProductsCategory;
