import React from "react";
import dropDown from "../assets/dropDown.svg"

const Menu = () => {
    
    return (
        <div className="flex invisible md:visible items-start justify-center absolute w-1/12 h-1/6">
        <div className="w-1/2 lg:w-1/3 p-2 lg:p-1 mt-2 h-1/4 flex justify-center items-center bg-yellow-100 border shadow-md rounded-md  absolute">
        <div>
         <img src={dropDown} alt="dropdown" className="w-full h-full object-contain"/>
        </div>
        </div>
        </div>
    )
}

export default Menu