import { Route, Routes } from "react-router-dom";
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import Karakol from './routes/Karakol';
import AlaArcha from "./routes/AlaArcha";
import SaryChelek from './routes/SaryChelek';
import ScrollToTop from './components/ScrollToTop'; 

function App() {
  return (
    <div className="App">
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/karakol" element={<Karakol />} />
        <Route path="/ala-archa" element={<AlaArcha />} />
        <Route path="/sary-chelek" element={<SaryChelek />} />
      </Routes>
    </div>
  );
}

export default App;
