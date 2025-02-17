import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Import icons for menu toggle

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5 relative z-50 bg-transparent">
      {/* LOGO */}
      <div className="LOGO">
        <h2 className="text-[26px] font-bold">
          Buzz<span className="text-[#49AA3B]">Pear</span>
        </h2>
      </div>

      {/* Desktop Navigation - Centered */}
      <ul className="hidden lg:flex items-center gap-10 bg-[#1a1a1a] py-3 px-8 rounded-full absolute left-1/2 transform -translate-x-1/2">
        {["Process", "Testimonials", "Features","Problems", "FAQs"].map((item, index) => (
          <li key={index}>
            <a
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="opacity-70 text-[14px] hover:text-[#49AA3B] transition-all duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Navigation - Limited Height */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-[35vh] bg-[#1a1a1a] shadow-lg p-6"
          >
            {/* Close Button */}
            <button className="absolute top-5 right-5 text-gray-400" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>

            {/* Navigation Links */}
            <div className="text-left space-y-4">
              <h2 className="text-3xl font-bold text-white">
                Buzz<span className="text-[#49AA3B]">Pear</span>
              </h2>
              {["Process", "Testimonials", "Features","Problems","FAQs"].map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block text-white text-lg opacity-70 hover:text-[#49AA3B] transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
