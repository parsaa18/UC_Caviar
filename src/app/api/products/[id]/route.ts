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
  { params }: { params: paramsType }
) => {
  const { id } = params;
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
  { params }: { params: paramsType }
) => {
  try {
    const { id } = params;
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

    // Save the old product to compare categories.
    const oldProduct = data.products[prodIndex];

    // Update the product globally.
    data.products[prodIndex] = updatedProduct;

    // --- Update categories ---
    // Remove product from its old category's products list.
    const oldCategory = data.categories.find(
      (cat: productCategoryType) => cat.id === oldProduct.categoryId
    );
    if (oldCategory) {
      oldCategory.productsList = oldCategory.productsList.filter(
        (prod: productDetailType) => prod.id !== parseInt(id)
      );
    }

    // Add the updated product to its (possibly new) category.
    const newCategory = data.categories.find(
      (cat: productCategoryType) => cat.id === updatedProduct.categoryId
    );
    if (newCategory) {
      newCategory.productsList.push(updatedProduct);
    } else {
      // Optionally handle missing new category.
    }
    // --- End update categories ---

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
  { params }: { params: paramsType }
) => {
  try {
    const { id } = params;
    const jsonData = fs.readFileSync(dataFilePath, "utf8");
    const data = JSON.parse(jsonData);

    // Find product index.
    const prodIndex = data.products.findIndex(
      (prod: productDetailType) => prod.id === parseInt(id)
    );
    if (prodIndex === -1) {
      return new Response(JSON.stringify({ error: "Product not found" }), {
        headers: { "Content-Type": "application/json" },
        status: 404,
      });
    }

    // Get the product to know its category.
    const productToDelete = data.products[prodIndex];

    // Remove from global products list.
    data.products.splice(prodIndex, 1);

    // Remove the product from its category's products list.
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
