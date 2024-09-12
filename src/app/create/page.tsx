"use client"
import BackButton from "@/components/Back-Button";
import FormPost from "@/components/Form-Post";
import { FormInputProps } from "@/types";
import React from "react";
import { SubmitHandler } from "react-hook-form";

const CreatePost = () => {
  const handleCreatePost: SubmitHandler<FormInputProps> = (data) => {
    console.log(data);
  };
  return (
    <>
    <BackButton/>
      <h1 className="text-2xl font-light text-center">Add new Post</h1>
      <FormPost submit={handleCreatePost} />
    </>
  );
};

export default CreatePost;
