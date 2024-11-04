import BackButton from "@/components/Back-Button";
import ButtonActions from "@/components/Button-Actions";
import db from "../../../lib/db";
import { FC } from "react";

// Data fetching function
const fetchPost = async (id: string) => {
  const response = await db.post.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      title: true,
      description: true,
      tag: true,
    },
  });
  return response;
};

// Server Component
const BlogDetails: FC<{ params: { id: string } }> = async ({ params }) => {
  const post = await fetchPost(params.id);

  return (
    <div>
      <BackButton />
      <div className="mb-6">
        <h2 className="text-2xl font-bold my-4 uppercase">{post?.title}</h2>
        <ButtonActions id={post?.id || ""} />
      </div>
      <div>
        <p
          className={`inline-block bottom-3 left-3 text-sm text-white px-4 py-[2px] rounded-full  ${
            post?.tag.name === "php"
              ? "bg-blue-400"
              : post?.tag.name === "javascript"
              ? "bg-yellow-400"
              : post?.tag.name === "python"
              ? "bg-green-400"
              : "bg-gray-400" // Default color
          }`}
        >
          {post?.tag.name}
        </p>
      </div>
      <p className="text-gray-700 mt-2">{post?.description}</p>
    </div>
  );
};

export default BlogDetails;
