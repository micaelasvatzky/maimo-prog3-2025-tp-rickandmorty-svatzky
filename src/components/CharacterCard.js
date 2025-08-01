import Image from "next/image";
import Link from "next/link";

const CharacterCard = ({ character }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "alive":
        return "bg-green-500";
      case "dead":
        return "bg-red-500";
      case "unknown":
        return "bg-yellow-300";
    }
  };

  return (
    <article className="col-span-3 bg-emerald-800 text-amber-50 rounded-xl p-3 flex flex-col justify-center items-center">
      <div className="mb-2">
        <Image
          className="rounded-xl"
          src={character.image}
          width={300}
          height={300}
          alt={character.name}
        />
      </div>

      <div className="flex items-center gap-2 mb-1">
        
        <span
          className={`w-3 h-3 rounded-full ${getStatusColor(character.status)}`}
        />
        <h2 className="text-lg font-bold">{character.name}</h2>
      </div>

      <p className="mb-3">{character.origin.name}</p>

      <Link
        className="bg-lime-300 flex rounded-3xl w-[90%] p-2 mb-2 items-center justify-center text-black font-semibold hover:bg-blue-300"
        href={`character/${character.id}`}
      >
        View More
      </Link>
    </article>
  );
};

export default CharacterCard;
