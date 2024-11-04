"use client"
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { tag } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface PostProps {
  posts: {
    id: string;
    title: string;
    description: string;
    tag: tag;
  };
}

const PostCard = ({ posts }: PostProps) => {
  const { data: AllPosts } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await axios.get("/api/getAllPosts");
      return response.data;
    },
  });

  console.log(AllPosts);

  return (
    <Card className="flex flex-col relative">
      <CardHeader>
        <CardTitle>{posts.title}</CardTitle>
        <CardDescription>{posts.description.slice(0, 40)}</CardDescription>
        <p
          className={`absolute bottom-3 left-3 text-sm text-white px-4 py-[2px] rounded-full ${
            posts.tag.name === "php"
              ? "bg-blue-400"
              : posts.tag.name === "javascript"
              ? "bg-yellow-400"
              : posts.tag.name === "python"
              ? "bg-green-400"
              : "bg-gray-400" // Default color
          }`}
        >
          {posts.tag.name}
        </p>
      </CardHeader>
      <div className="mt-auto">
        <Link
          className="text-sm hover:underline text-end block m-4"
          href={`/blog/${posts.id}`}
        >
          Read more...
        </Link>
      </div>
    </Card>
  );
};

export default PostCard;
