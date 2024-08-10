import React from "react";

const Promoted = ({ item, compilation }) => {
  return (
    <>
      {item && (
        <li className="ml-5  hidden lg:block bg-green-600 md:text-[0.5rem]  lg:text-xs text-stone-100 px-2 py-1 rounded-md">
          {item?.promotion === "full" ? "promoted" : ""}
        </li>
      )}
      {compilation && (
        <li className="ml-5 bg-green-600   md:text-[0.5rem] lg:text-xs text-stone-100 px-2 py-1 rounded-md">
          {promotion === "full" ? "promoted" : ""}
        </li>
      )}
    </>
  );
};

export { Promoted };
