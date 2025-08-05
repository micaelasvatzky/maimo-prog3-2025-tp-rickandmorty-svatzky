"use client";

import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Loading from "@/components/Loading";

export const CharacterContainer = ({ id }) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getCharacter = useCallback(async () => {
    const API_URL = "https://rickandmortyapi.com/api/";

    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}character/${id}`);
      setCharacter(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, [id]);

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);

  return (
    <div>
  {!loading && !error && (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(/assets/fondoAliens.jpg)`,
        backgroundColor: "rgba(0,0,0,0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="w-full flex justify-center">
        <div
          className="
            relative flex flex-col md:flex-row w-[800px] max-w-5xl 
            justify-center items-center md:items-start md:justify-start 
            p-6 m-5 mt-36 md:mt-18 lg:mt-36 mb-10 md:mb-20
            bg-lime-200/30 backdrop-blur-md border border-lime-300/60 
            shadow-[0_0_40px_rgba(163,230,53,0.3)]
            clip-path-[polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)] 
            rounded-[2rem]"
        >
          <Image
            src={character.image}
            alt={character.name}
            className="rounded-lg shadow-md object-cover w-[300px] h-[300px]"
            width={200}
            height={200}
          />
          <div className="md:ml-5 w-70 md:w-150 mt-5 md:mt-0 md:max-w-xl h-full flex flex-col justify-between">
            <h2 className="text-4xl font-bold mb-5">{character.name}</h2>

            <div className="flex flex-col gap-6 flex-grow text-lg">
              <div className="flex items-center text-xl font-semibold mb-2">
                <span className="mr-3">Status:</span>
                <span
                  className={`inline-block w-4 h-4 rounded-full ${
                    character.status === "Alive"
                      ? "bg-green-500"
                      : character.status === "Dead"
                      ? "bg-red-500"
                      : "bg-yellow-400"
                  }`}
                />
              </div>

              <p className="text-lg font-semibold">
                Origin: {character.origin.name}
              </p>
              <p className="text-lg font-semibold">
                Species: {character.species}
              </p>
              <p className="text-lg font-semibold">
                Location: {character.location.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

  {loading && <Loading />}
  {error && !loading && <p>HUBO UN ERROR</p>}
</div>

  );
};
