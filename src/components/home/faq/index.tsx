import Image from "next/image";
import { useState } from "react";

const faq = [
  {
    id: 1,
    question: "What are the advantages of Dimata ProChain?",
    answer:
      "ProChain is a multifunctional, integrated, user-friendly, flexible, and security-updated POS and inventory system.",
  },
  {
    id: 2,
    question: "For what types of businesses is Dimata ProChain recommended?",
    answer:
      "ProChain it is recommended for minimarkets, restaurants, furniture, art and jewelry stores, making inventory management and sales easier.",
  },
  {
    id: 3,
    question:
      "What technologies are commonly used to build software at Dimata IT Solutions?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vehicula diam, in elementum tellus convallis ac.",
  },
  {
    id: 4,
    question:
      "What technologies are commonly used to build software at Dimata IT Solutions?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vehicula diam, in elementum tellus convallis ac.",
  },
  {
    id: 5,
    question:
      "What technologies are commonly used to build software at Dimata IT Solutions?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vehicula diam, in elementum tellus convallis ac.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col gap-5 p-5 mt-20 sm:px-10 lg:px-32">
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center mb-10 font-bold">
          Frequently Asked Questions
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        {faq.map((item, index) => (
          <div
            key={item.id}
            className={`group flex flex-col justify-between border-2 border-amber-500 w-full sm:w-[90%] lg:w-full cursor-pointer 
                    ${
                      activeIndex === index
                        ? "bg-amber-500 text-white"
                        : "bg-white hover:bg-amber-500 hover:text-white"
                    }`}
            onClick={() => handleClick(index)}
          >
            <div className="flex flex-row justify-between items-center w-full p-4 sm:p-5">
              <h1
                className={`text-lg sm:text-xl group-hover:text-white 
                            ${activeIndex === index ? "text-white" : ""}`}
              >
                {item.question}
              </h1>
              <Image
                src="/home/arrow.png"
                alt="down"
                width={20}
                height={20}
                className={`transform transition-transform duration-500 ease-in-out 
                        ${activeIndex === index ? "rotate-180" : ""}`}
              />
            </div>
            {activeIndex === index && (
              <div
                className={`overflow-hidden cursor-default transition-all duration-300 ease-in-out 
                        ${activeIndex === index ? "max-h-[200px]" : "max-h-0"}`}
              >
                <div className="p-4 sm:p-5 text-gray-800 bg-white">
                  <p>{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
