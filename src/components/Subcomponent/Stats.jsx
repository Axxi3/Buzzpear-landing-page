import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const AnimatedNumber = ({ from, to, duration = 1, inView }) => {
  const [value, setValue] = useState(from);
  const [animationComplete, setAnimationComplete] = useState(false); // Track if animation is complete

  useEffect(() => {
    if (!inView || animationComplete) return; // Don't animate if not in view or already complete

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setValue(Math.floor(progress * (to - from) + from));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setAnimationComplete(true); // Mark animation as complete
      }
    };
    requestAnimationFrame(animate);
  }, [from, to, duration, inView, animationComplete]);

  return <>{value}</>;
};

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const numberVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 0.7,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className=" flex lg:flex-row flex-col items-center gap-[30px] justify-center mt-6" ref={ref}>
      <div className="flex flex-col items-center justify-center">
        <motion.h2
          className='lg:text-[65px] text-[45px] font-medium'
          variants={numberVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatedNumber from={5500} to={5783} duration={2} inView={inView} />
        </motion.h2>
        <motion.p
          className='lg:text-[26px] text-[22px]'
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >Videos Created</motion.p>
      </div>
      <div className="h-[1px] w-[120px] lg:rotate-90 bg-gradient-to-r from-transparent via-white to-transparent"></div>

      <div className="flex flex-col items-center justify-center">
        <motion.h2
          className='lg:text-[65px] text-[45px]  font-medium'
          variants={numberVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatedNumber from={406070000} to={406070524} duration={2} inView={inView} />
        </motion.h2>
        <motion.p
          className='lg:text-[26px] text-[22px]'
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >Million + Views</motion.p>
      </div>

      <div className="h-[1px] w-[120px] lg:rotate-90 bg-gradient-to-r from-transparent via-white to-transparent"></div>

      <div className="flex flex-col items-center justify-center">
        <motion.h2
          className='lg:text-[65px] text-[45px] font-medium'
          variants={numberVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatedNumber from={3408000} to={3500000} duration={2.9} inView={inView} />
        </motion.h2>
        <motion.p
          className='lg:text-[26px] text-[22px] font-light'
          variants={textVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >views Generated</motion.p>
      </div>
    </div>
  );
}
