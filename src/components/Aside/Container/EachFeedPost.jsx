import React from "react";
import {
  PostImage,
  PostRating,
  PostTitle,
  Promoted,
} from "../../../utils/Export";
import { Link } from "react-router-dom";

const EachFeedPost = ({ item }) => {
  return (
    <Link to={`/recipe/${item.id}`}>
      <li className=" shadow-sm  hover:border-green-500 hover:border-2 hover:border-solid hover:transition-transform hover:duration-300 hover:scale-105  shadow-rose-200 rounded-lg  w-32 h-32 py-1 lg:w-[94%]   mx-2 lg:h-28 lg:my-4  px-[0.5rem] lg:px-3  lg:py-2 list-none">
        <div className="grid place-items-center  lg:flex items-center ">
          <PostImage url={item} />
          <div className="mt-2  lg:ml-4">
            <PostTitle title={item?.name} />
            <ul className="flex flex-col  lg:flex-row justify-center lg:justify-start  lg:items-center mt-3">
              <PostRating item={item} />
              <Promoted item={item} />
            </ul>
          </div>
        </div>
      </li>
    </Link>
  );
};
export { EachFeedPost };
