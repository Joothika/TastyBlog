import React from "react";
import { ShimmerDiv, ShimmerTitle } from "shimmer-effects-react";

const TrendyContainerShimmer = () => {
  return (
    <>
      <div className="flex justify-evenly w-full">
        <div className="px-6 py-3 rounded-md shadow-lg">
          <ShimmerDiv
            rounded={"50"}
            mode={"light"}
            width={"60px"}
            height={"60px"}
          />
          <div className="mt-3">
            <ShimmerTitle mode={"light"} line={"1"} />
          </div>
        </div>
        <div className="px-6 py-3 rounded-md shadow-lg">
          <ShimmerDiv
            rounded={"50"}
            mode={"light"}
            width={"60px"}
            height={"60px"}
          />
          <div className="mt-3">
            <ShimmerTitle mode={"light"} line={"1"} />
          </div>
        </div>
        <div className="px-6 py-3 rounded-md shadow-lg">
          <ShimmerDiv
            rounded={"50"}
            mode={"light"}
            width={"60px"}
            height={"60px"}
          />
          <div className="mt-3">
            <ShimmerTitle mode={"light"} line={"1"} />
          </div>
        </div>
      </div>
    </>
  );
};

export { TrendyContainerShimmer };
