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
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMinTimeDone(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (bootDone && minTimeDone) {
      setFadeOut(true);
    }
  }, [bootDone, minTimeDone]);

  return (
    <>
      <Loader fadingOut={fadeOut} />
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
    </>
  );
}
