import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const PostCard = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <div className="mt-auto">
        <Link
          className="text-sm hover:underline text-end block m-4"
          href={"/blog/1"}
        >
          Read more...
        </Link>
      </div>
    </Card>
  );
};

export default PostCard;
