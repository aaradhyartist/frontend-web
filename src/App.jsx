import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import Service from "./pages/Service";
import Solutions from "./pages/Solutions";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import FloatingActionButtons from "./components/Home/FloatingActionButtons";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();

  return (
    <div className="relative">
      <Toaster />
      <ScrollToTop />
      <Navbar />

      <div key={location.pathname} className="animate-page">
        <Routes location={location}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <FloatingActionButtons />
      <Footer />
    </div>
  );
}

export default App;
