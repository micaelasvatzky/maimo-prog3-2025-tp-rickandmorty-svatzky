import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/50 shadow-md px-6 pt-3 lg:pt-2 lg:pb-1 md:pr-6 pb-2">
      <div className="flex flex-row  md:flex-row md:justify-between md:items-center ">
        <Link href="/"><Image src= "/assets/portalgun.png" width={45} height={100} alt="Rick and Morty Logo" /></Link>
        <nav className="flex flex-row mt-4 md:mt-0">
          <ul className="flex flex-row justify-around items-center gap-2 md:gap-8 text-white text-sm font-semibold ">
            <li>
              <Link className="hover:cursor-pointer hover:text-lime-300" href="/characters">Characters</Link>
            </li>
             <li>
              <Link className="hover:cursor-pointer hover:text-lime-300"  href="/locations">Locations</Link>
            </li>
             <li>
              <Link className="hover:cursor-pointer hover:text-lime-300"  href="/episodes">Episodes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
