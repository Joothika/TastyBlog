import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onShowError,
  onShowRecipeDetail,
  onShowSimilarList,
} from "../utils/Export";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_TASTY_API_KEY,
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};
const useFetchBlogDetails = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function detailList() {
      try {
        const detail = await fetch(
          `https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`,
          options
        );
        const textData = await detail.text();
        const data = JSON.parse(textData);
        dispatch(onShowSimilarList(data.compilations));
        dispatch(onShowRecipeDetail(data));
      } catch (err) {
        dispatch(onShowError(err.message));
      }
    }
    detailList();
  }, [id]);
};

export { useFetchBlogDetails };
