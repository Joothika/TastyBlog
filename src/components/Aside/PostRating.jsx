import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const PostRating = ({ item }) => {
  return (
    <li className="lg:flex items-center  hidden">
      <StarOutlineIcon
        sx={{ fontSize: { xs: "0.8rem", lg: "1rem" } }}
        className="text-yellow-600"
      />
      <h3 className="ml-1 text-[0.7rem]  md:text-xs lg:text-sm ">
        {item?.user_ratings?.score
          ? (item?.user_ratings?.score * 10).toFixed(1)
          : "0"}
      </h3>
    </li>
  );
};

export { PostRating };
