import React from "react";

const SavedImage = ({ url }) => {
  return <img src={url} className="w-20 h-20  md:w-32 md:h-32 object-cover" />;
};

export { SavedImage };
