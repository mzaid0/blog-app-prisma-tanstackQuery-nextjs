import BackButton from "@/components/Back-Button";
import ButtonActions from "@/components/Button-Actions";
import React from "react";

const BlogDetails = () => {
  return (
    <div>
      <BackButton/>
      <div className="mb-6">
        <h2 className="text-2xl font-bold my-4 uppercase">Post one</h2>
        <ButtonActions />
      </div>
      <p className="text-gray-700 ">Post one content</p>
    </div>
  );
};

export default BlogDetails;
