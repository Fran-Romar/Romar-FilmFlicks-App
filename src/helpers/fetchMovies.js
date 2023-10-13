import axios from "axios";

import {fetchMovie} from '../helpers/fetchMovie'

export const fetchMovies = async (API_URL, API_KEY, searchKey, setMovies, setMovie, setTrailer) => {
    try {
      const type = searchKey ? "search" : "discover";
      const {
        data: { results },
      } = await axios.get(`${API_URL}/${type}/movie`, {
        params: {
          api_key: API_KEY,
          query: searchKey,
        },
      });

      if (results && results.length === 0) {
        throw new Error("Not movies found!");
      }
      console.log(results);
      setMovies(results);
      setMovie(results[0]);

      if (results.length) {
        await fetchMovie(API_URL, API_KEY ,results[0].id, setTrailer, setMovie);
      }
    } catch (error) {
      console.log(error);
    }
  };