import Image from "next/image";
import Link from "next/link";

const LocationCard = ({ location }) => {
  return (
    <article
      className="col-span-3 w-[400px] h-[140px] text-black rounded-xl p-3 flex flex-col justify-center items-center text-center bg-lime-200/50 backdrop-blur-md border border-lime-300/60 shadow-[0_0_40px_rgba(163,230,53,0.3)]
  clip-path-[polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)]"
    >
      <h2 className="text-2xl mb-2">{location.name}</h2>
        <p>{location.type}</p>
        <p className="mb-1">{location.dimension}</p>
    </article>
  );
};

export default LocationCard;
