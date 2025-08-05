import EpisodeCard from "@/components/EpisodeCard";
import PagesHeroSection from "@/components/PagesHeroSection";

const EpisodeGrid = ({ episodes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-7 max-w-[1300px] mx-auto my-0 py-8 px-4 sm:px-6 lg:px-0">
  {episodes.map((episode) => (
    <EpisodeCard episode={episode} key={episode.id} />
  ))}
</div>

  );
};

export default EpisodeGrid;
