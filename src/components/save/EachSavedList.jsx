import React from "react";
import { SavedContent, SavedImage } from "../../utils/Export";

const EachSavedList = ({ content }) => {
  return (
    <li className=" border-2 rounded-md px-4 py-3 mb-4  flex items-center">
      <SavedImage url={content?.thumbnail_url} />
      <SavedContent content={content} />
    </li>
  );
};

export { EachSavedList };
