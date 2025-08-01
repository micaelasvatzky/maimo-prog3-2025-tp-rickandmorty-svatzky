'use client'

import {useState, useEffect, useCallback} from 'react'
import EpisodeGrid from '@/components/EpisodeGrid'
import axios from 'axios'


const Episodes = () => {
  const API_URL = 'https://rickandmortyapi.com/api/';

    const [episodes, setEpisodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    

    const getEpisodes = useCallback(async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}episode`)
        setEpisodes(response.data.results);
        setLoading(false)

      } catch (error) {
        setError(true);
      }

    }, [])

    useEffect(() => {
      getEpisodes();
    }, [getEpisodes])
    

  return (
    <div>
        {!loading && <EpisodeGrid episodes = {episodes} />}
        {loading && <div className='flex justify-center items-center min-h-[300px]'>Loading</div>}
    </div>
  )
}

export default Episodes