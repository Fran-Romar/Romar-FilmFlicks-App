import React from "react";
import { useState } from "react";

import general from "../../data/general.json";

import { searchMovies } from "../helpers/movieFunctions";

export default function SearchMovieForm({
  setSearchKey,
  searchKey,
  setMovies,
  setMovie,
  setTrailer,
}) {
  const [show, setShow] = useState(false);

  return (
    <form
      onSubmit={(e) =>
        searchMovies(
          e,
          general.API_URL,
          general.API_KEY,
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
