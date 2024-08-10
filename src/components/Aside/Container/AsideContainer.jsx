import React from "react";
import { EachFeedPost, EachSimilarPost } from "../../../utils/Export";

const AsideContainer = ({ eachfeed, compilation }) => {
  return (
    <>
      {eachfeed?.item && <EachFeedPost item={eachfeed?.item} />}
      {compilation && <EachSimilarPost compilation={compilation} />}
    </>
  );
};

export { AsideContainer };
