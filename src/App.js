import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Triangle, Quiz, Area, Hypo, Footer } from "./components";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Triangle />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/area" element={<Area />} />
          <Route path="/hypo" element={<Hypo />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
