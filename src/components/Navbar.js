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
    <div className="fixed top-0 left-0 w-full z-50 bg-black/50 shadow-md px-6 pt-3 lg:pt-2 lg:pb-1 md:pr-6 pb-2">
      <div className="flex flex-row  md:flex-row md:justify-between md:items-center ">
        <nav className="flex flex-row mt-4 md:mt-0">
          <ul className="flex flex-row justify-around items-center gap-2 md:gap-8 text-white text-sm font-semibold ">
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

        <Link href="/">
          <Image
            src="/assets/portalgun.png"
            width={45}
            height={100}
            alt="Rick and Morty Logo"
            className="w-[50px]"
          />
        </Link>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="text-black rounded-lg px-1.5 flex justify-between items-center 
  bg-lime-200/50 backdrop-blur-md border border-lime-300/60 
  shadow-[0_0_40px_rgba(163,230,53,0.3)] 
  clip-path-[polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
