import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import StudyPlansList from "./pages/StudyPlansList";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<StudyPlansList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
