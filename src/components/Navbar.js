"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setSearch("");
  }, [pathname]);

  useEffect(() => {
    if (search.trim().length >= 1) {
      const delay = setTimeout(() => {
        router.push(`/search?q=${encodeURIComponent(search.trim())}`);
      }, 500);

      return () => clearTimeout(delay);
    }
  }, [search, router]);

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/50 shadow-md px-4 pt-3 pb-2 md:px-6 md:pt-2 md:pb-1">
      <div className="flex flex-col-reverse items-center gap-3 md:flex-row md:justify-between md:items-center md:gap-0">
        
        <nav className="flex flex-row w-full md:w-auto">
          <ul className="flex flex-row justify-around w-full items-center gap-2 text-white text-xs font-medium md:gap-8 md:text-sm md:font-semibold">
            <li>
              <Link
                className="hover:cursor-pointer hover:text-lime-300"
                href="/characters"
              >
                Characters
              </Link>
            </li>
            <li>
              <Link
                className="hover:cursor-pointer hover:text-lime-300"
                href="/locations"
              >
                Locations
              </Link>
            </li>
            <li>
              <Link
                className="hover:cursor-pointer hover:text-lime-300"
                href="/episodes"
              >
                Episodes
              </Link>
            </li>
          </ul>
        </nav>

       
        <div className="flex justify-center w-full md:w-auto">
          <Link href="/" className="mx-auto md:mx-0">
            <Image
              src="/assets/portalgun.png"
              width={45}
              height={100}
              alt="Rick and Morty Logo"
              className="w-[40px] md:w-[50px]"
            />
          </Link>
        </div>

        
        <div className="w-full md:w-auto flex justify-center md:justify-end items-center gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full max-w-[180px] text-xs md:text-sm text-black rounded-lg px-2 py-1 
          bg-lime-200/50 backdrop-blur-md border border-lime-300/60 
          shadow-[0_0_20px_rgba(163,230,53,0.3)] 
          clip-path-[polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)] 
          md:max-w-[220px] md:shadow-[0_0_40px_rgba(163,230,53,0.3)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
