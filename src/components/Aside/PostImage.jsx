import React from "react";

const PostImage = ({ url }) => {
  return (
    <img
      src={url?.thumbnail_url}
      className="rounded-full w-16 h-16 lg:rounded-full lg:w-20 lg:h-20"
    />
  );
};

export { PostImage };
