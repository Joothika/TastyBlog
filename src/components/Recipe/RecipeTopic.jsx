import React from "react";

const RecipeTopic = ({ recipe }) => {
  return (
    <section className="my-4 mt-12 text-sm text-blue-500 ">
      <h1 className=" w-24">Related Words</h1>
      <ul className="flex flex-wrap mt-4">
        {recipe?.topics?.map((eachtopic) => (
          <li
            className="text-stone-600 border-2 border-stone-200 mr-2 my-1 px-3 py-2 rounded-full text-xs"
            key={eachtopic?.name}
          >
            {eachtopic?.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export { RecipeTopic };
