import React, { useState } from "react";
import { motion } from "framer-motion";
import bullet from "../assets/bullet.svg";
import chevron from "../assets/chevron.svg";

const faqs = [
  {
    question: "When can I expect to see results?",
    answer:
      "Many clients experience increased engagement and leads shortly after adopting new content strategies.",
  },
  {
    question: "If I'm not completely satisfied with the content, can I request changes?",
    answer:
      "Yes, we're happy to make revisions to ensure the content aligns with your specific needs and objectives.",
  },
  {
    question: "What sets your content creation services apart?",
    answer:
      "Our goal is to not only attract an audience but to convert them into loyal customers.",
  },
  {
    question: "Which pricing option best suits my business needs and budget?",
    answer:
      "While many of our clients find the Buzzspear package to be the best fit, we offer a free consultation to help you determine the optimal solution for your specific needs. You can book this consultation by selecting our $0 pricing option.",
  },
];


export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faqs" className="FAQs mt-[90px] flex flex-col gap-[15px] items-center justify-center">
      {/* Section Heading */}
      <div className="w-full flex items-center justify-center gap-2">
        <img src={bullet} alt="" />
        <div className="text-center uppercase lg:text-[25px] text-[#49AA3B]">
          FAQS
        </div>
      </div>
      <div className="lg:w-[35%] w-[60%]">
        <p className="text-[42px] tracking-tighter leading-[43px] text-center">
          Have More Questions?
        </p>
      </div>

      {/* FAQ List */}
      <div className="flex flex-col gap-5 mt-[60px] lg:px-[13%]">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className={`FAQs__item p-6 rounded-xl cursor-pointer transition-colors duration-300 ${
              openIndex === index ? "bg-[#292929]" : ""
            }`}
            onClick={() => toggleFAQ(index)}
            whileHover={{ scale: 1.02 }} // Small hover effect
          >
            {/* Question */}
            <div className="flex items-center justify-between w-full">
              <h4 className="text-[20px] opacity-90">{faq.question}</h4>
              <motion.img
                src={chevron}
                className="w-[28px] h-[28px]"
                alt=""
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Answer (Expanding & Collapsing) */}
            <motion.div
              initial={false}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden mt-3"
            >
              <p className="text-[18px] opacity-75">{faq.answer}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
