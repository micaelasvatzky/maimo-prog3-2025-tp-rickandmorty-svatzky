"use client";

import HeroSection from "@/components/HeroSection";
import HomeButton from "./HomeButton";
import Image from "next/image";
import Link from "next/link";

const HomeContainer = () => {
  return (
    <div className="relative min-h-screen w-full bg-gray-900 bg-gradient-to-b from-black to-transparent overflow-x-hidden">
      <HeroSection />

      <section
        id="main-section"
        className="flex flex-col justify-center items-center px-4"
      >
        <h2 className="text-white text-3xl font-bold mt-16 text-center max-w-3xl">
          Welcome to... uh... whatever this is.
        </h2>
        <div className="flex flex-wrap justify-center gap-10 mx-auto my-5 max-w-[1200px]">
          <HomeButton name="Characters" />
          <HomeButton name="Locations" />
          <HomeButton name="Episodes" />
        </div>
      </section>

      <div className="flex flex-col md:flex-row justify-center items-center bg-black px-4 md:px-12 py-10 gap-8">
        <div className="w-full md:w-[500px] md:mr-20">
          <h4 className="text-2xl font-bold text-white text-center md:text-left">
            Here’s every place you can watch the show... or don’t. We literally
            don’t care.
          </h4>
        </div>

        <Link href="https://www.adultswim.com/rick-and-morty" target="_blank" rel="noopener noreferrer">
          <Image
            src="/assets/adultswim.jpeg"
            width={325}
            height={325}
            alt="adult swim"
            className="w-[180px] sm:w-[200px] mx-auto md:mx-0"
          />
        </Link>
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-6 bg-black">
        <Link
          href="https://www.hbomax.com/ar/es/shows/rick-and-morty/ab553cdc-e15d-4597-b65f-bec9201fd2dd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/hbomax.png"
            width={150}
            height={150}
            alt="Hbo Max"
            className="w-[120px] sm:w-[150px] h-auto"
          />
        </Link>
        <Link
          href="https://www.hulu.com/series/rick-and-morty-4e0f6374-fc81-4da2-b7a9-f7f8c29e7acc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/Hulu.png"
            width={325}
            height={325}
            alt="Hulu"
            className="w-[140px] sm:w-[175px] h-auto"
          />
        </Link>
        <Link
          href="https://www.netflix.com/ar/title/80014749"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/netflix.png"
            width={325}
            height={325}
            alt="Netflix"
            className="w-[160px] sm:w-[200px] h-auto"
          />
        </Link>
      </div>
    </div>

  );
};

export default HomeContainer;
