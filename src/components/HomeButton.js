"use client";

import Link from "next/link";
import Image from "next/image";

const HomeButton = ({ name }) => {
  return (
    <div className="w-[450px] bg-emerald-800 text-amber-50 rounded-xl p-3 flex flex-col justify-center items-center">
      <p>{name}</p>
      <Image src="/assets/rick-y-morty.png" width={300} height={300} alt="logo"/>
      <Link
        href={`/${name.toLowerCase()}`}
        className="bg-yellow-100 flex rounded-3xl w-[90%] p-2 mb-2 items-center justify-center text-black hover:bg-yellow-300"
      >
        Ver más
      </Link>
    </div>
  );
};

export default HomeButton;
