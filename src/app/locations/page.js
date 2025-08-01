'use client'

import {useState, useEffect, useCallback} from 'react'
import LocationGrid from '@/components/LocationGrid'
import axios from 'axios'


const Locations = () => {
  const API_URL = 'https://rickandmortyapi.com/api/';

    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    

    const getLocations = useCallback(async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}location`)
        setLocations(response.data.results);
        setLoading(false)

      } catch (error) {
        setError(true);
      }

    }, [])

    useEffect(() => {
      getLocations();
    }, [getLocations])
    

  return (
    <div>
        {!loading && <LocationGrid locations = {locations} />}
        {loading && <div className='flex justify-center items-center min-h-[300px]'>Loading</div>}
    </div>
  )
}

export default Locations