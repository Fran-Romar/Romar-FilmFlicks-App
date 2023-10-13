import React from "react";
import SearchMovieForm from "./SearchMovieForm";

import { Container } from "react-bootstrap";

export default function Header({
  API_URL,
  API_KEY,
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
              MOVIEHAVEN
            </a>
          </div>
          <div className="search">
            <SearchMovieForm
              API_URL={API_URL}
              API_KEY={API_KEY}
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
