import React from "react";
import { useState } from "react";

import { searchMovies } from "../helpers/movieFunctions";

export default function SearchMovieForm({
  setSearchKey,
  API_KEY,
  API_URL,
  searchKey,
  setMovies,
  setMovie,
  setTrailer,
}) {
  const [show, setShow] = useState(true);

  return (
    <form
      onSubmit={(e) =>
        searchMovies(
          e,
          API_URL,
          API_KEY,
          searchKey,
          setMovies,
          setMovie,
          setTrailer
        )
      }
    >
      <input
        className={show ? "show" : "none"}
        type="text"
        placeholder="Search a movie"
        onChange={(e) => setSearchKey(e.target.value)}
      />
      <i className="fa fa-search" onClick={() => setShow(!show)}></i>
    </form>
  );
}
