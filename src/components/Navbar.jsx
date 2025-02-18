import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex px-[50px] items-center justify-between py-5 relative z-50 bg-transparent">
      {/* LOGO */}
      <div className="LOGO">
        <h2 className="text-[26px] font-bold">
          Buzz<span className="text-[#49AA3B]">Pear</span>
        </h2>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-10 bg-[#1a1a1a] py-3 px-8 rounded-full absolute left-1/2 transform -translate-x-1/2">
        {["Process", "Testimonials", "About Us", "Problems", "FAQs","Get in Touch"].map(
          (item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="opacity-70 text-[14px] hover:text-[#49AA3B] transition-all duration-200"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation - Fullscreen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 w-[100vw] h-screen bg-[#1a1a1a] flex flex-col items-center justify-center space-y-6 text-center"
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>

            {/* Navigation Links */}
            {["Process", "Testimonials", "About Us", "Problems", "FAQs","Get in Touch"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block text-white text-2xl opacity-70 hover:text-[#49AA3B] transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
