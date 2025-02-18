import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Bookacall() {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate("/booking");
  };

  return (
    <div className='md:w-full w-[100%] flex items-center justify-center'>
    <div id='get-in-touch' className='md:w-full w-[80%]  md:max-w-[60%]  md:mx-auto mb-[40px] mt-24 flex flex-col gap-4 items-center justify-center bg-[#161616] p-6 md:p-10 rounded-3xl'>
      <h1 className='text-3xl md:text-5xl font-medium text-center'>
        Ready to take your content game to the next level?
      </h1>
      <p className='text-lg md:text-xl opacity-75 text-center'>
        While others spend hours writing, recording, and editing, you'll have a 24/7 AI version of yourself creating content, building influence, and attracting opportunities—automatically.
      </p>
      <button onClick={handleBookingClick} className='px-5 md:px-7 py-2.5 rounded-md font-semibold bg-[#49AA3B] text-white mt-6'>
        Book a call
      </button>
    </div>
    </div>
  );
}
