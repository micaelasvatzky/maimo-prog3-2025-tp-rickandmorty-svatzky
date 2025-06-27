import Image from "next/image";
import Link from "next/link";

const CharacterCard = ({ character }) => {
  return (
    <article className="col-span-3 bg-emerald-800 text-amber-50 rounded-xl p-3 flex flex-col justify-center items-center">
      <div className="mb-2">
        <Image className="rounded-xl"
          src={character.image}
          width={300}
          height={300}
          alt={character.name}
        />
      </div>
      <h2 className="text-2xl mb-2">{character.name}</h2>
        <p>{character.status}</p>
        <p className="mb-3">{character.origin.name}</p>
      
      <Link
        className="bg-yellow-100 flex rounded-3xl w-[90%] p-2 mb-2 items-center justify-center text-black hover:bg-yellow-300"
        href={`character/${character.id}`}
      >
        View More
      </Link>
    </article>
  );
};

export default CharacterCard;
