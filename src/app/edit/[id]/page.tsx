"use client";
import BackButton from "@/components/Back-Button";
import FormPost from "@/components/Form-Post";
import { FormInputProps } from "@/types";
import React from "react";
import { SubmitHandler } from "react-hook-form";

const EditPost = () => {
  const handleEditPost: SubmitHandler<FormInputProps> = (data) => {
    console.log(data);
  };
  return (
    <>
    <BackButton/>
      <h1 className="text-2xl font-light text-center">Edit Post</h1>
      <FormPost submit={handleEditPost} isEdit />
    </>
  );
};

export default EditPost;
