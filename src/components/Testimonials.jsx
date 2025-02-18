import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import bullet from "../assets/bullet.svg";
import Stats from './Subcomponent/Stats';
import test1 from "../assets/test1.png";
import test2 from "../assets/test2.png";
import test3 from "../assets/test3.png";

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

  // Instagram profile links
  const instagramLinks = {
    sahil: "https://www.instagram.com/sahilmarketer/",
    joy: "https://www.instagram.com/thejoyanand/",
    kamilah: "https://www.instagram.com/kamilahstevenson"
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
          <img src={bullet} alt="" className='w-[30px] h-[30px]' />
          <div className="About us text uppercase text-[18px] md:text-[25px] text-[#49AA3B]">
            Customer Stories
          </div>
        </div>
        <div className="w-[75%]">
          <p className="lg:text-[42px] md:text-[32px] text-[28px] tracking-tighter leading-[43px] text-center">
            Game-changer! Helped me connect with my audience like never before
          </p>
        </div>

        <div className="w-full md:px-[40px] px-[8px] mt-[80px] md:mb-[80px] mb-[80px]">
          <div className="flex lg:flex-row flex-col gap-[80px] items-center">

            {/* Testimonial 1 */}
            <a href={instagramLinks.sahil} target="_blank" rel="noopener noreferrer" className="flex flex-col w-fit items-center cursor-pointer transition-transform hover:scale-105">
              <p className="md:text-[18px] opacity-75 text-center">
                Working with BuzzPear was a game-changer! Their ability to craft engaging videos helped our brand stand out.
                The quality, creativity, and fast turnaround exceeded our expectations!
              </p>
              <div className="flex flex-col gap-3 mt-3 items-center">
                <img src={test1} className="rounded-[100px] w-[80px] h-[80px]" alt="Profile" />
                <div className="flex flex-col justify-center items-center w-fit">
                  <h3 className="text-[20px] opacity-90">Sahil Kasana</h3>
                  <p className="opacity-70">Business Man</p>
                </div>
              </div>
            </a>

            {/* Testimonial 2 */}
            <a href={instagramLinks.joy} target="_blank" rel="noopener noreferrer" className="flex flex-col w-fit items-center cursor-pointer transition-transform hover:scale-105">
              <p className="md:text-[18px] opacity-75 text-center">
                Absolutely blown away by the impact of BuzzPear’s videos. Our engagement skyrocketed,
                and our audience loved the content! A must-have service for any brand looking to grow.
              </p>
              <div className="flex flex-col gap-3 mt-3 items-center">
                <img src={test2} className="rounded-[100px] w-[80px] h-[80px]" alt="Profile" />
                <div className="flex flex-col justify-center items-center w-fit">
                  <h3 className="text-[20px] opacity-90">Joy Anand</h3>
                  <p className="opacity-70">Digital Creator</p>
                </div>
              </div>
            </a>

            {/* Testimonial 3 */}
            <a href={instagramLinks.kamilah} target="_blank" rel="noopener noreferrer" className="flex flex-col w-fit items-center cursor-pointer transition-transform hover:scale-105">
              <p className="md:text-[18px] opacity-75 text-center">
                BuzzPear took our brand story to the next level! Their videos aren’t just visually stunning but also incredibly
                effective in capturing attention. Couldn’t be happier with the results!
              </p>
              <div className="flex flex-col gap-3 mt-3 items-center">
                <img src={test3} className="rounded-[100px] w-[80px] h-[80px]" alt="Profile" />
                <div className="flex flex-col justify-center items-center w-fit">
                  <h3 className="text-[20px] opacity-90">Kamilah Stevenson</h3>
                  <p className="opacity-70">Fitness Coach</p>
                </div>
              </div>
            </a>

          </div>
        </div>

        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent"></div>

        <Stats />
      </motion.div>
    </>
  );
}
