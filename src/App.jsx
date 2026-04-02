import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "@/layout/Navbar";
import { Footer } from "./layout/Footer";

import Home from "./pages/Home";
import Cv from "./pages/Cv";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cv" element={<Cv />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;