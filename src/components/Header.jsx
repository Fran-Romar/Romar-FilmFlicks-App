import React from "react";
import NavbarApp from "./NavbarApp";
import SearchMovieForm from "./SearchMovieForm";

import { Container } from "react-bootstrap";
import { useState } from "react";

export default function Header({
  API_URL,
  API_KEY,
  searchKey,
  setSearchKey,
  setMovies,
  setMovie,
  setTrailer,
}) {
  const [collap, setCollap] = useState(true);

  return (
    <div className="header">
      <Container>
        <header>
          <div className="collap" onClick={() => setCollap(!collap)}>
            <i className="fa fa-bars"></i>
          </div>
          <div className="title">
            <a href="/" className="app-title">
              MOVIEHAVEN
            </a>
          </div>
          <NavbarApp collap={collap} />
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
