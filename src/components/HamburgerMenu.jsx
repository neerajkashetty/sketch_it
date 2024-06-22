import React, { useState } from "react";
import dropDown from "../assets/dropDown.svg";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col invisible md:visible items-start justify-center bg-blue-200 absolute w-1/12 h-1/4">
      <div className="w-1/2 xl:w-1/4 p-1 lg:p-1 top-2 h-1/5 flex relative left-6  justify-center items-center bg-yellow-100 border shadow-md rounded-md  absolute">
        <div className="" onClick={toggleDropdown}>
          <img
            src={dropDown}
            alt="dropdown"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="w-full h-full">
      {isOpen && (
        <div className="bg-green-100 w-full h-full translate-x-6 transform translate-y-2 absolute rounded-lg relative">
          <ul className="divide-y divide-red-400  flex flex-col justify-center h-full items-center">
            <li>Ji</li>
            <li>Ji</li>
            <li>Ji</li>
            <li>Ji</li>
            <li>Ji</li>
          </ul>
        </div>
      )}
      </div>
    </div>
  );
};

export default Menu;
