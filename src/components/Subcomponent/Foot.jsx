import React from 'react';

export default function Foot() {
  return (
    <footer className="bg-white dark:bg-[#0d0b0d] ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-9 lg:py-8">
        <div className="md:flex md:justify-between pt-4">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center rounded-[99px]">
              <img src="/logoB.png" className="h-8 me-3 rounded-[99px]" alt="BuzzPear Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BuzzPear</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Support</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Twitter</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">LinkedIn</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" className="hover:underline">BuzzPear</a>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">Twitter</a>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">LinkedIn</a>
            <a href="https://www.instagram.com/buzzspear?igsh=MXUyNXBpcWN6eHJ6cA==" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
