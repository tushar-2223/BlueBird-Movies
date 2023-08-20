import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSmashystreamUrl, getStreamembedUrl, get2embedUrl } from '../movies'
import { useState } from 'react'


const WatchMovie = () => {

    const [moviedet, setMoviedet] = useState([]);

    const APIKEY = import.meta.env.VITE_API_KEY;
    const fetchMovie = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=en-US`
        );
        const moviedetail = await data.json();
        setMoviedet(moviedetail);
      };

      useEffect(() => {
        fetchMovie()
      }, []);
      
    

    const { id } = useParams()

    document.title = `BlueBird Movies | ${moviedet.title}`

    return (
        <iframe allowFullScreen="true" style={{display: 'flex', alignItems:"center", justifyContent:"center", width:"100%", height:"100vh"}} src={getSmashystreamUrl(id)}></iframe>
    )
}

export default WatchMovie