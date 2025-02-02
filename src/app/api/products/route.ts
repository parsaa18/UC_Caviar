import {
  productCategoryType,
  productDetailType,
  productType,
} from "@/core/types/product.type";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(
  process.cwd(),
  "src",
  "core",
  "db",
  "products.json"
);

export const GET = async () => {
  const jsonData = fs.readFileSync(dataFilePath, "utf8");
  const { products } = JSON.parse(jsonData);
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
};

export const POST = async (req: Request) => {
  try {
    const reqProduct = await req.json();
    const jsonData = fs.readFileSync(dataFilePath, "utf8");
    const data = JSON.parse(jsonData);
    const newProduct: productDetailType = {
      id: data.products.length + 1,
      ...reqProduct,
    };
    data.products.push(newProduct);

    const category = data.categories.find(
      (cat: productCategoryType) => cat.id === newProduct.categoryId
    );
    if (category) {
      category.productsList.push(newProduct);
    } else {
      throw new Error("category not found");
    }

    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    return new Response(
      JSON.stringify({ message: "Product added successfully" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 201,
      }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
};
