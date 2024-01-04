import Navbar from "./components/Navbar"
import Events from "./pages/Events/Events"
import Posts from "./pages/Posts/Posts"
import State from "./pages/State/State"
import Parent from "./pages/children/Parent"
import SecondChild from "./pages/children/SecondChild"


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-4/5 mx-auto">
        <h1 className="text-4xl text-center my-16 font-semibold text-purple-600">Blog site with React and TypeScript</h1>
        <Events></Events>
        <div>
          <Parent>
            <SecondChild></SecondChild>
          </Parent>
        </div>
        <State></State>
        <div>
          <Posts></Posts>
        </div>
      </div>
    </div>
  )
}

export default App
