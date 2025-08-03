"use client";

import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/Loading";

export const LocationContainer = ({ id }) => {
  const [location, setLocation] = useState({});
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getLocationAndResidents = useCallback(async () => {
    const API_URL = "https://rickandmortyapi.com/api/";

    try {
      setLoading(true);

      const response = await axios.get(`${API_URL}location/${id}`);
      const locationData = response.data;
      setLocation(locationData);

      const residentUrls = locationData.residents.slice(0, 10);
      if (residentUrls.length > 0) {
        const ids = residentUrls.map((url) => url.split("/").pop()).join(",");
        const res = await axios.get(`${API_URL}character/${ids}`);
        const data = res.data;
        const characters = Array.isArray(data) ? data : [data];
        setResidents(characters);
      } else {
        setResidents([]);
      }
      setError(false);
      setLoading(false);
    } catch (err) {
      setError(true);
    }
  }, [id]);

  useEffect(() => {
    getLocationAndResidents();
  }, [getLocationAndResidents]);

  return (
    <div>
      {!loading && !error && (
        <div
          className="min-h-screen lg:h-140 md:h-120 bg-cover bg-center text-white"
          style={{
            backgroundImage: `url(/assets/fondoAliens.jpg)`,
            backgroundColor: "rgba(0,0,0,0.7)",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="w-full flex justify-center">
            <article
              className="relative flex flex-col w-xl mb-10 justify-center items-center p-6 mt-36
  bg-lime-200/30 backdrop-blur-md border border-lime-300/60 shadow-[0_0_40px_rgba(163,230,53,0.3)]
  clip-path-[polygon(0%_10%,10%_0%,90%_0%,100%_10%,100%_90%,90%_100%,10%_100%,0%_90%)] rounded-[2rem]"
            >
              <h2 className="text-4xl font-bold mb-2">{location.name}</h2>
              <p className=" text-xl italic mb-10">
                {location.type} - {location.dimension}
              </p>

              <div className="flex flex-col justify-center items-center w-[400px]">
                <p className="italic text-lg">Residents:</p>

                <div className="grid grid-cols-5 gap-3 mt-4">
                  {residents.length > 0 ? (
                    residents.map((resident) => (
                      <Link
                        key={resident.id}
                        href={`/character/${resident.id}`}
                      >
                        <Image
                          src={resident.image}
                          alt={resident.name}
                          width={75}
                          height={75}
                          className="rounded-full hover:scale-105 transition-transform"
                        />
                      </Link>
                    ))
                  ) : (
                    <p className="col-span-full">No residents found.</p>
                  )}
                </div>
              </div>
            </article>
          </div>
        </div>
      )}
      {loading && <Loading />}
      {error && <p>HUBO UN ERROR</p>}
    </div>
  );
};
