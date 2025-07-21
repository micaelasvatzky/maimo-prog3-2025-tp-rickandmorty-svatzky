import Image from "next/image";
import Link from "next/link";

const LocationCard = ({ location }) => {
  return (
    <article className="col-span-3 bg-emerald-800 text-amber-50 rounded-xl p-2 flex flex-col justify-center items-center">
      <h2 className="text-2xl mb-2">{location.name}</h2>
        <p>{location.type}</p>
        <p className="mb-1">{location.dimension}</p>
    </article>
  );
};

export default LocationCard;
