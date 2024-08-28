import React, { useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
const PrevNextPageContainer = ({ setFromPage, setToPage, toPage }) => {
  const [pageNo, setPageNo] = useState(1);
  function handlePrevPage() {
    setFromPage((prevPage) => prevPage - 5);
    setToPage((prevPage) => prevPage - 5);
    setPageNo((prevPageNo) => prevPageNo - 1);
  }
  function handleNextPage() {
    setFromPage(toPage + 1);
    setToPage((prevPage) => prevPage + 6);
    setPageNo((prevPageNo) => prevPageNo + 1);
    console.log("next page button clicked");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <section className="justify-center md:float-end flex items-center">
      <button
        className="text-sky-600 px-2 py-0 font-bold"
        onClick={() => handlePrevPage()}
      >
        <KeyboardDoubleArrowLeftIcon
          sx={{ fontSize: { md: "2rem", xs: "2.5rem" } }}
        />
      </button>

      <span className="font-semibold mx-3">{pageNo}</span>
      <button
        className="text-sky-600 py-0 px-2"
        onClick={() => handleNextPage()}
      >
        <KeyboardDoubleArrowRightIcon
          sx={{ fontSize: { md: "2rem", xs: "2.5rem" } }}
        />
      </button>
    </section>
  );
};

export { PrevNextPageContainer };
