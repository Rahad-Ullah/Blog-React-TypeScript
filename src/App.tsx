import Navbar from "./components/Navbar"
import Events from "./pages/Events/Events"
import Posts from "./pages/Posts/Posts"
import Parent from "./pages/children/Parent"
import SecondChild from "./pages/children/SecondChild"


function App() {

  return (
    <div>
      <Navbar></Navbar>
      <div className="w-4/5 mx-auto">
        <h1 className="text-4xl text-center my-16 font-semibold text-purple-600">Blog site with React and TypeScript</h1>
        <div>
          <Events></Events>
          <Parent>
            <SecondChild></SecondChild>
          </Parent>
        </div>
        <div>
          <Posts></Posts>
        </div>
      </div>
    </div>
  )
}

export default App
