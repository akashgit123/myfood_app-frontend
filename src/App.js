import Home from "./screens/Home";
import About from "./components/About";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router >
      <div className="contaoiner">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
