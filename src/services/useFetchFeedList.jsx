import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onShowError, onShowFeedList } from "../utils/Export";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_TASTY_API_KEY,
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

const useFetchFeedList = (from, to) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function feedList() {
      try {
        const feed = await fetch(
          `https://tasty.p.rapidapi.com/feeds/list?size=${to}&timezone=%2B0700&vegetarian=false&from=${from}`,
          options
        );
        const data = await feed.json();
        dispatch(onShowFeedList(data.results));
      } catch (err) {
        dispatch(onShowError(err.message));
      }
    }
    feedList();
  }, [from, to]);
};

export { useFetchFeedList };
