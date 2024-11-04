"use client";
import { FC, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInputProps } from "@/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { tag } from "@prisma/client";

interface FormPostProps {
  submit: SubmitHandler<FormInputProps>;
  isEdit?: boolean;
  initialValue?: FormInputProps;
  isLoadingSubmit: boolean;
}

const FormPost: FC<FormPostProps> = ({
  submit,
  isEdit,
  initialValue,
  isLoadingSubmit,
}) => {
  console.log("Initial value", initialValue);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormInputProps>({
    defaultValues: initialValue,
  });

  const { data: dataTags, isLoading: isLoadingTags } = useQuery<tag[]>({
    queryKey: ["tags"],
    queryFn: async () => {
      const response = await axios.get("/api/tags");
      return response.data;
    },
  });

  console.log(dataTags);

  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleSelectChange = (value: string) => {
    setSelectedTag(value);
    setValue("tagId", value); // Set form value using react-hook-form's setValue
    clearErrors("tagId"); // Clear errors if a value is selected
  };

  const onSubmit: SubmitHandler<FormInputProps> = (data) => {
    if (!selectedTag) {
      setError("tagId", {
        type: "required",
        message: "Tag is required",
      });
      return;
    }
    submit({ ...data, tagId: selectedTag }); // Include selectedTag in the data submitted
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-96 mx-auto mt-6"
    >
      <Input
        {...register("title", { required: "Title is required" })}
        type="text"
        placeholder="Post title..."
      />
      {errors.title && (
        <p className="text-red-500 text-xs -mt-4">{errors.title.message}</p>
      )}

      <Textarea
        {...register("description", { required: "Description is required" })}
        placeholder="Description..."
      />
      {errors.description && (
        <p className="text-red-500 text-xs -mt-4">
          {errors.description.message}
        </p>
      )}

      <Select onValueChange={handleSelectChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select tags" />
        </SelectTrigger>
        <SelectContent>
          {isLoadingTags ? (
            <div className="text-xs">Loading...</div>
          ) : (
            dataTags?.map((tag) => (
              <SelectItem key={tag.id} value={tag.id}>
                {" "}
                {/* Set value to tag.id */}
                {tag.name}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
      {errors.tagId && (
        <p className="text-red-500 text-xs -mt-4">{errors.tagId.message}</p>
      )}

      <Button type="submit" variant="outline">
        {isLoadingSubmit && <span className="text-sm text-start">Loading...</span>}
        {isEdit
          ? isLoadingSubmit
            ? "Updating..."
            : "Update Post"
          : isLoadingSubmit
          ? "Creating..."
          : "Create Post"}
      </Button>
    </form>
  );
};

export default FormPost;
