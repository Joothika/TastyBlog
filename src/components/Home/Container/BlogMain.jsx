import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const BlogMain = ({ eachblog }) => {
  const { user_ratings, thumbnail_url } = eachblog;
  return (
    <>
      <img
        src={thumbnail_url}
        className="mt-8 mb-2 w-full h-72 rounded-md object-cover "
      />
      <div className="flex px-2 items-center my-2">
        <div className="flex justify-between items-center">
          <StarOutlineIcon
            sx={{ fontSize: { xl: "1rem" } }}
            className="text-yellow-600"
          />
          {user_ratings && (
            <h3 className="ml-1">{(user_ratings?.score * 10).toFixed(1)}</h3>
          )}
        </div>
        <span className="text-xs ml-3 mt-1 text-stone-500">
          {user_ratings?.count_positive} voted
        </span>
      </div>
    </>
  );
};

export { BlogMain };
