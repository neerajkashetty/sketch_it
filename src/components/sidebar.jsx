import React from "react";

export const SideBar = () => {
  return (
    <>
      <div
        id="start"
        className="basis-1 flex flex-col gap-20 justify-center items-center b h-screen"
      >
        <span className="text-lg font-bold -rotate-90">Clients</span>
        <span className="text-lg font-bold -rotate-90">Research</span>
        <span className="text-lg font-bold -rotate-90">Portfolio</span>
        <span className="text-lg font-bold -rotate-90">Podcast</span>
      </div>
    </>
  );
};
