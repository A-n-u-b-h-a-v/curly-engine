
import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Detailedblog from './pages/Detailedblog';
import Publish from "./pages/Publish";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/publish" element={<Publish/>} />
          <Route path ="/blogs/blog/:id" element={<Detailedblog/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
