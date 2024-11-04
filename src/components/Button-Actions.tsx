"use client";

import Link from "next/link";
import React, { FC } from "react";
import { MdOutlineEdit } from "react-icons/md";
import { Button } from "./ui/button";
import { AiOutlineDelete } from "react-icons/ai";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";

interface ButtonActionsProps {
  id: string;
}

const ButtonActions: FC<ButtonActionsProps> = ({ id }) => {
  const router = useRouter();

  const { mutate: deletePost } = useMutation({
    mutationFn: async () => {
      return axios.delete(`/api/posts/${id}`);
    },
    onError: (error) => {
      console.log(error);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  return (
    <div className="flex items-center gap-4">
      {/* Update the href to use the passed id */}
      <Link
        className="inline-flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 duration-300 text-sm"
        href={`/edit/${id}`}
      >
        <MdOutlineEdit /> Edit
      </Link>
      <Button onClick={() => deletePost()} variant="destructive">
        <AiOutlineDelete size={15} />
        Delete
      </Button>
    </div>
  );
};

export default ButtonActions;
