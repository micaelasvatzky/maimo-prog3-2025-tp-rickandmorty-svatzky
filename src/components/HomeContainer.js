"use client";

import HeroSection from "@/components/HeroSection";
import HomeButton from "./HomeButton";
import Image from "next/image";

const HomeContainer = () => {
  return (
    <div className=" bg-gray-900 bg-gradient-to-b from-black to-transparent">
      <HeroSection />
      <section
        id="main-section"
        className="flex flex-col justify-center items-center"
      >
        <h2 className="text-white text-3xl font-bold mt-16">
          Welcome to... uh... whatever this is.
        </h2>
        <div className="flex gap-10 mx-3 mb-16 mt-5 max-w-[1200px]">
          <HomeButton name="Characters" />
          <HomeButton name="Locations" />
          <HomeButton name="Episodes" />
        </div>
      </section>
      <div className="flex justify-center items-center bg-black">
        <div className="w-[500px] mr-44">
          <h4 className="text-2xl font-bold text-white text-left">
            Here’s every place you can watch the show... or don’t. We literally
            don’t care.
          </h4>
        </div>
        <Image
          src="/assets/adultswim.jpeg"
          width={325}
          height={325}
          alt="adult swim"
          className="w-[200px]"
        /> 
      </div>
      <div className="flex justify-around p-10 bg-black">
         <Image
          src="/assets/hbomax.png"
          width={150}
          height={150}
          alt="Hbo Max"
          className=" ml-4 w-[150px] h-[100px]"
        />
        <Image
          src="/assets/hulu.png"
          width={325}
          height={325}
          alt="Hulu"
          className="w-[175px]"
        />
        <Image
          src="/assets/netflix.png"
          width={325}
          height={325}
          alt="Netflix"
          className="w-[200px]"
        />
      </div>
    </div>
  );
};

export default HomeContainer;
