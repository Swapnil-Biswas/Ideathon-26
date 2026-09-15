import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Guidelines from "./pages/Guidelines";
import SmoothScroll from "./components/shared/SmoothScroll";

function App() {
  return (
    <BrowserRouter>
      <SmoothScroll>
        <Navbar />
        <main className="bg-lab-black min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guidelines" element={<Guidelines />} />
          </Routes>
        </main>
        <Footer />
      </SmoothScroll>
    </BrowserRouter>
  );
}

export default App;
