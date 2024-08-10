import React from "react";
import { BlogFooter, BlogHeader, BlogMain } from "../../../utils/Export";

const BlogPostContainer = ({ eachblog }) => {
  return (
    <div className="mx-6 md:mx-0 pt-8 px-6 rounded-lg mb-16 md:pt-10 pb-20 md:rounded-md shadow-lg border">
      <BlogHeader eachblog={eachblog} />
      <BlogMain eachblog={eachblog} />
      <BlogFooter eachblog={eachblog} />
    </div>
  );
};

export { BlogPostContainer };
