import Image from "next/image";

const CharacterCardSingle = ({ character }) => {
  return (
    <div>
      <Image
        className="rounded-xl"
        src={character.image}
        width={300}
        height={300}
        alt={character.name}
      />
      <h2 className="text-2xl mb-2">{character.name}</h2>
      <p>{character.status}</p>
      <p className="mb-3">{character.origin.name}</p>
    </div>
  );
};

export default CharacterCardSingle;
