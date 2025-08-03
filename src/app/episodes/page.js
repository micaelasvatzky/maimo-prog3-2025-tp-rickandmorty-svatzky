"use client";

import { useState, useEffect, useCallback } from "react";
import EpisodeGrid from "@/components/EpisodeGrid";
import axios from "axios";
import Loading from "@/components/Loading";

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
    <div>
      {!loading && <EpisodeGrid episodes={episodes} />}
      {loading && <Loading />}
      {error && <p>HUBO UN ERROR</p>}
    </div>
  );
};

export default Episodes;
