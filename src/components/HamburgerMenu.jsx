import React, { useState } from "react";
import dropDown from "../assets/dropDown.svg";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col z-10 invisible md:visible items-start justify-center absolute w-1/6 h-full">
      <div className="w-1/6 xl:w-[2rem] p-1 lg:p-1 top-2 h-1/12 flex relative left-6  justify-center items-center bg-yellow-100 border shadow-md rounded-md  absolute">
        <button className="" onClick={toggleDropdown}>
          <img
            src={dropDown}
            alt="dropdown"
            className="w-full h-full object-contain"
          />
        </button>
      </div>
      <div className="w-full h-full z-50">
        {isOpen && (
          <div className="bg-white shadow-lg w-4/5 h-2/3 translate-x-6 transform translate-y-2 absolute rounded-lg relative">
            <div className="font-bold text-sm text-center p-1 flex flex-col h-full w-full items-center gap-1">
              <button className="hover:bg-red-200 w-full hover:cursor">
                Open
              </button>
              <button className="hover:bg-red-200 w-full">Save To</button>
              <button className="hover:bg-red-200 w-full">Export image</button>
              <button className="hover:bg-red-200 w-full">
                Live Collaboration
              </button>
              <button className="hover:bg-red-200 w-full">Help</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
