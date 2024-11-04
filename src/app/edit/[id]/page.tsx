"use client";
import BackButton from "@/components/Back-Button";
import FormPost from "@/components/Form-Post";
import { FormInputProps } from "@/types";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { SubmitHandler } from "react-hook-form";

interface EditProps {
  params: {
    id: string;
  };
}

const EditPost: FC<EditProps> = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const { data: editData, isLoading: loadingSubmit } = useQuery({
    queryKey: ["post", id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data;
    },
  });

  const { mutate: updatePost } = useMutation({
    mutationFn: async (newPost: FormInputProps) => {
      return axios.patch(`/api/posts/${id}`, newPost);
    },
    onError: () => {
      console.error("Error updating post");
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  const handleEditPost: SubmitHandler<FormInputProps> = (data) => {
    updatePost(data);
  };

  if (loadingSubmit) {
    return <p className="text-center">Loading...</p>;
  }
  return (
    <>
      <BackButton />
      <h1 className="text-2xl font-light text-center">Edit Post</h1>
      <FormPost
        submit={handleEditPost}
        initialValue={editData.post}
        isEdit
        isLoadingSubmit={loadingSubmit}
      />
    </>
  );
};

export default EditPost;
