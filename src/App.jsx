import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Countries from "./pages/Countries.jsx";
import CleanUp from "./pages/CleanUp.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clean-up" element={<CleanUp />} />
        <Route path="/countries" element={<Countries />} />
      </Routes>
    </>
  );
}

export default App;
