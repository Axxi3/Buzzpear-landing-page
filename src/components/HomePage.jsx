import { motion, useScroll, useTransform } from "framer-motion";
import overlay from "../assets/Overlay.svg";
import logoB from "/logoB.png";
import cursor from "/cursor.svg";

import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Aboutus from "../components/Aboutus";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import FAQs from "../components/FAQs";
import Bookacall from "../components/Bookacall";
import Problem from "../components/Problems";
import { useNavigate } from "react-router-dom";
import Foot from "./Subcomponent/Foot";

function Home() {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate(); // React Router navigation hook

  // Function to navigate to /booking page
  const handleBookingClick = () => {
    navigate("/booking");
  };

  // Scale down the scroll speed (0.5 means half speed)
  const slowScroll = useTransform(scrollYProgress, [0, 1], [0, 0.5]);

  return (
    <>
    <motion.div style={{ cursor: `url(cursor.svg),auto`,y: slowScroll }} className="relative"
    
    >
      {/* Background Overlay */}
      <div className="absolute w-full flex items-center justify-center">
        <img src={overlay} alt="" />
        </div>
        {/* Navbar */}
        <Navbar />
        {/* Hero Section */}
        <Herosection />
        {/* About Us Section */}
      <Aboutus />
      <Process />
      <Testimonials />
     
      <Problem/>
      <FAQs />
      <Bookacall />
    

      {/* Footer */}
      {/* <div className="flex flex-col gap-5 w-full items-center justify-center p-10">
        <img
          src={logoB}
          className="rounded-[100px] w-[100px] h-[100px]"
          alt="Profile"
        />
        <h1 className="text-[20px]">Connect with us</h1>
        <ul className="flex gap-5">
          <li className="text-[18px] opacity-75">Instagram</li>
          <li className="text-[18px] opacity-75">Linkedin</li>
        </ul>
      </div> */}
    </motion.div>
    <Foot/>
    </>
  );
}

export default Home;
