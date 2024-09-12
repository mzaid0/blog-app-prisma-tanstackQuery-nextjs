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
import { Button } from "./ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInputProps } from "@/types";

interface FormPostProps {
  submit: SubmitHandler<FormInputProps>;
  isEdit?: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEdit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormInputProps>();

  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const handleSelectChange = (value: string) => {
    setSelectedTag(value);
    setValue("tag", value); // Set form value using react-hook-form's setValue
    clearErrors("tag"); // Clear errors if a value is selected
  };

  const onSubmit = (data: FormInputProps) => {
    if (!selectedTag) {
      setError("tag", {
        type: "required",
        message: "Tag is required",
      });
      return;
    }
    submit(data);
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
          <SelectItem value="javascript">Javascript</SelectItem>
          <SelectItem value="php">PHP</SelectItem>
          <SelectItem value="python">Python</SelectItem>
        </SelectContent>
      </Select>
      {errors.tag && (
        <p className="text-red-500 text-xs -mt-4">{errors.tag.message}</p>
      )}

      <Button type="submit" variant="outline">
        {isEdit ? "Update Post" : "Create Post"}
      </Button>
    </form>
  );
};

export default FormPost;
