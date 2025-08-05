import CharacterCard from "@/components/CharacterCard";
import PagesHeroSection from "@/components/PagesHeroSection";

const CharacterGrid = ({ characters }) => {
  return (
    <div className="max-w-[1300px] mx-auto my-0 py-8 px-4 sm:px-6 lg:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-7">
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
};

export default CharacterGrid;
