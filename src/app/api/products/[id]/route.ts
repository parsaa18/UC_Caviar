import {
  productCategoryType,
  productDetailType,
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

type paramsType = { id: string };

export const GET = async (
  _request: Request,
  { params }: { params: Promise<paramsType> }
) => {
  const id = (await params).id;

  const jsonData = fs.readFileSync(dataFilePath, "utf8");
  const data = JSON.parse(jsonData);
  const product = data.products.find(
    (prod: productDetailType) => prod.id == parseInt(id)
  );
  if (!product) {
    return new Response(JSON.stringify({ error: "Product not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }
  return new Response(JSON.stringify(product), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
};

export const PUT = async (
  request: Request,
  { params }: { params: Promise<paramsType> }
) => {
  try {
    const id = (await params).id;

    const updatedProduct = await request.json();
    const jsonData = fs.readFileSync(dataFilePath, "utf8");
    const data = JSON.parse(jsonData);

    const prodIndex = data.products.findIndex(
      (prod: productDetailType) => prod.id == parseInt(id)
    );
    if (prodIndex === -1) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        headers: { "Content-Type": "application/json" },
        status: 404,
      });
    }

    const oldProduct = data.products[prodIndex];

    data.products[prodIndex] = updatedProduct;

    const oldCategory = data.categories.find(
      (cat: productCategoryType) => cat.id === oldProduct.categoryId
    );
    if (oldCategory) {
      oldCategory.productsList = oldCategory.productsList.filter(
        (prod: productDetailType) => prod.id !== parseInt(id)
      );
    }

    const newCategory = data.categories.find(
      (cat: productCategoryType) => cat.id === updatedProduct.categoryId
    );
    if (newCategory) {
      newCategory.productsList.push(updatedProduct);
    } else {
    }

    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    return new Response(
      JSON.stringify({ message: "Product updated successfully" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
};

export const DELETE = async (
  _request: Request,
  { params }: { params: Promise<paramsType> }
) => {
  try {
    const id = (await params).id;

    const jsonData = fs.readFileSync(dataFilePath, "utf8");
    const data = JSON.parse(jsonData);

    const prodIndex = data.products.findIndex(
      (prod: productDetailType) => prod.id === parseInt(id)
    );
    if (prodIndex === -1) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        headers: { "Content-Type": "application/json" },
        status: 404,
      });
    }

    const productToDelete = data.products[prodIndex];

    data.products.splice(prodIndex, 1);
    const category = data.categories.find(
      (cat: productCategoryType) => cat.id === productToDelete.categoryId
    );
    if (category) {
      category.productsList = category.productsList.filter(
        (prod: productDetailType) => prod.id !== parseInt(id)
      );
    }

    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    return new Response(
      JSON.stringify({ message: "Product deleted successfully" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
};
