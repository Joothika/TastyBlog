import React from "react";
import { CONTINUE_READING } from "../../../utils/constant";
import { Link, useParams } from "react-router-dom";

const BlogFooter = ({ eachblog }) => {
  const { description } = eachblog;
  return (
    <>
      <p className="my-4 px-2  text-sm lg:text-xs">{description}</p>
      <Link to={`/recipe/${eachblog.id}`}>
        <button className="text-stone-100 text-xs my-2 float-end  px-6 py-3 bg-gradient-to-tr from-rose-400 to-rose-500 rounded-md md:rounded-full tracking-wide font-semibold shadow-md hover:transition-transform hover:translate-y-[-0.2rem] duration-200 ease-linear">
          {CONTINUE_READING}
        </button>
      </Link>
    </>
  );
};

export { BlogFooter };
