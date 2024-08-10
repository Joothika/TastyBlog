import React from "react";
import HealthAndSafetyOutlinedIcon from "@mui/icons-material/HealthAndSafetyOutlined";
import {
  CALORIES,
  CARBS_IMG_URL,
  FATS_IMG_URL,
  FIBERS_IMG_URL,
  PROTEINS_IMG_URL,
  SUGAR_IMG_URL,
} from "../../utils/constant";
const RecipeNutrition = ({ recipe }) => {
  return (
    <section>
      <h1 className="flex items-center text-lg font-semibold text-green-600 mb-8">
        <HealthAndSafetyOutlinedIcon />
        <span className="ml-2"> Nutrition Intake</span>
        <span className="text-xs ml-2 text-stone-500 font-light mt-1">
          ( Total Calories {recipe?.nutrition?.calories} )
        </span>
      </h1>
      <ul className="grid grid-cols-12 md:grid-cols-10 gap-6">
        {recipe?.nutrition?.carbohydrates !== 0 && (
          <li className="col-span-4 md:col-span-2 rounded-md  items-center flex-col flex text-red-600">
            <img src={CARBS_IMG_URL} className="border rounded-md h-[5rem]" />
            <span className="align-middle text-sm text-center mt-1">{`${recipe?.nutrition?.carbohydrates} ${CALORIES}`}</span>
          </li>
        )}
        {recipe?.nutrition?.fat !== 0 && (
          <li className="col-span-4  md:col-span-2 rounded-md  items-center flex-col flex text-red-600">
            <img src={FATS_IMG_URL} className="border rounded-md h-[5rem]" />
            <span className="align-middle text-sm text-center mt-1">{`${recipe?.nutrition?.fat} ${CALORIES}`}</span>
          </li>
        )}
        {recipe?.nutrition?.fiber !== 0 && (
          <li className="col-span-4 md:col-span-2 rounded-md   items-center flex-col flex text-red-600">
            <img src={FIBERS_IMG_URL} className="border rounded-md h-[5rem]" />
            <span className="align-middle text-sm text-center mt-1">{`${recipe?.nutrition?.fiber} ${CALORIES}`}</span>
          </li>
        )}
        {recipe?.nutrition?.protein !== 0 && (
          <li className="col-span-4 md:col-span-2 rounded-md   items-center flex-col flex text-red-600">
            <img
              src={PROTEINS_IMG_URL}
              className="border rounded-md h-[5rem]"
            />
            <span className="align-middle  text-center text-sm mt-1">{`${recipe?.nutrition?.protein} ${CALORIES}`}</span>
          </li>
        )}
        {recipe?.nutrition?.sugar !== 0 && (
          <li className="col-span-4 md:col-span-2 rounded-md   items-center flex-col flex text-red-600">
            <img
              src={SUGAR_IMG_URL}
              className="border rounded-md h-[5rem] w-full"
            />
            <span className="align-middle text-center text-sm mt-1">{`${recipe?.nutrition?.sugar} ${CALORIES}`}</span>
          </li>
        )}
      </ul>
    </section>
  );
};

export { RecipeNutrition };
