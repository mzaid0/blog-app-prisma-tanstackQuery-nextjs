"use client";
import BackButton from "@/components/Back-Button";
import FormPost from "@/components/Form-Post";
import { FormInputProps } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler } from "react-hook-form";

const CreatePost = () => {
  const router = useRouter();
  const handleCreatePost: SubmitHandler<FormInputProps> = (data) => {
    createPost(data);
  };

  const { mutate: createPost, isPending: loadingSubmit } = useMutation({
    mutationFn: (newPost: FormInputProps) => {
      return axios.post("/api/posts/create", newPost);
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
    <>
      <BackButton />
      <h1 className="text-2xl font-light text-center">Add new Post</h1>
      <FormPost isLoadingSubmit={loadingSubmit} submit={handleCreatePost} />
    </>
  );
};

export default CreatePost;
