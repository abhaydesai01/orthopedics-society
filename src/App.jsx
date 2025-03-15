import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WelcomePopup } from "./components/WelcomePopUp";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUS";
import OfficeBearers from "./pages/OfficeBearers";
import Gallery from "./pages/gallery";
import Events from "./pages/Events";
import Links from "./pages/Links";
import Journals from "./pages/Journals";
import Downloads from "./pages/Downloads";
import PresidentsMessage from "./pages/presidentsmessage";
import Circulars from "./pages/Circulars";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/office-bearers" element={<OfficeBearers />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/events" element={<Events />} />
            <Route path="/links" element={<Links />} />
            <Route path="/journals" element={<Journals />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/presidentsmessage" element={<PresidentsMessage />} />
            <Route path="/circulars" element={<Circulars />} />
          </Routes>
        </main>
        <Footer />
        <WelcomePopup />
      </div>
    </BrowserRouter>
  );
}

export default App;
