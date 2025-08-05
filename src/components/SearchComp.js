"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import PagesHeroSection from "@/components/PagesHeroSection";
import CharacterGrid from "@/components/CharacterGrid";
import EpisodeGrid from "@/components/EpisodeGrid";
import LocationGrid from "@/components/LocationGrid";
import Loading from "@/components/Loading";

const SearchComp = () => {
  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [locations, setLocations] = useState([]);

  const searchParams = useSearchParams();

  useEffect(() => {
    const q = searchParams.get("q")?.toLowerCase() || "";
    setQuery(q);
  }, [searchParams]);

  useEffect(() => {
    if (!query) {
      setCharacters([]);
      setEpisodes([]);
      setLocations([]);
      return;
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        const [charRes, epRes, locRes] = await Promise.all([
          fetch(`https://rickandmortyapi.com/api/character/?name=${query}`),
          fetch(`https://rickandmortyapi.com/api/episode/?name=${query}`),
          fetch(`https://rickandmortyapi.com/api/location/?name=${query}`),
        ]);

        const charData = await charRes.json();
        const epData = await epRes.json();
        const locData = await locRes.json();

        setCharacters(charData.results || []);
        setEpisodes(epData.results || []);
        setLocations(locData.results || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setCharacters([]);
        setEpisodes([]);
        setLocations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return (
    <div>
      {!loading && (
        <div
          className="min-h-screen text-white relative overflow-hidden"
          style={{
            background: `
          radial-gradient(circle at 20% 30%, rgba(255, 0, 255, 0.2) 0%, transparent 30%),
          radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.2) 0%, transparent 40%),
          radial-gradient(circle at 50% 80%, rgba(173, 216, 230, 0.15) 0%, transparent 50%),
          linear-gradient(135deg, #1a0023 0%, #10002b 50%, #000014 100%)
        `,
            backdropFilter: "blur(8px)",
          }}
        >
          <PagesHeroSection title={`Search results for: ${query}`} />

          <section className="mb-5">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-4xl text-amber-100 font-semibold mt-5">
                Characters
              </h2>
              {characters.length > 0 ? (
                <CharacterGrid characters={characters} />
              ) : (
                <p className="text-white text-2xl mt-4 col-span-full">
                  No results
                </p>
              )}
            </div>
          </section>

          <section className="mb-5">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-4xl text-amber-100 font-semibold mt-5">
                Locations
              </h2>
              {locations.length > 0 ? (
                <LocationGrid locations={locations} />
              ) : (
                <p className="text-white text-2xl mt-4">No results</p>
              )}
            </div>
          </section>

          <section className="mb-5">
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-4xl text-amber-100 font-semibold mt-5">
                Episodes
              </h2>
              {episodes.length > 0 ? (
                <EpisodeGrid episodes={episodes} />
              ) : (
                <p className="text-white text-2xl mt-4">No results</p>
              )}
            </div>
          </section>
        </div>
      )}
      {loading && <Loading />}
    </div>
  );
};

export default SearchComp;