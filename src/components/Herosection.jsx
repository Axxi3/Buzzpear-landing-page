import React from "react";
import social from "../assets/socialmedia.svg";
import like from "../assets/Likes.svg";
import Pentagon from "../assets/Pentagon.svg";
import Stats from "../assets/stat.svg";
import views from "../assets/views.svg";
import { motion } from "framer-motion";
import arrow from "../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

export default function Herosection() {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/booking");
  };

  return (
    <div className="hero-section w-full flex justify-center">
      <div className="max-w-[1512px] relative py-[5%] px-1 lg:px-[5%] flex flex-col items-center">
        
        {/* Relative Wrapper for Text and Floating Icons */}
        <div className="relative w-fit text-center px-[10%] flex flex-col items-center">
          {/* Floating Animated Icons */}
          <motion.img 
            src={social} 
            alt="social" 
            className="absolute -top-[40px] right-[-7px] hidden lg:block"
            animate={{ y: [0, -5, 5, 0] }} 
            transition={{ duration: 6, repeat: Infinity }} 
          />

          <motion.img 
            src={like} 
            alt="like" 
            className="absolute -top-[50px] left-[-7px] hidden lg:block"
            animate={{ y: [0, 5, -5, 0] }} 
            transition={{ duration: 7, repeat: Infinity }} 
          />

          <motion.img 
            src={views} 
            alt="views" 
            className="absolute bottom-[-150px] left-[-7px] hidden lg:block"
            animate={{ y: [0, 3, -3, 0] }} 
            transition={{ duration: 5.5, repeat: Infinity }} 
          />

          <motion.img 
            src={arrow} 
            alt="arrow" 
            className="absolute bottom-[-50px] right-60 -rotate-100 hidden lg:block"
            animate={{ x: [0, 4, -4, 0] }} 
            transition={{ duration: 6, repeat: Infinity }} 
          />

          <motion.img 
            src={Pentagon} 
            alt="pentagon" 
            className="absolute bottom-[-90px] center-[30px]"
            animate={{ rotate: [30, 31, 29, 30] }} 
            transition={{ duration: 6.5, repeat: Infinity }} 
          />

          <motion.img 
            src={Pentagon} 
            className="absolute bottom-[50px] right-[30px] w-[25px] md:w-[30px] h-[25px] md:h-[30px]"
            alt="small-pentagon" 
            animate={{ rotate: [30, 31, 29, 30] }} 
            transition={{ duration: 6.5, repeat: Infinity }} 
          />

          <motion.img 
            src={arrow} 
            alt="arrow" 
            className="absolute bottom-[-50px] left-40 rotate-30 hidden lg:block"
            animate={{ x: [0, -4, 4, 0] }} 
            transition={{ duration: 6, repeat: Infinity }} 
          />

          <motion.img 
            src={Stats} 
            alt="stats" 
            className="absolute bottom-[-150px] right-[-7px] hidden lg:block"
            animate={{ y: [0, 3, -3, 0] }} 
            transition={{ duration: 7.5, repeat: Infinity }} 
          />

          {/* Hero Text */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[24px] sm:text-[40px] md:text-[50px] font-bold uppercase leading-tighter md:leading-[72px] mt-8"
          >
            Tailored Short Form Videos for Online Coaches & Business Owners
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-4 md:mt-6 text-[14px] sm:text-[16px] md:text-[18px] leading-6 opacity-70 px-0 md:px-[10%] text-center"
          >
            Whether you're a relationship coach, fitness coach, or business owner, our expert team specializes in creating content that inspires action and drives results, establishing you as a market leader in your niche.
          </motion.p>

          {/* CTA Button */}
          <div className="flex items-center justify-center mt-6 md:mt-8">
            <motion.button
              onClick={handleBookingClick}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="py-2.5 px-6 md:px-8 rounded-md font-semibold bg-[#49AA3B] text-white text-[14px] md:text-[16px]"
            >
              Book a call
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
