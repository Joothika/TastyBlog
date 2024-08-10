import React from "react";
import { dateFormat, POSTED_AT, TASTY_USER } from "../../utils/constant";
import { onRemoveSavedBlog } from "../../utils/Export";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import RestoreFromTrashOutlinedIcon from "@mui/icons-material/RestoreFromTrashOutlined";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonIcon from "@mui/icons-material/Person";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const SavedContent = ({ content }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="ml-4 w-full">
      <div className="flex justify-between">
        <h1 className="text-xs md:text-lg font-semibold">{content?.name}</h1>
        <small className="md:mr-4 rounded-md text-sm flex items-center bg-gray-300 px-3 py-1">
          <StarBorderIcon
            sx={{ fontSize: { xs: "1rem", md: "1.5rem" }, color: "#483d8b" }}
          />
          <span className="ml-1 text-xs md:text-sm  ">
            {(content?.user_ratings?.score * 10).toFixed(1)}
          </span>
        </small>
      </div>
      <div className="mt-4 flex justify-between">
        <div className="md:flex">
          {content?.price && (
            <small className="flex items-center">
              <CalendarTodayIcon
                sx={{ fontSize: { xs: "0.8rem", md: "1.5rem" } }}
              />
              <span className="ml-2 text-[0.6rem] md:text-sm">
                {dateFormat?.format(new Date(content?.price?.updated_at))}
              </span>
            </small>
          )}
          {content?.credits && (
            <small className="flex items-center mt-1 md:mt-0 md:ml-4">
              <PersonIcon sx={{ fontSize: { xs: "0.9rem", md: "1.5rem" } }} />
              {content?.credits[0]?.name === null ? (
                <span className="ml-2 text-[0.6rem] md:text-sm">
                  {TASTY_USER}
                </span>
              ) : (
                <span className="ml-2 text-[0.6rem] md:text-sm">
                  {content?.credits[0]?.name}
                </span>
              )}
            </small>
          )}
        </div>
        <div className="align-baseline">
          <button
            className="mr-1 md:mr-3"
            onClick={() => navigate(`/recipe/${content?.id}`)}
          >
            <VisibilityOutlinedIcon
              sx={{ fontSize: { xl: "1.7rem" }, color: "#008000 " }}
            />
          </button>
          <button
            className="md:mr-3"
            onClick={() => dispatch(onRemoveSavedBlog(content))}
          >
            <RestoreFromTrashOutlinedIcon
              sx={{ fontSize: { xl: "1.7rem" }, color: "#cc0000 " }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export { SavedContent };
