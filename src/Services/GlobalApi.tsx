import axios from "axios";

const apiKey = import.meta.env.VITE_API_URL;
const movieBaseURL = "https://api.themoviedb.org/3/movie";

const getPopularMovies = axios.get(movieBaseURL + "/popular?api_key=" + apiKey);

export default {
  getPopularMovies,
};
