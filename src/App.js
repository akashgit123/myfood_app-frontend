import Home from "./screens/Home";
import About from "./components/About";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./screens/Login";
import Signup from "./screens/Signup";

function App() {
  return (
    <Router >
      <div className="contaoiner">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
