import React, { useEffect } from "react";

import { Container } from "react-bootstrap";

import MovieBanner from "../components/MovieBanner";
import MovieCard from "../components/MovieCard";

import { fetchMovies } from "../helpers/fetchMovies";

export default function MovieSearchApp({
  API_KEY,
  API_URL,
  IMAGE_PATH,
  URL_IMAGE,
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
    fetchMovies(API_URL, API_KEY, searchKey, setMovies, setMovie, setTrailer);
  }, []);

  return (
    <div>
      <MovieBanner
        IMAGE_PATH={IMAGE_PATH}
        movie={movie}
        playing={playing}
        trailer={trailer}
        setPlaying={setPlaying}
      />
      <Container>
        <h3 className="h3-animado">
          <i className="fa fa-film"></i> TOP MOVIES
        </h3>
        <MovieCard
          API_URL={API_URL}
          API_KEY={API_KEY}
          URL_IMAGE={URL_IMAGE}
          movies={movies}
          setTrailer={setTrailer}
          setMovie={setMovie}
        />
      </Container>
    </div>
  );
}
