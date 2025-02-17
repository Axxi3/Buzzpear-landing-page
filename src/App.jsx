import { motion, useScroll, useTransform } from "framer-motion";
import './App.css';
import Navbar from './components/Navbar';
import overlay from "./assets/Overlay.svg";
import logoA from "/logoA.png"
import Home from "./components/HomePage";
import Herosection from './components/Herosection';
import Aboutus from './components/Aboutus';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Bookacall from './components/Bookacall';
import Problem from "./components/Problems";
import cursor from "../public/cursor.svg"
import Stats from "./components/Subcomponent/Stats";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import BookingPage from "./components/BookingPage";

function App() {
  const { scrollYProgress } = useScroll();

  // Scale down the scroll speed (0.5 means half speed)
  const slowScroll = useTransform(scrollYProgress, [0, 1], [0, 0.5]);

  return (

   
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/booking" element={<BookingPage />} />
    </Routes>
  </Router>
  );
}

export default App;
