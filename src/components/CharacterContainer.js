"use client";

import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export const CharacterContainer = ({ id }) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

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
      {!loading && (
        <div
          className="min-h-screen lg:h-140 md:h-120 bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(/assets/fondoAliens.jpg)`,
            backgroundColor: "rgba(0,0,0,0.7)",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="w-full flex justify-center">
            <div className="relative flex flex-col md:flex-row w-190 max-w-5xl mb-10 justify-center items-center md:items-start md:justify-start p-6 bg-white/40 mt-35 rounded-xl shadow-lg backdrop-blur text-black">
              <Image
                src={character.image}
                alt={character.name}
                className="rounded-lg shadow-md object-cover w-[300px] h-[300px]"
                width={200}
                height={200}
              />
              <div className="md:ml-5 w-70 md:w-150 mt-5 md:mt-0 md:max-w-xl h-full flex flex-col justify-between">
                <h2 className="text-4xl font-bold mb-5">{character.name}</h2>

                <div className="flex flex-col gap-6 flex-grow  text-lg">
                  <div className="flex items-center text-xl font-semibold">
                    <span className="mr-3">Status:</span>
                    <span
                      className={`inline-block w-4 h-4 rounded-full ${
                        character.status === "Alive"
                          ? "bg-green-500"
                          : character.status === "Dead"
                          ? "bg-red-500"
                          : "bg-yellow-400"
                      }`}
                    ></span>
                  </div>

                  <p className="text-lg font-semibold text-gray-800">
                    Origin: {character.origin.name}
                  </p>

                  <p className="text-lg font-semibold text-gray-800">
                    Species: {character.species}
                  </p>

                  <p className="text-lg font-semibold text-gray-800">
                    Location: {character.location.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
