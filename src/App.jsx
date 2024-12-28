import React from "react";
import { LeftPane } from "./components/LeftPane";
import { RightPane } from "./components/RightPane";
import { SideBar } from "./components/sidebar";

function App() {
  return (
    <>
      <div id="start" className=" flex gap-2 ">
        <SideBar />
        <LeftPane />
        <RightPane />
      </div>
    </>
  );
}

export default App;
