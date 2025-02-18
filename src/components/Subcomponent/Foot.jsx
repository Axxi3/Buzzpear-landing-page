import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Foot() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-9 lg:py-8">
        <div className="md:flex md:justify-between pt-4">
          {/* Logo & Address */}
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center rounded-[99px]">
              <img src="/logoB.png" className="h-8 me-3 rounded-[99px]" alt="BuzzPear Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Buzzpear</span>
            </a>
            <p className="mt-4 text-sm text-gray-400">
              Professor Colony, Street No. 2 <br />
              Sirhind-Fategarh, Punjab 140406 <br />
              India
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Email: <a href="mailto:Shourya@buzzspear.com" className="hover:underline">Shourya@buzzspear.com</a>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 text-gray-400">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaTwitter size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/buzzspear?igsh=MXUyNXBpcWN6eHJ6cA==" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

        {/* Footer Bottom Section */}
        <div className="sm:flex sm:items-center sm:justify-between text-gray-400 text-sm text-center">
          <span>© 2025 Buzzpear. All Rights Reserved.</span>
          <div className="flex space-x-6 justify-center sm:justify-start mt-4 sm:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Refund Policy</a>
          </div>
          <span className="mt-4 sm:mt-0">
            Made with <span className="text-red-500">❤️</span> by <span className="text-yellow-400">Anurag</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
