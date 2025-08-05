"use client";

import Image from "next/image";

const HeroSection = () => {
  const handleScroll = () => {
    const section = document.getElementById("main-section");
    section.scrollIntoView({ behavior: "smooth", block: "start"});
  };

  return (
   <div className="relative w-full h-[800px] sm:h-[550px] md:h-[600px] overflow-hidden pt-[70px] md:pt-0">
  <Image
    src="/assets/cabezas.jpg"
    alt="Rick y Morty"
    fill
    className="object-cover z-0"
  />
  <div className="absolute inset-0 bg-black opacity-70 z-10" />

  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 px-6 text-center md:flex-row md:justify-between md:items-center md:px-24 md:text-center">
    
    <div className="text-white flex flex-col justify-center items-center max-w-md">
      <Image
        src="/assets/logo.png"
        width={250}
        height={80}
        alt="Rick y Morty Logo"
        className="mb-4 md:mb-5 md:w-[550px] md:h-auto"
      />
      <h3 className="text-sm sm:text-base font-semibold mb-6 md:text-xl md:font-bold md:mb-10">
        You made it to this timeline. Congrats, I guess.
      </h3>
      <button
        onClick={handleScroll}
        className="px-4 py-2 sm:px-5 sm:py-2.5 bg-lime-300 text-black font-medium rounded-full text-sm sm:text-base md:px-6 md:py-3 md:text-lg md:font-semibold hover:bg-blue-300 hover:cursor-pointer transition"
      >
        Click here. I dare you.
      </button>
    </div>

    {/* Imagen Rick y Morty */}
    <div className="w-[220px] sm:w-[280px] md:w-[400px] mt-4 md:mt-7">
      <Image
        src="/assets/rick-y-morty.png"
        width={400}
        height={400}
        alt="Rick and Morty Portal"
        className="object-contain w-full h-auto"
      />
    </div>
  </div>
</div>

  );
};

export default HeroSection;
