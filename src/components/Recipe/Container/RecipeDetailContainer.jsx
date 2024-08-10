import React from "react";
import {
  RecipeHeader,
  RecipeInstruction,
  RecipeNutrition,
  RecipeSave,
  RecipeTopic,
  RecipeVideo,
} from "../../../utils/Export";

const RecipeDetailContainer = ({ recipe }) => {
  return (
    <main className=" mb-10 md:mb-10  px-6  md:pb-20 md:shadow-lg">
      <RecipeHeader recipe={recipe} />
      <RecipeVideo recipe={recipe} />
      <RecipeInstruction recipe={recipe} />
      <RecipeNutrition recipe={recipe} />
      <RecipeTopic recipe={recipe} />
      <RecipeSave recipe={recipe} />
    </main>
  );
};

export { RecipeDetailContainer };
