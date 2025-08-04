import EpisodeCard from "@/components/EpisodeCard";
import PagesHeroSection from "@/components/PagesHeroSection";

const EpisodeGrid = ({ episodes }) => {
  return (
    <div className="grid grid-cols-12 gap-7 max-w-[1300px] mx-auto my-0 py-8">
      {episodes.map((episode) => (
        <EpisodeCard episode={episode} key={episode.id} />
      ))}
    </div>
  );
};

export default EpisodeGrid;
