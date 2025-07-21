"use client";

import Image from "next/image";

const HeroSection = () => {
  const handleScroll = () => {
    const section = document.getElementById("main-section");
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      <Image
        src="/assets/cabezas.jpg"
        alt="Rick y Morty"
        fill
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black opacity-70 z-10" />

     
      <div className="absolute inset-0 z-20 flex justify-between items-center px-20">
        <div className="text-white flex flex-col justify-center items-center ml-4">
          <Image
            src="/assets/logo.png"
            width={500}
            height={150}
            alt="Rick y Morty Logo"
            className="mb-5"
          />
          <h3 className="text-xl font-bold mb-5">
            You made it to this timeline. Congrats, I guess.
          </h3>
          <button
            onClick={handleScroll}
            className="px-6 py-3 bg-lime-300 text-black font-bold rounded-full hover:bg-blue-300 transition"
          >
            Scroll. I dare you.
          </button>
        </div>

        <div className="w-[375px] mt-7">
          <Image
            src="/assets/rick-y-morty.png"
            width={375}
            height={375}
            alt="Rick and Morty Portal"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
