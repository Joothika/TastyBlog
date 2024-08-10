import React from "react";
import PRIMARYLOGO from "../../../../public/images/PRIMARYLOGO.png";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <h1
      className="text-xl tracking-wide font-semibold  first-letter:text-2xl cursor-pointer"
      onClick={() => navigate(`/`)}
    >
      <img src={PRIMARYLOGO} className="w-28 sm:w-36" />
    </h1>
  );
};

export { Logo };
