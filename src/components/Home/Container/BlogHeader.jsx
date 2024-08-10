import React from "react";
import {
  AT,
  CREATED_TAG,
  POSTED_BY,
  TASTY_USER,
} from "../../../utils/constant";
import PersonIcon from "@mui/icons-material/Person";

const BlogHeader = ({ eachblog }) => {
  const { name, credits, updated_at, price } = eachblog;
  const date = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <div className="md:flex justify-between">
      <div className="lg:w-2/3">
        <h1 className="font-semibold text-[1rem]  md:text-lg tracking-wide">
          {name}
        </h1>
        <small className="mt-1  text-[0.6rem] block md:hidden">
          {POSTED_BY}
          {credits[0]?.name ? credits[0]?.name : `${TASTY_USER}`}
          {AT}
          {date?.format(new Date(price?.updated_at))}
        </small>
        {updated_at && (
          <small className="text-[0.66rem] hidden md:block md:text-sm">{`${CREATED_TAG} ${date?.format(
            new Date(price?.updated_at)
          )}`}</small>
        )}
      </div>
      <h3 className="hidden md:block lg:flex items-center">
        {credits && (
          <>
            <PersonIcon sx={{ color: "#b2b6c1" }} />
            <span className=" ml-2 text-blue-600">
              {credits[0]?.name ? credits[0]?.name : "Tasty User"}
            </span>
          </>
        )}
      </h3>
    </div>
  );
};

export { BlogHeader };
