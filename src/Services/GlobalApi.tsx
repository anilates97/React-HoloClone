import axios from "axios";

const apiKey = import.meta.env.VITE_API_URL;
const movieBaseURL = "https://api.themoviedb.org/3/movie";
const movieByGenreBaseURL = "https://api.themoviedb.org/3/discover/movie?";

const getPopularMovies = axios.get(movieBaseURL + "/popular?api_key=" + apiKey);
const getMovieByGenreId = (id: number) =>
  axios.get(movieByGenreBaseURL + "api_key=" + apiKey + "&with_genres=" + id);

export default {
  getPopularMovies,
  getMovieByGenreId,
};
