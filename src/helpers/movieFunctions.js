import { fetchMovie } from "./fetchMovie";
import { fetchMovies } from "./fetchMovies";

// Select movie to banner
export const selectMovie = async (movie, API_URL, API_KEY, setTrailer, setMovie) => {
    fetchMovie(API_URL, API_KEY, movie.id, setTrailer, setMovie);
    setMovie(movie);
    window.scrollTo(0, 0);
};

// Search movies function
export const searchMovies = (e, API_URL, API_KEY, searchKey, setMovies, setMovie, setTrailer) => {
    e.preventDefault();
    fetchMovies(
        API_URL,
        API_KEY,
        searchKey,
        setMovies,
        setMovie,
        setTrailer
    );
};