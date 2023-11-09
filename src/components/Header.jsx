import React from "react";
import SearchMovieForm from "./SearchMovieForm";

import { Container } from "react-bootstrap";
import "../css/Header.css";

export default function Header({
  searchKey,
  setSearchKey,
  setMovies,
  setMovie,
  setTrailer,
}) {
  return (
    <div className="header">
      <Container>
        <header>
          <div className="title">
            <a href="/" className="app-title">
              FILMFLICKS
            </a>
          </div>
          <div className="search">
            <SearchMovieForm
              searchKey={searchKey}
              setSearchKey={setSearchKey}
              setMovies={setMovies}
              setMovie={setMovie}
              setTrailer={setTrailer}
            />
          </div>
        </header>
      </Container>
    </div>
  );
}
