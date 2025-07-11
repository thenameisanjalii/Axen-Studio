import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/InnerComponent/Home/Home";
import Projects from "./components/InnerComponent/Projects/projects";
import ConnectUs from "./components/InnerComponent/Connect Us/ConnectUs";
import About from "./components/InnerComponent/About Us/About";
import Services from "./components/InnerComponent/Services/Services";
function App() {
  return (
    <Routes>
      {/* Root layout with Navbar */}
      <Route path="/" element={<Navbar />}>
        {/* Child routes */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="connect" element={<ConnectUs />} />
        <Route path="services" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;
