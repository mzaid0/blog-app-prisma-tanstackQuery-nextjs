import Link from "next/link";
import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { Button } from "./ui/button";
import { AiOutlineDelete } from "react-icons/ai";

const ButtonActions = () => {
  return (
    <div className="flex items-center gap-4">
      <Link
        className="inline-flex items-center gap-1 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 duration-300 text-sm"
        href="/edit/1"
      >
        <MdOutlineEdit /> Edit
      </Link>
      <Button variant="destructive">
        <AiOutlineDelete size={15} />
        Delete
      </Button>
    </div>
  );
};

export default ButtonActions;
