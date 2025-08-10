import axios from "axios";

const movieInstance = axios.create({
  baseURL: import.meta.env.VITE_TMDB_URL,
  headers: { Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}` },
});
export default movieInstance;
