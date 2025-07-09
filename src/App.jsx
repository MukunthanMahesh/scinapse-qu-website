import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAppBoot from "./hooks/useAppBoot";
import Loader from "./components/UI/Loader";
import Home from "./pages/Home";
import Navbar from "./components/CoreWeb/Navbar";
import Footer from "./components/CoreWeb/Footer";

export default function App() {
  const bootDone = useAppBoot(); // preload fonts/assets
  const [domReady, setDomReady] = useState(false);
  const [minTimeDone, setMinTimeDone] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [hideLoader, setHideLoader] = useState(false);

  // Track DOM ready
  useEffect(() => {
    if (document.readyState === "complete" || document.readyState === "interactive") {
      setDomReady(true);
    } else {
      const handler = () => setDomReady(true);
      window.addEventListener("DOMContentLoaded", handler);
      return () => window.removeEventListener("DOMContentLoaded", handler);
    }
  }, []);

  // Ensure minimum loader time
  useEffect(() => {
    const timer = setTimeout(() => setMinTimeDone(true), 1_200);
    return () => clearTimeout(timer);
  }, []);

  // When everything is ready and min loader time passes, fade out
  useEffect(() => {
    if (bootDone && domReady && minTimeDone) {
      setFadeOut(true);
      const timer = setTimeout(() => setHideLoader(true), 1_200); // match fade duration
      return () => clearTimeout(timer);
    }
  }, [bootDone, domReady, minTimeDone]);

  return (
    <>
      {!hideLoader && <Loader fadingOut={fadeOut} />}
      
      <div className="min-h-screen flex flex-col bg-brand-white text-white">
        <BrowserRouter>
          <Navbar />
          <main className="flex-1 pt-[72px]">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}
