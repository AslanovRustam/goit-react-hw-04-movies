import { useState, useEffect } from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
import { fetchMovieDetails, POSTER_URL } from "../../services/MoviesApi";
import { useParams } from "react-router-dom";
import s from "../MovieDetailsPage/MovieDetailsPage.module.css";
import MoviesCasts from "../Credits/Credits";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
  const [movie, setMovie] = useState();

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);
  return (
    <div>
      {movie && (
        <div className={s.movieCard}>
          <img
            className={s.image}
            src={POSTER_URL + movie.poster_path}
            alt={movie.title}
          />
          <div className={s.movieDetails}>
            <h2>{movie.title}</h2>
            <p>Overview: {movie.overview}</p>
            <p>
              Riting {movie.vote_average} ({movie.vote_count}votes)
            </p>
            <p>Budget {movie.budget}$</p>
            <a href={movie.homepage}>Homepage </a>
            <p>Realease date {movie.release_date}</p>

            {movie.genres && (
              <>
                <p>Genres</p>
                <ul className={s.list}>
                  {movie.genres.map((item, index) => (
                    <li key={index} className={s.item}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
      <Route path="/movies/:movieId">
        <MoviesCasts movieId={movieId} />
      </Route>
    </div>
  );
}
