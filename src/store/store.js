import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./blogSlice.jsx";
import { useFetchBlogList } from "../utils/Export.jsx";
import saveSlice from "./saveSlice.jsx";

const store = configureStore({
  reducer: {
    blogReducer: blogSlice,
    saveReducer: saveSlice,
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
