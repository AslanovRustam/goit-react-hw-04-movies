const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "65125fece056379d46954e3213fdb44a";
export const POSTER_URL = "https://image.tmdb.org/t/p/w500";

async function fetchWithErrorHendling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHendling(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
}

export function fetchMoviesByName(name) {
  return fetchWithErrorHendling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`
  );
}

export function fetchMovieDetails(id) {
  return fetchWithErrorHendling(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMoviesCasts(id) {
  return fetchWithErrorHendling(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchMovieReviews(id) {
  return fetchWithErrorHendling(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
