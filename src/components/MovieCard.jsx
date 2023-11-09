import React from "react";

import { selectMovie } from "../helpers/movieFunctions";
import { Col, Row } from "react-bootstrap";

import general from "../../data/general.json";

import "../css/Card.css";

export default function MovieCard({ movies, setTrailer, setMovie }) {
  return (
    <Row>
      {movies.map((movie) => (
        <Col
          className="movie-card"
          key={movie.id}
          md="3"
          style={{
            backgroundImage: `url(${general.URL_IMAGE + movie.poster_path})`,
          }}
          onClick={() =>
            selectMovie(
              movie,
              general.API_URL,
              general.API_KEY,
              setTrailer,
              setMovie
            )
          }
        ></Col>
      ))}
    </Row>
  );
}
