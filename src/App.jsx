import Toolbar from "./components/Toolbar"
import Sketch from "./components/Sketch"

function App() {
  return (
    <>
    <div id="start" className="bg-gray-200 fixed h-screen w-screen">
      <Toolbar/>   
       <Sketch/>
    </div>
    </>
  )
}

export default App

