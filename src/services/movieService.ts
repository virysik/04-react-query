import movieInstance from "./config";
import type { Movie } from "../types/movie";

interface MoviesHttpResponse {
  results: Movie[];
  total_pages: number;
}

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MoviesHttpResponse> => {
  const response = await movieInstance.get<MoviesHttpResponse>("search/movie", {
    params: { query, page },
  });
  return response.data;
};

export const imgURL = "https://image.tmdb.org/t/p/w500";
