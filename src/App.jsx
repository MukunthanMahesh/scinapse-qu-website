import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Clinics from './pages/Clinics';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>1
        <Route path="/" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}