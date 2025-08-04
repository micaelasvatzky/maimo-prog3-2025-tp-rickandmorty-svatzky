"use client";

import { useState, useEffect, useCallback } from "react";
import EpisodeGrid from "@/components/EpisodeGrid";
import axios from "axios";
import Loading from "@/components/Loading";
import PagesHeroSection from "@/components/PagesHeroSection";

const Episodes = () => {
  const API_URL = "https://rickandmortyapi.com/api/";

  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getEpisodes = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}episode`);
      setEpisodes(response.data.results);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    getEpisodes();
  }, [getEpisodes]);

  return (
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
      {!loading && (
        <div>
          <PagesHeroSection title="Episodes" />
          <EpisodeGrid episodes={episodes} />
        </div>
      )}
      {loading && <Loading />}
      {error && <p>HUBO UN ERROR</p>}
    </div>
  );
};

export default Episodes;
