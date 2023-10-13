import React from "react";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "./css/movieSearch.css";

import Header from "./components/Header";
import MovieSearchApp from "./routes/MovieSearchApp";

export default function App() {
  const API_URL = "https://api.themoviedb.org/3";
  const API_KEY = "edea8f75d9c6fae0518607c06c5d0aca";
  const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
  const URL_IMAGE = "https://image.tmdb.org/t/p/original";

  const [movie, setMovie] = useState({ title: "loading movies" });
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Header
        API_URL={API_URL}
        API_KEY={API_KEY}
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        setMovies={setMovies}
        setMovie={setMovie}
        setTrailer={setTrailer}
      />
      <Routes>
        <Route
          path="/"
          element={
            <MovieSearchApp
              API_KEY={API_KEY}
              API_URL={API_URL}
              IMAGE_PATH={IMAGE_PATH}
              URL_IMAGE={URL_IMAGE}
              movie={movie}
              setMovie={setMovie}
              movies={movies}
              setMovies={setMovies}
              searchKey={searchKey}
              trailer={trailer}
              setTrailer={setTrailer}
              playing={playing}
              setPlaying={setPlaying}
            />
          }
        />
        <Route path="/*" element={<Navigate to={"/"} />} />
      </Routes>
    </>
  );
}
