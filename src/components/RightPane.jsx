import React from "react";

export const RightPane = () => {
  return (
    <>
      <div
        id="start"
        className="h-full w-full flex flex-col items-center justify-center "
      >
        <div id="Name" className="text-9xl font-bold w-full text-center ">
          <p>Portfolio</p>
        </div>
        <div className="grid grid-cols-2 gap-20 h-96">
          <div className="grid grid-flow-row h-4/5">
            {" "}
            <div className="h-1/2 bg-red-200"> video</div>
            <div> video</div>
          </div>

          <div className="grid grid-flow-row">
            {" "}
            <div> video</div>
            <div> video</div>
          </div>
        </div>
      </div>
    </>
  );
};
