import React from "react";
import Profile from "../assets/Profile.png";
import { Boxes } from "lucide-react";
import Animation from "../assets/Animation.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const LeftPane = () => {
  return (
    <>
      <div id="start" className="flex flex-col h-screen p-10 w-2/3 ">
        <div className="bg-white w-1/6 h-1/5 justify-center flex gap-4 items-center text-center rounded-br-xl rounded-full rounded-r-xl rotate-180 absolute">
          <p className="rotate-180 font-semibold text-xl">About Me</p>
          <Boxes />
        </div>
        <div className="h-full bg-[#9d77f1]/70 rounded-2xl flex w-full  flex-row-reverse justify-end items-start">
          <div className="flex flex-col  rounded-2xl items-start  h-1/2 top-24 right-12   justify-start relative ">
            <img alt="profile" src={Profile} className="rounded-full " />
          </div>
          <div className="flex mt-80 ml-10 ">
            <div className="flex flex-col gap-2 p-4">
              <div className="text-5xl text-white">Im,</div>
              <div className="text-5xl text-white italic font-bold">Rohith</div>
              <div className="text-5xl text-white italic font-bold">
                Chittiyala
              </div>
              <div className="text-sm text-white font-thin">
                neeraj.kashetty29@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <Player
            autoplay={true}
            src={Animation}
            loop={true}
            style={{ height: 100, width: 100 }}
          />
        </div>
      </div>
    </>
  );
};
