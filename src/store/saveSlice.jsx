import { createSlice } from "@reduxjs/toolkit";

const saveSlice = createSlice({
  name: "save",
  initialState: {
    savedList: [],
  },
  reducers: {
    onShowSavedList(state, actions) {
      state.savedList = [...state.savedList, actions.payload];
    },
    onRemoveSavedBlog(state, actions) {
      state.savedList = state.savedList.filter(
        (blog) => blog.id !== actions.payload.id
      );
    },
    recipeFromLocalStroage(state, actions) {
      state.recipeFromLocalStroage = actions.payload;
    },
  },
});

export const { onShowSavedList, onRemoveSavedBlog } = saveSlice.actions;
export default saveSlice.reducer;
