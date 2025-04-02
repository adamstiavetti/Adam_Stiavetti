import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import './App.css'
import HomePage from "./components/HomePage.jsx";
import ContactPage from "./components/ContactPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import axios, {options} from "axios";
import MovieCard from "./components/MovieCard.jsx"
import {useState} from "react";
import viteConfig from "../vite.config.ts";
import * as process from "node:process";


function App() {
    const [movies, setMovies] = useState("")

    function handleClick() {
      // endpoint
      // json or xml data
      // how much data
      //what does it look like
        const options = {
            method: 'GET',
            url: 'https://api.themoviedb.org/3/movie/now_playing',
            params: {language: 'en-US', page: '1'},
            headers: {
                accept: 'application/json',
                Authorization: `Bearer${import.meta.env.VITE_TMDB_API_TOKEN}`
            }
        };
        //https://api.themoviedb.org/3/movie/now_playing
        axios(options)
            .then(response => {
                console.log(response.data.results)
                let movieArray = response.data.results.map((movie: any, i: any) => {
                    return <MovieCard data = {movie}
                    key = {movie.id ? movie.id : i}/>
                })
                setMovies(movieArray)
            })
            .catch(error => {
                console.log(error.message)
            })

    };

    return (
      <div>
          <h1>App Comp</h1>
          <Router>
              <div className="App">
                  <ul>
                      <li>
                      {/*    normally would user anchor tag*/}
                          <Link to={"/HomePage"}>Home</Link>
                      </li>
                      <li>
                          <Link to={"/AboutPage"}>About</Link>
                      </li>
                      <li>
                          <Link to={"/ContactPage"}>Contact</Link>
                      </li>
                  </ul>
                  <hr/>
                  <Routes>
                      <Route path={"/HomePage"} element={<HomePage/>}></Route>
                      <Route path={"/AboutPage"} element={<AboutPage/>}></Route>
                      <Route path={"/ContactPage"} element={<ContactPage/>}></Route>
                  </Routes>
              </div>
          </Router>
          <button onClick={handleClick}>Now Playing</button>
          {movies}
      </div>
  )
}

export default App
