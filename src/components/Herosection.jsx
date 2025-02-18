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
    <div className="hero-section  relative py-[10%] px-1 lg:px-[5%]">
      {/* Floating Animated Icons */}
      <div className="absolute w-full top-14 right-3 hidden lg:flex items-end justify-end pr-[100px]">
        <motion.img src={social} alt="social" animate={{ y: [0, -4, 4, 0] }} transition={{ duration: 6, repeat: Infinity }} />
      </div>
      
      <div className="absolute w-full top-14 left-3 hidden lg:flex items-end justify-start pr-[100px]">
        <motion.img src={like} alt="like" animate={{ y: [0, 5, -3.5, 0] }} transition={{ duration: 7, repeat: Infinity }} />
      </div>

      <div className="absolute w-full -bottom-20 left-30 hidden lg:flex items-end justify-start pr-[100px]">
        <motion.img src={views} alt="views" animate={{ y: [0, 2.5, -3.5, 0] }} transition={{ duration: 5.5, repeat: Infinity }} />
      </div>

      <div className="absolute w-[250px] md:w-[300px] bottom-3 left-70 rotate-10 hidden lg:flex items-end justify-start pr-[100px]">
        <motion.img src={arrow} alt="arrow" animate={{ x: [0, 3, -3, 0] }} transition={{ duration: 6, repeat: Infinity }} />
      </div>

      <div className="absolute rotate-12 w-full -bottom-4 gap-5 left-8 flex items-start justify-center pr-[100px]">
        <motion.img src={Pentagon} alt="pentagon" animate={{ rotate: [30, 31, 29, 30] }} transition={{ duration: 6.5, repeat: Infinity }} />
        <motion.img src={Pentagon} className="w-[25px] md:w-[30px] h-[25px] md:h-[30px]" alt="small-pentagon" animate={{ rotate: [30, 31, 29, 30] }} transition={{ duration: 6.5, repeat: Infinity }} />
      </div>

      <div className="absolute w-[250px] md:w-[300px] bottom-50 right-20 -rotate-75 hidden lg:flex items-end justify-start pr-[100px]">
        <motion.img src={arrow} alt="arrow" animate={{ x: [0, -3, 3, 0] }} transition={{ duration: 6, repeat: Infinity }} />
      </div>

      <div className="absolute w-full -bottom-19 right-8 hidden lg:flex items-end justify-end pr-[100px]">
        <motion.img src={Stats} alt="stats" animate={{ y: [0, 2.5, -2.5, 0] }} transition={{ duration: 7.5, repeat: Infinity }} />
      </div>

      {/* Hero Text */}
      <div className="hero-text text-center md:px-[10%]">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[24px] sm:text-[40px] md:text-[50px] font-bold uppercase leading-tighter md:leading-[72px] mt-8"
        >
          Tailored Short Form Videos for Online Coaches & Business Owners
        </motion.h1>
      </div>

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
  );
}
