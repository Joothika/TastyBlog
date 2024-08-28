import React, { useEffect, useState } from "react";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const RecipeSave = () => {
  const [saved, setSaved] = useState(false);
  const { recipeId } = useParams();
  const { blogdetail } = useSelector((state) => state.blogReducer);
  const { id, name, user_ratings, thumbnail_url, price, credits } = blogdetail;
  const savedData = { id, name, user_ratings, thumbnail_url, price, credits };
  let savedarr = JSON.parse(localStorage.getItem("recipe"));
  if (savedarr == null) savedarr = [];
  let presentInBookmark = savedarr.find((eachBlog) => eachBlog.id == recipeId);

  useEffect(() => {
    if (typeof presentInBookmark == "object") setSaved(true);
    if (typeof presentInBookmark == "undefined") setSaved(false);
  }, [presentInBookmark]);

  console.log(typeof presentInBookmark, recipeId, savedarr, "filter arr");
  function onhandleSaveList() {
    if (saved && typeof presentInBookmark == "object") {
      setSaved((prev) => !prev);
      const removeRecipe = savedarr.findIndex(
        (eachBlog) => eachBlog.id == recipeId
      );
      savedarr.splice(removeRecipe, 1);
      return localStorage.setItem("recipe", JSON.stringify(savedarr));
    }

    if (!saved || typeof presentInBookmark == undefined) {
      setSaved((prev) => !prev);
      savedarr.push(savedData);
      return localStorage.setItem(`recipe`, JSON.stringify(savedarr));
    }
  }

  return (
    <button
      className="float-end text-stone-600 cursor-pointer"
      onClick={() => onhandleSaveList()}
    >
      {presentInBookmark && saved ? (
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
