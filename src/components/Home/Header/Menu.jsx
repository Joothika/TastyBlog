import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useNavigate } from "react-router-dom";

const Menu = ({ setShowSearchBar }) => {
  const navigate = useNavigate();
  return (
    <div className="w-16  flex justify-between items-center text-stone-100/90">
      <button
        onClick={() => setShowSearchBar((prevshow) => !prevshow)}
        className="hover:transition-transform hover:translate-y-[-0.2rem] duration-200 ease-linear"
      >
        <SearchIcon sx={{ cursor: "pointer" }} />
      </button>
      <button
        className="hover:transition-transform hover:translate-y-[-0.2rem] duration-200 ease-linear"
        onClick={() => navigate("/savelist")}
      >
        <BookmarksIcon sx={{ cursor: "pointer" }} />
      </button>
    </div>
  );
};

export { Menu };
