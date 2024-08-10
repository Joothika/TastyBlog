import React from "react";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
const RecipeInstruction = ({ recipe }) => {
  return (
    <main className="my-12 ">
      <h1 className="flex justify-center items-center text-lg md:text-xl font-semibold text-red-500 mb-8">
        <RestaurantOutlinedIcon />
        <span className="ml-4">How to make this recipe</span>
      </h1>
      {recipe?.instructions?.map((eachins) => (
        <p
          className="text-xs   md:text-sm text-stone-500 py-6 px-10 my-4 rounded-md bg-gray-100 "
          key={eachins.display_text}
        >
          {eachins.display_text}
        </p>
      ))}
    </main>
  );
};

export { RecipeInstruction };
