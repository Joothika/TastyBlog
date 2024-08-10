import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onShowSearchedBlogList } from "../../../utils/Export";

const SearchBar = ({ showSearchBar, setShowSearchBar }) => {
  const searchRef = useRef("");
  const { blogs } = useSelector((state) => state.blogReducer);
  const dispatch = useDispatch();

  function debounce(callback, delay) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(callback, delay);
    };
  }
  function showBlogs() {
    const searchVal = searchRef?.current?.value.toLowerCase();
    const blogFilter = blogs.filter((eachblog) => {
      const eachblogname = eachblog?.name?.toLowerCase();
      return eachblogname.includes(searchVal);
    });
    dispatch(onShowSearchedBlogList(blogFilter));
  }

  return (
    <>
      {showSearchBar && (
        <input
          type="text"
          placeholder="search like cakes, juice...."
          ref={searchRef}
          onChange={debounce(() => showBlogs(), 1000)}
          className="h-9 mr-2 rounded-md bg-transparent outline outline-1 outline-stone-50/40 focus:outline-stone-50 indent-2 text-xs md:text-sm border-none w-[17rem]  md:w-96 placeholder:text-xs placeholder:text-stone-50/70"
          onBlur={() => setShowSearchBar((show) => !show)}
        />
      )}
    </>
  );
};

export { SearchBar };
