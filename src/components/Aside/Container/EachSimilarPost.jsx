import React from "react";
import { Link } from "react-router-dom";
import { PostImage, PostTitle } from "../../../utils/Export";

const EachSimilarPost = ({ compilation }) => {
  return (
    <Link to={`/recipe/${compilation.id}`}>
      <li className=" shadow-sm hover:border-green-500 hover:border-2 hover:border-solid  shadow-rose-200 rounded-lg  w-32 h-32 py-1 lg:w-[94%] px-[0.5rem]  mx-2 lg:h-28 lg:my-4 lg:px-3 hover:transition-transform hover:duration-300 hover:scale-105 list-none">
        <div className="grid place-items-center  lg:flex items-center ">
          <PostImage url={compilation} />
          <div className="mt-2  lg:ml-4">
            <PostTitle title={compilation?.name} />
          </div>
        </div>
      </li>
    </Link>
  );
};

export { EachSimilarPost };
