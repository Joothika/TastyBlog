import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice.jsx";
import { useFetchBlogList } from "../utils/Export.jsx";

const store = configureStore({
  reducer: {
    blogReducer: blogSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: useFetchBlogList,
      },
      serializableCheck: false,
    }),
});

export default store;
