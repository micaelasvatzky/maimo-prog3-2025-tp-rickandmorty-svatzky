import Link from "next/link";

const EpisodeCard = ({ episode }) => {
  return (
    <article
      className="col-span-3 text-black rounded-xl p-3 flex flex-col justify-center items-center text-center bg-lime-200/50 backdrop-blur-md border border-lime-300/60 shadow-[0_0_40px_rgba(163,230,53,0.3)]
  clip-path-[polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)]"
    >
      <h2 className="text-xl mb-2">{episode.name}</h2>
      <p className="mb-3">{episode.episode}</p>
      <p>{episode.air_date}</p>
    </article>
  );
};

export default EpisodeCard;
