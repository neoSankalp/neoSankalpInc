import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Call from "./pages/Call/Call";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import Work from "./pages/Work/Work";

export default function App() {
  return (
    <>
      <div className="font-poppins">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/call" element={<Call />} />
          <Route path="/work" element={<Work />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}
