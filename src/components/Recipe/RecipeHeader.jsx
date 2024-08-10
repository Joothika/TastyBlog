import React from "react";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import { dateFormat, POSTED_AT, TASTY_USER } from "../../utils/constant";

const RecipeHeader = ({ recipe }) => {
  return (
    <header className="my-6">
      <span className="my-2 font-bold tracking-wide text-lg  md:text-xl flex items-center justify-between">
        <h1>{recipe.name}</h1>
        <small className="hidden md:block font-medium text-[0.5rem] md:text-xs rounded-md text-white bg-green-600 px-3 py-2">
          {recipe?.show?.name}
        </small>
      </span>
      <div className="mx-auto grid grid-cols-12 gap-2 md:gap-8 my-8">
        <div className=" col-span-8 border flex px-4 py-2 items-center">
          <img
            src={`https://static.vecteezy.com/system/resources/previews/004/991/321/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg`}
            className="w-16 h-16 rounded-full"
          />
          <div className="ml-4">
            <h1 className="text-sm md:text-lg">
              {recipe?.credits[0]?.name === null
                ? TASTY_USER
                : `${recipe?.credits[0]?.name}`}
            </h1>
            {recipe?.price?.updated_at && (
              <small className="text-xs text-stone-500">{`${POSTED_AT} ${dateFormat.format(
                new Date(recipe?.price?.updated_at)
              )}`}</small>
            )}
          </div>
        </div>
        <div className="col-span-4 border-2 border-orange-500/70 border-solid place-self-end flex flex-col items-center px-6 rounded-md py-4 ">
          <StarBorderPurple500OutlinedIcon sx={{ color: "#483d8b " }} />
          <span className="mt-1 ">
            {(recipe?.user_ratings?.score * 10).toFixed(1)}
          </span>
        </div>
      </div>
      <p className="text-xs leading-5 md:leading-5 md:text-sm text-stone-600 md:text-justify">
        {recipe?.description}
      </p>
    </header>
  );
};

export { RecipeHeader };
