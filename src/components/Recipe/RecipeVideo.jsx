import React from "react";
import RoomServiceOutlinedIcon from "@mui/icons-material/RoomServiceOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

const RecipeVideo = ({ recipe }) => {
  return (
    <section>
      <video
        poster={recipe?.thumbnail_url && recipe?.thumbnail_url}
        src={recipe?.original_video_url && recipe?.original_video_url}
        typeof="video/mp4"
        preload="metadata"
        controls
        className="h-[60vh] w-full object-cover  my-4"
      />
      <ul className="py-2 text-xs md:text-sm flex  xl:w-[23rem] justify-between">
        <li className="flex items-center  bg-gray-100 px-6 rounded-sm py-2">
          <RoomServiceOutlinedIcon sx={{ fontSize: { xl: "1.5rem" } }} />
          <span className="ml-2">{recipe?.num_servings} servings</span>
        </li>
        <li className="flex items-center  bg-gray-100 px-6 rounded-sm py-2">
          <AccessTimeOutlinedIcon sx={{ fontSize: { xl: "1.2rem" } }} />
          <span className="ml-2">
            {recipe?.total_time_tier?.display_tier
              ? recipe?.total_time_tier?.display_tier
              : `${recipe?.total_time_minutes} minutes`}
          </span>
        </li>
      </ul>
    </section>
  );
};

export { RecipeVideo };
