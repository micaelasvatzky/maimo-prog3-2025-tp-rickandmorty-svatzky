'use client'

import axios from "axios"
import {useState, useEffect, useCallback} from 'react'
import LocationCardSingle from "@/components/LocationCardSingle"

export const LocationContainer = ({id}) => {
    const [location, setLocation] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);


      const getLocation = useCallback(async () => {
        const API_URL = 'https://rickandmortyapi.com/api/';

        try {
            setLoading(true);
            const response = await axios.get(`${API_URL}location/${id}`);
                setLocation(response.data);
                setLoading(false);
            
        } catch (error) {
            setError(true);
            
        }
    }, [id]);

    useEffect(()=>
        {
            getLocation();
        }, [getLocation]);

  return (
    <div>{!loading && <LocationCardSingle location={location} />} </div>
  )
}
