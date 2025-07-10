import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Vehicles from "./pages/Vehicles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
