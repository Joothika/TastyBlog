import React from "react";
import { EachSavedList, NoPost } from "././../../utils/Export";

const SaveListContainer = () => {
  const recipeFromLocalStroage = JSON.parse(localStorage.getItem("recipe"));

  if (!recipeFromLocalStroage) return;
  return (
    <section className="lg:max-w-[1100px] xl:max-w-[1200px] mx-auto px-4 sm:px-10 py-6  scroll-smooth  my-4">
      <ul className="lg:max-w-[1100px] xl:max-w-[1200px] ">
        {recipeFromLocalStroage?.length === 0 ? (
          <NoPost change>Start add your favourite recipes now !</NoPost>
        ) : (
          recipeFromLocalStroage?.map((eachsavedblog) => (
            <EachSavedList
              key={eachsavedblog.id}
              id={eachsavedblog.id}
              content={eachsavedblog}
            />
          ))
        )}
      </ul>
    </section>
  );
};

export { SaveListContainer };
