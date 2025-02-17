import React, { useRef } from 'react';
import { motion, useTransform, useScroll } from "framer-motion";

import bullet from "../assets/bullet.svg";
import process1 from "../assets/process1.svg";
import process2 from "../assets/process2.svg";
import process3 from "../assets/process3.svg";
import processSteps from '../assets/Process';

export default function Process() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"] // This makes the animation trigger when the element is fully in view
  });

  const x = useTransform(scrollYProgress, [0, 1], ["43%", "-40%"]); //Adjust -65% according to the length of the content

 



  return (
   
    <div className="md:h-[550dvw] w-full md:mb-0 mb-[80px]"  id='process' ref={targetRef}> {/* Added ref here  And added a bg color to see the container*/}
      <div className="w-full sticky top-7 md:h-screen mt-[180px] flex flex-col gap-[15px] justify-center ">
        {/* Section Title */}
        <div className="w-full flex items-center justify-center gap-2">
          <img src={bullet} alt="" />
          <div className="text uppercase md:text-[25px] text-[18px] text-[#49AA3B]">How it works</div>
        </div>

        <div className="w-full">
          <p className="lg:text-[42px] md:text-[35px] text-[28px] tracking-tighter leading-[43px] text-center">
            We handle everything, from content creation to platform adaptation
          </p>
        </div>

        {/* Sticky Card Section */}
        <div className="w-full   md:flex hidden justify-center mt-10 scrollbar-hide overflow-hidden "> {/* Removed top-0, Added overflow-hidden */}
          <motion.div
            style={{ x }}
            className="flex gap-5 px-5 scrollbar-hide"
          >
            {processSteps.map((item, index) => (
              <div
              key={index}
              className="w-[100vw] flex flex-col md:flex-row items-center justify-center px-6 py-9 rounded-xl"
            >
              <div className="rounded-3xl flex items-center justify-center w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-[#000]">
                <img
                  src={item.icon}
                  alt=""
                  className="mix-blend-screen w-[120px] md:w-[100px] h-auto"
                />
              </div>
              <div className="flex flex-col justify-between text w-full md:w-[50%] pl-0 md:pl-8 mt-6 md:mt-0 text-center md:text-left">
                <div className="text-[28px] md:text-[35px] opacity-75">0{index+1}</div>
                <h3 className="text-[22px] md:text-[26px] tracking-tight">
                 {item.tag}
                </h3>
                <p className="text-[16px] md:text-[18px] opacity-75">
                 {item.body}
                </p>
                <p className="text-[14px] md:text-[15px] rounded-4xl flex w-fit px-4 py-1 mt-5 text-black bg-[#49AA3B] mx-auto md:mx-0">
                 {item.output}
                </p>
              </div>
            </div>
            
             
             
            ))}
          </motion.div>
        </div>


        <div className="w-full md:hidden flex flex-col gap-10 justify-center mt-10 overflow-hidden">
  {processSteps.map((item, index) => (
    <div
      key={index}
      className="w-full flex flex-col items-center justify-center px-6 py-9 rounded-xl "
    >
      {/* Image Section */}
      <div className="rounded-3xl flex items-center justify-center w-[200px] h-[200px] md:w-[250px] md:h-[250px] bg-[#000]">
        <img
          src={item.icon}
          alt=""
          className="mix-blend-screen w-[120px] md:w-[150px] h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-between w-full px-4 mt-6 text-center">
        <div className="text-[28px] md:text-[35px] opacity-75">0{index + 1}</div>
        <h3 className="text-[22px] md:text-[26px] tracking-tight">
          {item.tag}
        </h3>
        <p className="text-[16px] md:text-[18px] opacity-75">
        {item.body}
        </p>
        <p className="text-[14px] md:text-[15px] rounded-4xl flex w-fit px-4 py-1 mt-5 text-black bg-[#49AA3B] mx-auto">
          {item.output}
        </p>
      </div>
    </div>
  ))}
</div>


       
      </div>
    </div>
  );
}
