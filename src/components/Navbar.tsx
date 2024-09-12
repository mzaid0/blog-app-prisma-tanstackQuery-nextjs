import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaBlog } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="w-1/2 mx-auto h-20">
        <div className="flex justify-between text-sm items-center md:w-1/2 gap-4 backdrop-blur-sm fixed top-6  px-6  py-2 rounded-full bg-transparent shadow-lg ">
          <div>
            <Link 
            className="text-blue-600"
            href={"/"}>
              <FaBlog size={20} />
            </Link>
          </div>
          <div>
            <Link href={"/create"}>
              <Button variant="outline">Create Post</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
