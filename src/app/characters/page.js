'use client'

import {useState, useEffect, useCallback} from 'react'
import CharacterGrid from '@/components/CharacterGrid'
import axios from 'axios'


const Characters = () => {
  const API_URL = 'https://rickandmortyapi.com/api/';

    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    

    const getCharacters = useCallback(async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}character`)
        setCharacters(response.data.results);
        setLoading(false)

      } catch (error) {
        setError(true);
      }

    }, [])

    useEffect(() => {
      getCharacters();
    }, [getCharacters])
    

  return (
    <div>
      <h1 className='text-5xl flex justify-center py-5 mb-4'>Rick and Morty Maimo App</h1>
        {!loading && <CharacterGrid characters = {characters} />}
        {loading && <div className='flex justify-center items-center min-h-[300px]'>Loading</div>}
    </div>
  )
}

export default Characters