import React from "react";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
const NoPost = ({ children, change }) => {
  return (
    <aside
      className={`grid grid-cols-1 place-items-center h-full mx-auto md:my-4 ${
        change && `my-10`
      } `}
    >
      <div className="flex flex-col items-center justify-center">
        {change ? (
          <EmojiEmotionsOutlinedIcon
            sx={{
              fontSize: { xs: "3.5rem", md: "2.8rem" },
              color: "#11ce40",
              marginBottom: { xl: "0.5rem" },
            }}
            className="animate-pulse"
          />
        ) : (
          <SentimentDissatisfiedIcon
            sx={{ fontSize: { xs: "3.5rem", md: "2rem" }, color: "#a29794" }}
            className="animate-oops"
          />
        )}
        <h1 className="mt-4 md:mt-2 text-red-500">{children}</h1>
      </div>
    </aside>
  );
};

export { NoPost };
