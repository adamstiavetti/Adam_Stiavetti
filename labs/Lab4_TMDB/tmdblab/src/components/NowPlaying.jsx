// import './App.css'

import React, {useEffect, useState} from 'react';
import axios from "axios";
import MovieCard from "./MovieCard.jsx";
import {colors} from "@mui/material";

const NowPlaying = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
                    }
                });
                setMovies(response.data.results);
            }catch (err) {
                console.error("Error grabbing movies: " + err);
                setError("Could not get movies")
            }
        };
        fetchMovies();
    }, []);

    return (
      <div>
          <h2 style={{ color: 'white', textAlign: "center"}}>Now Playing</h2>
          {error && <p style={{color: "red", textAlign: "center"}}>{error}</p>}
          <div style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center,"
          }}>
              {movies.map((movie) => (
                  <MovieCard
                  key={movie.id}
                  title={movie.title}
                  overview={movie.overview}
                  rating={movie.vote_average}
                  posterPath={movie.poster_path}
                  />
              ))}
          </div>
      </div>
    );
};

export default NowPlaying;