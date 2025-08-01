"use client";

import Image from "next/image";

const HeroSection = () => {
  const handleScroll = () => {
    const section = document.getElementById("main-section");
    section.scrollIntoView({ behavior: "smooth", block: "start"});
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <Image
        src="/assets/cabezas.jpg"
        alt="Rick y Morty"
        fill
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black opacity-70 z-10" />

     
      <div className="absolute inset-0 z-20 flex justify-between items-center px-24">
        <div className="text-white flex flex-col justify-center items-center ml-8">
          <Image
            src="/assets/logo.png"
            width={550}
            height={150}
            alt="Rick y Morty Logo"
            className="mb-5"
          />
          <h3 className="text-xl font-bold mb-10">
            You made it to this timeline. Congrats, I guess.
          </h3>
          <button
            onClick={handleScroll}
            className="px-6 py-3 bg-lime-300 text-black font-semibold rounded-full text-lg hover:bg-blue-300 hover:cursor-pointer transition"
          >
            Click here. I dare you.
          </button>
        </div>

        <div className="w-[400px] mt-7">
          <Image
            src="/assets/rick-y-morty.png"
            width={400}
            height={400}
            alt="Rick and Morty Portal"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
