import React, { useState } from "react";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useDispatch, useSelector } from "react-redux";
import { onRemoveSavedBlog, onShowSavedList } from "../../utils/Export";
const RecipeSave = () => {
  const [saved, setSaved] = useState(false);
  const { blogdetail } = useSelector((state) => state.blogReducer);
  const { savedList } = useSelector((state) => state.saveReducer);
  const dispatch = useDispatch();
  const { id, name, user_ratings, thumbnail_url, price, credits } = blogdetail;
  const savedData = { id, name, user_ratings, thumbnail_url, price, credits };
  function onhandleSaveList() {
    if (!presentInBookmark) {
      setSaved(true);
      return dispatch(onShowSavedList(savedData));
    }
    if (presentInBookmark) {
      setSaved(false);
      return dispatch(onRemoveSavedBlog(savedData));
    }
  }

  const presentInBookmark = savedList.find(
    (eachsavedblog) => eachsavedblog.id === blogdetail.id
  );

  return (
    <button
      className="float-end text-stone-600 cursor-pointer"
      onClick={() => onhandleSaveList()}
    >
      {presentInBookmark && setSaved ? (
        <BookmarkIcon sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }} />
      ) : (
        <BookmarkBorderOutlinedIcon
          sx={{ fontSize: { xs: "2rem", md: "2.5rem" } }}
        />
      )}
    </button>
  );
};

export { RecipeSave };
