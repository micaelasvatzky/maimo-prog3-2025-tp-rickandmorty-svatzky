import CharacterCard from "@/components/CharacterCard"
import PagesHeroSection from "@/components/PagesHeroSection"


const CharacterGrid = ({characters}) => {
  return (
    <div className="bg-gray-900 bg-gradient-to-b from-black to-transparent ">
      <PagesHeroSection title="Characters"/>
    <div className="grid grid-cols-12 gap-7 max-w-[1300px] mx-auto my-0 pb-8">
    {characters.map((character) => <CharacterCard character = {character} key={character.id} />)}
    </div>
    </div>
  )
}

export default CharacterGrid