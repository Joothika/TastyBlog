import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onShowBlogList, onShowError } from "../utils/Export";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_TASTY_API_KEY,
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

const useFetchBlogList = (from, to) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function blogList() {
      try {
        const blog = await fetch(
          `https://tasty.p.rapidapi.com/recipes/list?from=${from}&size=${to}`,
          options
        );
        const data = await blog.json();
        dispatch(onShowBlogList(data.results));
      } catch (err) {
        dispatch(onShowError(err.message));
      }
    }
    blogList();
  }, [from, to]);
};

export { useFetchBlogList };
