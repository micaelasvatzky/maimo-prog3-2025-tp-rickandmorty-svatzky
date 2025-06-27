'use client'

import axios from "axios"
import {useState, useEffect, useCallback} from 'react'
import CharacterCardSingle from "./CharacterCardSingle";

export const CharacterContainer = ({id}) => {
    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);


      const getCharacter = useCallback(async () => {
        const API_URL = 'https://rickandmortyapi.com/api/';

        try {
            setLoading(true);
            const response = await axios.get(`${API_URL}character/${id}`);
                setCharacter(response.data);
                setLoading(false);
            
        } catch (error) {
            setError(true);
            
        }
    }, [id]);

    useEffect(()=>
        {
            getCharacter();
        }, [getCharacter]);

  return (
    <div>{!loading && <CharacterCardSingle character={character} />} </div>
  )
}
