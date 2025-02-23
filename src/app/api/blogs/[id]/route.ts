import { blogType } from "@/core/types/blog.type";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(
  process.cwd(),
  "src",
  "core",
  "db",
  "blogs.json"
);

interface IParams {
  id: string;
}

export const GET = async (
  _request: Request,
  { params }: { params: Promise<IParams> }
) => {
  const jsonData = fs.readFileSync(dataFilePath).toString();
  const { blogs } = JSON.parse(jsonData);
  const id = (await params).id;

  const blog = blogs.find((blg: blogType) => blg.id == parseInt(id));
  if (blog) {
    return new Response(JSON.stringify(blog), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({ message: "blog not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }
};
export const PUT = async (
  request: Request,
  { params }: { params: Promise<IParams> }
) => {
  const requestBody = await request.json();

  const jsonData = fs.readFileSync(dataFilePath).toString();
  const { blogs } = JSON.parse(jsonData);
  const id = (await params).id;

  const index = blogs.findIndex((blg: blogType) => blg.id === parseInt(id));

  if (index === -1) {
    return new Response(JSON.stringify({ message: "blog not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }

  blogs[index] = { ...blogs[index], ...requestBody };

  fs.writeFileSync(dataFilePath, JSON.stringify({ blogs }, null, 2));

  return new Response(JSON.stringify(blogs[index]), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
};

export const DELETE = async (
  _request: Request,
  { params }: { params: Promise<IParams> }
) => {
  const jsonData = fs.readFileSync(dataFilePath).toString();
  const { blogs } = JSON.parse(jsonData);
  const id = (await params).id;
  const updatedblogs = blogs.filter((blg: blogType) => blg.id !== parseInt(id));

  if (updatedblogs.length === blogs.length) {
    return new Response(JSON.stringify({ message: "blog not found" }), {
      headers: { "Content-Type": "application/json" },
      status: 404,
    });
  }

  fs.writeFileSync(
    dataFilePath,
    JSON.stringify({ blogs: updatedblogs }, null, 2)
  );

  return new Response(
    JSON.stringify({ message: "blog deleted successfully" }),
    {
      headers: { "Content-Type": "application/json" },
      status: 200,
    }
  );
};
