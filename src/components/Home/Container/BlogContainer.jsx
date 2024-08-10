import React, { useState } from "react";
import {
  AsideContainer,
  BlogContainerShimmer,
  BlogPostContainer,
  NoPost,
  PrevNextPageContainer,
  TrendyContainerShimmer,
  useFetchFeedList,
} from "../../../utils/Export";
import { useFetchBlogList } from "../../../utils/Export";
import { useSelector } from "react-redux";
import { TRENDY_BLOG_HEAD } from "../../../utils/constant";
import { Spinner } from "../../../utils/Spinner";
import * as style from "../../Aside/style.module.css";

const BlogContainer = () => {
  const [fromPage, setFromPage] = useState(0);
  const [toPage, setToPage] = useState(5);
  const { blogs, feeds, searchedblogs, loading } = useSelector(
    (state) => state.blogReducer
  );
  useFetchBlogList(fromPage, toPage);
  useFetchFeedList(fromPage, toPage);
  return (
    <main>
      <section className="  lg:max-w-[1100px] xl:max-w-[1200px] mx-auto sm:px-10 py-6 grid  grid-row-2 lg:grid-cols-12 gap-8 scroll-smooth">
        <div
          className={`row-span-1 py-3 flex overflow-x-scroll scoroll-smooth lg:hidden ${style.aside}`}
        >
          {feeds?.length === 0 ? (
            <TrendyContainerShimmer />
          ) : (
            feeds?.map((eachfeed, i) => (
              <AsideContainer key={i} eachfeed={eachfeed} />
            ))
          )}
        </div>
        <div className=" row-span-1  lg:col-span-8 mb-10 ">
          {blogs.length === 0 && <BlogContainerShimmer />}
          {searchedblogs?.length > 0
            ? searchedblogs?.map((eachblog) => (
                <BlogPostContainer eachblog={eachblog} key={eachblog.id} />
              ))
            : blogs?.map((eachblog) => (
                <BlogPostContainer eachblog={eachblog} key={eachblog.id} />
              ))}
          {blogs?.length > 0 && (
            <PrevNextPageContainer
              setFromPage={setFromPage}
              setToPage={setToPage}
              toPage={toPage}
            />
          )}
        </div>
        <aside className=" lg:col-span-4 pb-3 lg:px-4 pt-3 hidden lg:block h-max rounded-md shadow-md shadow-rose-200 lg:sticky top-[1rem]">
          <h1 className="font-semibold px-4 py-2 text-lg tracking-wide text-sky-600">
            {TRENDY_BLOG_HEAD}
          </h1>
          {feeds?.length === 0 ? (
            <NoPost>No trendy recipes for this moment !</NoPost>
          ) : (
            feeds?.map((eachfeed, i) => (
              <AsideContainer key={i} eachfeed={eachfeed} />
            ))
          )}
        </aside>
      </section>
    </main>
  );
};

export { BlogContainer };
