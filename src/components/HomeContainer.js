"use client";

import HeroSection from "@/components/HeroSection";
import HomeButton from "./HomeButton";
import Image from "next/image";



const HomeContainer = () => {
  
  return (
    <div>
      <HeroSection />
      <section id="main-section" className="flex flex-col justify-center items-center">
         <h2 className="text-white text-3xl font-bold mt-10">Welcome to... uh... whatever this is.</h2>
        <div className="flex gap-4 mx-3 mb-10 mt-5 max-w-[1200px]">
      <HomeButton name = "Characters" />
      <HomeButton name = "Locations" />
      <HomeButton name = "Episodes"/>
      </div>
      </section>
      <div className="flex justify-center items-center">
         <div className="w-[400px] mr-44">
        <h4 className="text-xl font-bold text-white text-left">Here’s every place you can watch the show... or don’t. We literally don’t care.</h4>
        </div>
        <Image src="/assets/adultswim.jpeg" width={325} height={325} alt="adult swim" className="w-[200px]"/>
      </div>
      <div  className="text-white">Agregar logos</div>
    </div>
  );
};

export default HomeContainer;
