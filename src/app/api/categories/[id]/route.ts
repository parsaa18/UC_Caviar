import { productCategoryType } from "@/core/types/product.type";
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
  console.log(params);
  const { id } = params;
  const jsonData = fs.readFileSync(dataFilePath, "utf8");
  const data = JSON.parse(jsonData);

  const category = data.categories.find(
    (cat: productCategoryType) => cat.id === id
  );
  if (!category) {
    return new Response(JSON.stringify({ error: "Category not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }
  return new Response(JSON.stringify(category), {
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
    const updatedCategory = await request.json();
    const jsonData = fs.readFileSync(dataFilePath, "utf8");
    const data = JSON.parse(jsonData);

    const index = data.categories.findIndex(
      (cat: productCategoryType) => cat.id === id
    );
    if (index === -1) {
      return new Response(JSON.stringify({ error: "Category not found" }), {
        headers: { "Content-Type": "application/json" },
        status: 404,
      });
    }

    data.categories[index] = updatedCategory;
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    return new Response(
      JSON.stringify({ message: "Category updated successfully" }),
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

    const index = data.categories.findIndex(
      (cat: productCategoryType) => cat.id === id
    );
    if (index === -1) {
      return new Response(JSON.stringify({ error: "Category not found" }), {
        headers: { "Content-Type": "application/json" },
        status: 404,
      });
    }

    data.categories.splice(index, 1);
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    return new Response(
      JSON.stringify({ message: "Category deleted successfully" }),
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
