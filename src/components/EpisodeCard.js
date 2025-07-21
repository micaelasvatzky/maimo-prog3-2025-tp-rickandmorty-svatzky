import Link from "next/link";

const EpisodeCard = ({ episode }) => {
  return (
    <article className="col-span-3 bg-emerald-800 text-amber-50 rounded-xl flex flex-col justify-center">
      <h2 className="text-2xl mb-2">{episode.name}</h2>
      <p className="mb-3">{episode.episode}</p>
        <p>{episode.air_date}</p>
    </article>
  );
};

export default EpisodeCard;
