import React from "react";
import Profile from "../assets/Profile.png";
import { Boxes } from "lucide-react";
import Animation from "../assets/Animation.json";
import { Player } from "@lottiefiles/react-lottie-player";

export const LeftPane = () => {
  return (
    <>
      <div id="start" className="flex flex-col h-screen p-10 w-4/5  ">
        <div className="bg-white w-1/6 h-1/5 justify-center flex gap-4 items-center text-center rounded-br-xl rounded-full rounded-r-xl rotate-180 absolute">
          <p className="rotate-180 font-semibold text-xl">About Me</p>
          <Boxes />
        </div>
        <div className="h-full bg-[#9d77f1]/70 rounded-2xl flex w-4/5  flex-row-reverse justify-end items-start">
          <div className="flex flex-col  rounded-2xl items-start  justify-start relative ">
            <img alt="khdsa" src={Profile} className="rounded-full " />
          </div>
          <div className="flex mt-80 ml-10">
            <div className="flex flex-col gap-4 p-4">
              <div className="text-5xl text-white">Im,</div>
              <div className="text-5xl text-white italic font-bold">
                Neeraj,
              </div>
              <div className="text-5xl text-white italic font-bold">
                Kasheety
              </div>
              <div className="text-sm text-white font-thin">
                neeraj.kashetty29@gmail.com
              </div>
            </div>
            <div className="flex items-center">
              <Player
                autoplay={true}
                lottieRef={Animation}
                loop={true}
                style={{ height: 50, width: 50 }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
