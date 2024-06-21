import React from "react";

const Share = () => {

    return(
        <div className="flex absolute mt-3 right-0 gap-3 w-1/6">
            <div className="basis-2/4 flex justify-center rounded-lg ">
            <button className="w-3/5 bg-blue-200 rounded-lg font-bold text-sm p-2">
            Share
            </button>
            </div>
            <div className="bg-blue-200 justify-center text-sm items-center rounded-lg font-italic flex basis-1/3">
                Library
            </div>

        </div>
    )

}

export default Share