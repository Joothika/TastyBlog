import React from "react";

const PostTitle = ({ title }) => {
  return (
    <h1 className=" lg:text-sm text-[0.7em] text-center lg:text-left">
      {title}
    </h1>
  );
};

export { PostTitle };
