import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useAppBoot from "./hooks/useAppBoot";
import Loader from "./components/UI/Loader";
import Home from "./pages/Home";
import Navbar from "./components/CoreWeb/Navbar";
import Footer from "./components/CoreWeb/Footer";

export default function App() {
  const bootDone = useAppBoot();
  const [minTimeDone, setMinTimeDone] = useState(false);
  const [startFadeOut, setStartFadeOut] = useState(false);
  const [showApp, setShowApp] = useState(false);

  // Minimum time loader must display
  useEffect(() => {
    const timer = setTimeout(() => setMinTimeDone(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // When both are done, start fading out
  useEffect(() => {
    if (bootDone && minTimeDone) {
      setStartFadeOut(true);
      // After fade-out completes (e.g., 600ms), hide loader and show app
      setTimeout(() => setShowApp(true), 600);
    }
  }, [bootDone, minTimeDone]);

  return (
    <>
      {!showApp && <Loader fadingOut={startFadeOut} />}
      {showApp && (
        <div className="min-h-screen flex flex-col">
          <BrowserRouter>
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </div>
      )}
    </>
  );
}
