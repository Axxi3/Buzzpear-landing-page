import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import bullet from "../assets/bullet.svg";
import Stats from './Subcomponent/Stats';
import test1 from "../assets/test1.png"
import test2 from "../assets/test2.png"
import test3 from "../assets/test3.png"

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeInAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.div
        id='testimonials'
        className="relative About us flex flex-col gap-[15px] pb-[40px] items-center justify-center"
        ref={ref}
        variants={fadeInAnimation}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="w-full flex items-center justify-center gap-2">
          <img src={bullet} alt="" />
          <div className="About us text uppercase text-[25px] text-[#BC53F0]">
            Customer Stories
          </div>
        </div>
        <div className=" w-[75%]">
          <p className="text-[42px] tracking-tighter leading-[43px] text-center">
            Game-changer! Helped me connect with my audience like never before
          </p>
        </div>

        <div className="w-full px-[40px] mt-[80px] md:mb-[80px] mb-[80px]">
          <div className="flex lg:flex-row flex-col gap-[80px] items-center ">
            <div className=" flex flex-col w-fit items-center">
              <p className="text-[18px] opacity-75 text-center ">
                Working with BuzzPear was a game-changer! Their ability to craft engaging videos helped our brand stand out.
                The quality, creativity, and fast turnaround exceeded our expectations!.{" "}
              </p>

              <div className="flex flex-col gap-3 mt-3 items-center">
                <img
                  src={test1}
                  className="rounded-[100px] w-[80px] h-[80px]"
                  alt="Profile"
                />
                <div className="flex flex-col justify-center items-center w-fit">
                  <h3 className="text-[20px] opacity-90">Sahil Kasana</h3>
                 
                </div>
              </div>
            </div>

            <div className=" flex flex-col w-fit items-center md:pb-[90px]">
              <p className="text-[18px] opacity-75 text-center ">
                Absolutely blown away by the impact of BuzzPear’s videos. Our engagement skyrocketed,
                and our audience loved the content! A must-have service for any brand looking to grow.{" "}
              </p>

              <div className="flex flex-col gap-3 mt-3 items-center">
                <img
                  src={test2}
                  className="rounded-[100px] w-[80px] h-[80px]"
                  alt="Profile"
                />
                <div className="flex flex-col justify-center items-center w-fit">
                  <h3 className="text-[20px] opacity-90">Joy Anand</h3>
                 
                </div>
              </div>
            </div>

            <div className=" flex flex-col w-fit items-center">
              <p className="text-[18px] opacity-75 text-center ">
                BuzzPear took our brand story to the next level! Their videos aren’t just visually stunning but also incredibly
                effective in capturing attention. Couldn’t be happier with the results!{" "}
              </p>

              <div className="flex flex-col gap-3 mt-3 items-center">
                <img
                  src={test3}
                  className="rounded-[100px] w-[80px] h-[80px]"
                  alt="Profile"
                />
                <div className="flex flex-col justify-center items-center w-fit">
                  <h3 className="text-[20px] opacity-90">Kamilah Stevenson</h3>
                 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>

       <Stats/>
      </motion.div>
    </>
  );
}
