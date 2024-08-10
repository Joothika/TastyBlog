import React from "react";
import {
  ShimmerButton,
  ShimmerDiv,
  ShimmerText,
  ShimmerTitle,
} from "shimmer-effects-react";

const BlogContainerShimmer = () => {
  return (
    <div className="px-6 mx-4 md:mx-0 mb-16 pt-10 pb-20 rounded-md md:shadow-lg  ">
      <div className="w-72 mb-4">
        <ShimmerTitle mode={"light"} gap={10} line={"1"} />
      </div>
      <div className="mb-4">
        <ShimmerDiv width={"100%"} height={"20rem"} mode={"light"} />
      </div>
      <div className="mb-2">
        <ShimmerText line={"6"} mode={"light"} />
      </div>
      <div className="float-end">
        <ShimmerButton mode={"light"} size={"md"} />
      </div>
    </div>
  );
};

export { BlogContainerShimmer };
