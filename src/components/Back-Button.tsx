"use client"
import React from "react";
import { Button } from "./ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()} variant={"outline"}>
      {" "}
      <IoIosArrowBack />
      Back
    </Button>
  );
};

export default BackButton;
