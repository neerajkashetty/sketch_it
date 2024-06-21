import Toolbar from "./components/Toolbar"
import Sketch from "./components/Sketch"
import Menu from "./components/HamburgerMenu"
import Share from "./components/Share"

function App() {
  return (
    <>
    <div id="start" className="h-screen w-screen">
      <Share/>
        <Menu/>
       <Toolbar/>   
       <Sketch/>
    </div>
    </>
  )
}

export default App

