import React from "react";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import "./css/MovieSearch.css";

import Header from "./components/Header";
import MovieSearchApp from "./routes/MovieSearchApp";

export default function App() {
  const [movie, setMovie] = useState({ title: "loading movies" });
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <Header
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
