import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import "./index.css";
import Project from "./component/Project";
// import Card from "./component/Card";
import Home from "./component/Home";
import About from "./component/About";
import Skill from "./component/Skill";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skill" element={<Skill />} />
          <Route path="project" element={<Project />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
