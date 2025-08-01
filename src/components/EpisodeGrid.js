import EpisodeCard from "@/components/EpisodeCard"
import PagesHeroSection from "@/components/PagesHeroSection"

const EpisodeGrid = ({ episodes }) => {
  return (
    <div className="bg-gray-900 bg-gradient-to-b from-black to-transparent">
     <PagesHeroSection title="Episodes" /> 
    <div className="grid grid-cols-12 gap-7 max-w-[1300px] mx-auto my-0">
    {episodes.map((episode) => <EpisodeCard episode = {episode} key={episode.id} />)}
    </div>
    </div>
  )
}

export default EpisodeGrid