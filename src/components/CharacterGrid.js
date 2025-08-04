import CharacterCard from "@/components/CharacterCard"
import PagesHeroSection from "@/components/PagesHeroSection"


const CharacterGrid = ({characters}) => {
  return (
    <div className="grid grid-cols-12 gap-7 max-w-[1300px] mx-auto my-0  py-8">
    {characters.map((character) => <CharacterCard character = {character} key={character.id} />)}
    </div>
    
  )
}

export default CharacterGrid