import React from "react";
import { TailSpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="flex justify-center my-20">
      <TailSpin
        visible={true}
        height="50"
        width="50"
        color="#002387"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export { Spinner };
