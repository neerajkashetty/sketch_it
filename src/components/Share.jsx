import React from "react";
import ShareIcon from "../assets/shareIcon.svg"
const Share = () => {

    return(
        <div className="flex absolute mt-3 right-0 gap-3 w-1/6 h-1/6">
            <div className="basis-2/5 h-1/4 bg-red-200 flex justify-center items-center rounded-lg ">
            <button className="w-3/5  rounded-lg font-bold text-sm p-2">
            <span className="text-sm lg:visible">Share</span>
            </button>
            <img src={ShareIcon} alt="share" className="w-1/2 h-1/2"/>
            </div>
            <div className="bg-blue-200 justify-center h-1/4 text-sm items-center rounded-lg font-italic flex basis-1/3">
                Library
            </div>

        </div>
    )

}

export default Share