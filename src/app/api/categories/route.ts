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
  const { categories } = JSON.parse(jsonData);
  return new Response(JSON.stringify(categories), {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
    status: 200,
  });
};

export const POST = async (req: Request) => {
  try {
    const newCategory = await req.json();
    const jsonData = fs.readFileSync(dataFilePath, "utf8");
    const data = JSON.parse(jsonData);

    data.categories.push(newCategory);
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

    return new Response(
      JSON.stringify({ message: "Category added successfully" }),
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
        status: 201,
      }
    );
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      status: 500,
    });
  }
};
