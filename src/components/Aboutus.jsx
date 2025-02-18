import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import bullet from "../assets/bullet.svg";
import grid from "../assets/grid.svg";

export default function Aboutus() {
  const { scrollYProgress } = useScroll();

  // Adjusted values for faster animation, greater distance and smoother transition
  const leftVideosX = useTransform(scrollYProgress, [0, 0.074], [-400, 0]);
  const rightVideosX = useTransform(scrollYProgress, [0, 0.074], [400, 0]);
  const tilt = useTransform(scrollYProgress, [0, 0.049], [5, 0]);
    const fadeIn = useTransform(scrollYProgress, [0, 0.049], [0, 1]); //Fade-in effect

    const videoCardStyle = {
      border: "1px solid white",
      borderRadius: "8px",
      padding: "0.75rem",
      backgroundColor: "#1a1a1a",
      width: "100%", // Default: full-width
      
    };
    
    // Adjust width for larger screens
    const responsiveVideoStyle = (isMobile) => ({
      ...videoCardStyle,
      width: isMobile ? "100%" : "45%", // 100% on mobile, 45% on larger screens
      maxWidth:isMobile? "300px":""
    });
    
    const motionDivStyle = (xValue, tiltValue, fadeValue, isMobile) => ({
  
      x: scrollYProgress.get() > 0.09 ? 0 : xValue, // Freeze x after 0.09
      rotateY: tiltValue,
      opacity: fadeValue, // Apply fade-in
    });
    

  return (
    <div id='about-us' className="About us mt-[150px] flex flex-col gap-[15px] items-center justify-center">
      <div className="w-full flex items-center justify-center gap-2">
        <img src={bullet} alt="" />
        <div className="About us text uppercase text-[25px] text-[#49AA3B]">Introducing</div>
      </div>
      <div className=" lg:w-[80%] md:w-[100%] w-full">
        <p className='lg:text-[42px] text-[35px] tracking-tighter leading-[43px] text-center px-3'>We help entrepreneurs and VCs expand their 
          reach with our AI-powered content engine—building trust, attracting high-quality leads, and positioning 
          them as the go-to authority in their industry on autopilot.</p>
      </div>

      <div
      style={{
        backgroundImage: `url(${grid})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
        className="w-full banner-img relative pt-[20px] gap-[20px] items-center justify-center flex md:flex-row flex-col md:flex-wrap py-3">

        <div className=" z-99 w-full h-full opacity-50"
          style={{
            backgroundImage: `url(${grid})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>

<motion.div className="w-[60%] md:w-[23%]" style={motionDivStyle(leftVideosX, tilt, fadeIn)}>

          <div className="w-full  aspect-[9/16] relative">
            <script src="https://fast.wistia.net/player.js" async></script>
            <iframe
              src="https://fast.wistia.net/embed/iframe/558kmm117t?web_component=true&seo=true&videoFoam=true&autoPlay=true&muted=true"
              title="Best 3 Video"
              allow="autoplay; fullscreen"
              allowTransparency="true"
              frameBorder="0"
              scrolling="no"
              className="w-full h-full rounded-md"
              name="wistia_embed"
            ></iframe>
          </div>
        </motion.div>

        <motion.div className="w-[60%] md:w-[23%]" style={motionDivStyle(leftVideosX, tilt, fadeIn)}>
          <div className="w-full aspect-[9/16] relative">
            <script src="https://fast.wistia.net/player.js" async></script>
            <iframe
              src="https://fast.wistia.net/embed/iframe/lygms2lvk9?web_component=true&seo=true&videoFoam=true&autoPlay=true&muted=true"
              title="Best 3 Video"
              allow="autoplay; fullscreen"
              allowTransparency="true"
              frameBorder="0"
              scrolling="no"
              className="w-full h-full rounded-md"
              name="wistia_embed"
            ></iframe>
          </div>
        </motion.div>

        <motion.div className="w-[60%] md:w-[23%]" style={motionDivStyle(rightVideosX, tilt, fadeIn)}>
          <div className="w-full aspect-[9/16] relative">
            <script src="https://fast.wistia.net/player.js" async></script>
            <iframe
              src="https://fast.wistia.net/embed/iframe/6hw82ijj7m?web_component=true&seo=true&videoFoam=true&autoPlay=true&muted=true"
              title="Best 3 Video"
              allow="autoplay; fullscreen"
              allowTransparency="true"
              frameBorder="0"
              scrolling="no"
              className="w-full h-full rounded-md"
              name="wistia_embed"
            ></iframe>
          </div>
        </motion.div>

        <motion.div className="w-[60%] md:w-[23%]" style={motionDivStyle(rightVideosX, tilt, fadeIn)}>
          <div className="w-full aspect-[9/16] relative">
            <script src="https://fast.wistia.net/player.js" async></script>
            <iframe
              src="https://fast.wistia.net/embed/iframe/l933suurty?web_component=true&seo=true&videoFoam=true&autoPlay=true&muted=true"
              title="Best 3 Video"
              allow="autoplay; fullscreen"
              allowTransparency="true"
              frameBorder="0"
              scrolling="no"
              className="w-full h-full rounded-md"
              name="wistia_embed"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
