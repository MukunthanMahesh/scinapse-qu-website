import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loader from './components/UI/Loader';
import Home from './pages/Home';
import Navbar from './components/CoreWeb/Navbar';
import Footer from './components/CoreWeb/Footer';

export default function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for 2–3 seconds
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <Loader />;
  }

  return (
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
  );
}
