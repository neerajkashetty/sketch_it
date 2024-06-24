import Toolbar from "./components/Toolbar"
import Sketch from "./components/Sketch"
import Menu from "./components/HamburgerMenu"
import Share from "./components/Share"
import React, {useState} from "react"

function App() {
  const [colorpicker, setIsColorPicker] = useState('')

  return (
    <>
    <div id="start" className="h-screen w-screen">
      <Share/>
        <Menu/>
       <Toolbar setIsColorPicker={setIsColorPicker}/>   
       <Sketch colorpicker={colorpicker}/>
    </div>
    </>
  )
}

export default App

