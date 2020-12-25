import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { fetchMovieDetails, POSTER_URL } from "../../services/MoviesApi";
import { useParams } from "react-router-dom";
import s from "../MovieDetailsPage/MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);
  return (
    <>
      {/* <h1>{movieId}</h1> */}
      {movie && (
        <>
          <img src={POSTER_URL + movie.backdrop_path} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>Overview: {movie.overview}</p>
          <p>Budget {movie.budget}$</p>
          <a href={movie.homepage}>Homepage </a>
          <p>Realease date {movie.release_date}</p>
        </>
      )}
    </>
  );
}
