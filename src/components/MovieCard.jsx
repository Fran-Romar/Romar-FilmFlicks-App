import React from "react";

import { selectMovie } from "../helpers/movieFunctions";
import { Col, Row } from "react-bootstrap";

export default function MovieCard({
  movies,
  API_URL,
  API_KEY,
  URL_IMAGE,
  setTrailer,
  setMovie,
}) {
  return (
    <Row>
      {movies.map((movie) => (
        <Col
          className="movie-card"
          key={movie.id}
          md="3"
          style={{ backgroundImage: `url(${URL_IMAGE + movie.poster_path})` }}
          onClick={() =>
            selectMovie(movie, API_URL, API_KEY, setTrailer, setMovie)
          }
        ></Col>
      ))}
    </Row>
  );
}
