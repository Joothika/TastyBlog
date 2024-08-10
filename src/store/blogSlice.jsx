import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "bloglist",
  initialState: {
    blogs: [],
    searchedblogs: [],
    feeds: [],
    similar: [],
    blogdetail: [],
    error: [],
  },
  reducers: {
    onShowBlogList(state, actions) {
      state.blogs = actions.payload;
    },
    onShowSearchedBlogList(state, actions) {
      state.searchedblogs = actions.payload;
    },
    onShowFeedList(state, actions) {
      state.feeds = actions.payload;
    },
    onShowSimilarList(state, actions) {
      state.similar = actions.payload;
    },
    onShowRecipeDetail(state, actions) {
      state.blogdetail = actions.payload;
    },
    onShowError(state, actions) {
      state.error = actions.payload;
    },
  },
});

export const {
  onShowBlogList,
  onShowFeedList,
  onShowSimilarList,
  onShowRecipeDetail,
  onShowSearchedBlogList,
  onShowError,
} = blogSlice.actions;
export default blogSlice.reducer;
