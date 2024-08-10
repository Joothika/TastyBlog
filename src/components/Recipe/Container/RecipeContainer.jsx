import React from "react";
import { useParams } from "react-router-dom";
import {
  useFetchBlogDetails,
  RecipeDetailContainer,
  SimilarPostContainer,
  NoPost,
  AsideContainer,
} from "../../../utils/Export";
import { useSelector } from "react-redux";
import { SIMILAR_HEAD } from "../../../utils/constant";
import { Spinner } from "../../../utils/Spinner";
import * as style from "../../Aside/style.module.css";

const RecipeContainer = () => {
  const { similar, blogdetail } = useSelector((state) => state.blogReducer);
  const { recipeId } = useParams();
  useFetchBlogDetails(recipeId);
  return (
    <main>
      <section className="  lg:max-w-[1100px] xl:max-w-[1200px] mx-auto md:px-10 py-6 pb-16 md:pb-0  grid  lg:grid-cols-12 grid-row-2 gap-8 scroll-smooth">
        <div className="row-span-1  lg:col-span-8">
          {blogdetail.length === 0 ? (
            <Spinner />
          ) : (
            <RecipeDetailContainer recipe={blogdetail} />
          )}
        </div>
        <h1 className="block lg:hidden font-semibold px-4 py-3 text-lg tracking-wide text-sky-600">
          {SIMILAR_HEAD}
        </h1>
        <div
          className={`row-span-1 py-3 flex overflow-x-scroll scoroll-smooth lg:hidden ${style.aside}`}
        >
          {similar?.length === 0 ? (
            <NoPost>No similar recipes found !</NoPost>
          ) : (
            similar?.map((compilation, i) => (
              <AsideContainer key={i} compilation={compilation} />
            ))
          )}
        </div>
        <aside className="hidden lg:block lg:col-span-4 pb-3 px-3 pt-3 h-max  rounded-md shadow-md shadow-rose-200 lg:sticky top-[1rem] ">
          <h1 className="font-semibold px-4 py-3 text-lg tracking-wide text-sky-600">
            {SIMILAR_HEAD}
          </h1>
          {similar?.length === 0 ? (
            <NoPost>No similar recipes found !</NoPost>
          ) : (
            similar?.map((eachsimilarpost) => (
              <SimilarPostContainer
                compilations={eachsimilarpost}
                key={eachsimilarpost.id}
              />
            ))
          )}
        </aside>
      </section>
    </main>
  );
};

export { RecipeContainer };
