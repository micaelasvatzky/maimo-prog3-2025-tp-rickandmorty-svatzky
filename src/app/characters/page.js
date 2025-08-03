"use client";

import { useState, useEffect, useCallback } from "react";
import CharacterGrid from "@/components/CharacterGrid";
import axios from "axios";
import Loading from "@/components/Loading";

const Characters = () => {
  const API_URL = "https://rickandmortyapi.com/api/";

  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getCharacters = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}character`);
      setCharacters(response.data.results);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, []);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  return (
    <div>
      {!loading && <CharacterGrid characters={characters} />}
      {loading && <Loading />}
      {error && <p>HUBO UN ERROR</p>}
    </div>
  );
};

export default Characters;
