import React from "react";
import { useSelector } from "react-redux";
import { EachSavedList, NoPost } from "././../../utils/Export";

const SaveListContainer = () => {
  const { savedList } = useSelector((state) => state.saveReducer);
  return (
    <section className="lg:max-w-[1100px] xl:max-w-[1200px] mx-auto px-4 sm:px-10 py-6  scroll-smooth  my-4">
      <ul className="lg:max-w-[1100px] xl:max-w-[1200px] ">
        {savedList.length === 0 ? (
          <NoPost change>Start add your favourite recipes now !</NoPost>
        ) : (
          savedList?.map((eachsavedblog) => (
            <EachSavedList key={eachsavedblog.id} content={eachsavedblog} />
          ))
        )}
      </ul>
    </section>
  );
};

export { SaveListContainer };
