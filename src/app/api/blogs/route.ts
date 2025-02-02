import fs from "fs";
import path from "path";

const dataFilePath = path.join(
  process.cwd(),
  "src",
  "core",
  "db",
  "blogs.json"
);

export const GET = async () => {
  const jsonData = fs.readFileSync(dataFilePath).toString();
  const { blogs } = JSON.parse(jsonData);

  return new Response(JSON.stringify(blogs), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
};
export const POST = async (request: Request) => {
  const reqbody = await request.json();

  const jsonData = fs.readFileSync(dataFilePath).toString();
  const data = JSON.parse(jsonData);

  const newBlog = {
    id: data.blogs.length + 1,
    ...reqbody,
  };

  data.blogs.push(newBlog);
  fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

  return new Response(JSON.stringify(newBlog), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
};
