import React, { useEffect } from "react";

import { Container } from "react-bootstrap";

import MovieBanner from "../components/MovieBanner";
import MovieCard from "../components/MovieCard";

import { fetchMovies } from "../helpers/fetchMovies";

import general from "../../data/general.json";

export default function MovieSearchApp({
  movie,
  setMovie,
  movies,
  setMovies,
  searchKey,
  trailer,
  setTrailer,
  playing,
  setPlaying,
}) {
  // API call
  useEffect(() => {
    fetchMovies(
      general.API_URL,
      general.API_KEY,
      searchKey,
      setMovies,
      setMovie,
      setTrailer
    );
  }, []);

  return (
    <div>
      <MovieBanner
        movie={movie}
        playing={playing}
        trailer={trailer}
        setPlaying={setPlaying}
      />
      <Container>
        <h3 className="h3-animado">
          <i className="fa fa-film"></i> MOVIES
        </h3>
        <MovieCard
          movies={movies}
          setTrailer={setTrailer}
          setMovie={setMovie}
        />
      </Container>
    </div>
  );
}
