import React, {useEffect, useState} from 'react';
import axios from 'axios';
import MovieCard from "./MovieCard.jsx";
import {useLocation} from "react-router-dom";



const Results = () => {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query");

  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchResults = async () => {
            if (!searchQuery || searchQuery.trim() === "") {
                setError("Please enter a movie name")
                return
            }

            setLoading(true);
            setError(null);
            setNotFound(false);

            try {
                const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                    params: {query: searchQuery},
                    headers: {
                        Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
                    }
                });

                const results = response.data.results;

                if(results.length === 0) {
                    setNotFound(true);
                }else {
                    setSearchResults(results);
                }
            } catch (err) {
                console.error("Search failed: " + err);
                setError("Something went wrong.");
            }finally {
                setLoading(false);
            }
        };

        fetchResults();
    }, [searchQuery]);
    console.log("searchQuery from URL:", searchQuery);


    return (
        <div style={{ padding: '20px' }}>
        <h2 style={{ color: 'white', textAlign: 'center' }}>
            Search Results for: <em>{searchQuery}</em>
        </h2>
            {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
            {loading && <p style={{ color: 'white', textAlign: 'center'}}>Loading..</p>}
            {error && (<p style={{ color: 'red', textAlign: 'center', marginTop: '2rem' }}>{error}</p>)}
            {notFound && !loading && !error && (<p style={{color: "black", textAlign: "center", marginTop: '2rem', fontSize: "50px"}}>No results found..</p>)}

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {searchResults.map((movie) => (
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

export default Results;