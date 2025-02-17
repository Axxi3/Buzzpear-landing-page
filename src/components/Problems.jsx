import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from "framer-motion";

import bullet from "../assets/bullet.svg";
import process1 from "../assets/process1.svg";
import Tags from './Subcomponent/Tags';
import note from "../assets/note.svg"
import progress from "../assets/progress.svg"

export default function Problem() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["0.2 1", "0.8 1"]  // Adjusted for better animation start timing
  });

  // Smooth reversed animation (Cards move out as user scrolls)
  const leftCardX = useTransform(scrollYProgress, [0, 1], [-250, 0]); // Moves left to center
  const bottomCardY = useTransform(scrollYProgress, [0, 1], [150, 0]); // Moves up to center
  const rightCardX = useTransform(scrollYProgress, [0, 1], [250, 0]); // Moves right to center
  const fadeIn = useTransform(scrollYProgress, [0, 1], [0, 1]); // Fades in smoothly

  return (
    <div className="w-full md:mb-0 mb-[80px]" id='process' ref={targetRef}>
      <div className="w-full sticky top-7 mt-[180px] flex flex-col gap-[15px] justify-center">

        {/* Section Title */}
        <div className="w-full flex items-center justify-center gap-2">
          <img src={bullet} alt="" />
          <div className="text uppercase md:text-[25px] text-[18px] text-[#49AA3B]">Why work with us?</div>
        </div>

        <div className="w-full">
          <p className="lg:text-[42px] md:text-[35px] text-[28px] tracking-tighter leading-[43px] text-center">
            We handle everything, from content creation to platform adaptation
          </p>
        </div>

        {/* Animated Cards Section */}
        <div className="w-full flex flex-col lg:flex-row gap-10 justify-center items-center mt-10 overflow-hidden">

          {/* First Card - Moves left to center */}
          <motion.div
            className='flex flex-col gap-8 bg-[#1C1C1C] rounded-2xl lg:w-[25%] w-[80%] p-[29px]'
            style={{ x: leftCardX, opacity: fadeIn }}
            transition={{ ease: "easeInOut", duration: 1.5 }} 
          >
            <div>
              <img className='w-[100px] h-[100px]' src={process1} alt="" />
            </div>
            <div className="Text flex flex-col gap-2">
              <h3 className='text-[26px] font-medium'>Grow within Months</h3>
              <p className='text-[18px] opacity-65'>We help you increase your viewership count within a set period</p>
            </div>
          </motion.div>

          {/* Second Card - Moves up to center */}
          <motion.div
            className='flex flex-col gap-8 bg-[#1C1C1C] w-[80%] rounded-2xl lg:w-[25%] p-[29px]'
            style={{ y: bottomCardY, opacity: fadeIn }}
            transition={{ ease: "easeInOut", duration: 1.5 }} 
          >
             <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-[#161616] border-[5px] border-[#161616]">
    <img className='w-[50px] h-[50px]' src={note} alt="" />
  </div>
            <div className="Text flex flex-col gap-2">
              <h3 className='text-[26px] font-medium'>Tailored Strategies</h3>
              <p className='text-[18px] opacity-65'>We craft unique approaches to match your brand's vision</p>
            </div>
          </motion.div>

          {/* Third Card - Moves right to center */}
          <motion.div
  className='flex flex-col gap-8 bg-[#1C1C1C] w-[80%] lg:w-[25%] rounded-2xl p-[29px]'
  style={{ x: rightCardX, opacity: fadeIn }}
  transition={{ ease: "easeInOut", duration: 1.5 }} 
>
  {/* Image with circular border */}
  <div className="w-[100px] h-[100px] flex items-center justify-center rounded-full bg-[#161616] border-[5px] border-[#161616]">
    <img className='w-[50px] h-[50px]' src={progress} alt="" />
  </div>

  {/* Text Content */}
  <div className="Text flex flex-col gap-2">
    <h3 className='text-[26px] font-medium'>Consistent Growth</h3>
    <p className='text-[18px] opacity-65'>We ensure sustained engagement and visibility</p>
  </div>
</motion.div>


        </div>

        {/* Tags Section */}
        <div className="w-full px-[20%] items-center justify-center mt-[30px] hidden lg:flex gap-10 flex-wrap">
          <Tags name={"Quick Revisions"} /><Tags name={"24*7 support"} /><Tags name={"Flexible Timing"} /><Tags name={"Trend Report"} /><Tags name={"Growth Analysis"} />
        </div>

      </div>
    </div>
  );
}
