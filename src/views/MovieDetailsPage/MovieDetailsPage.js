import { useState, useEffect, lazy, Suspense } from "react";
import { Switch, Link, Route, useRouteMatch } from "react-router-dom";
import { fetchMovieDetails, POSTER_URL } from "../../services/MoviesApi";
import { useParams } from "react-router-dom";
import s from "../MovieDetailsPage/MovieDetailsPage.module.css";
// import MoviesCasts from "../Credits/Credits";
// import Reviews from "../Reviews/Reviews";
import { NavLink } from "react-router-dom";

const MoviesCasts = lazy(() =>
  import("../Credits/Credits.js" /* webpackChunkName:"MoviesCasts" */)
);
const Reviews = lazy(() =>
  import("../Reviews/Reviews" /* webpackChunkName:"Reviews" */)
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  console.log(movieId);
  const { url, path } = useRouteMatch();
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
      <hr />
      <NavLink
        className={s.link}
        activeClassName={s.activeLink}
        to={`${url}/cast`}
      >
        Cast
      </NavLink>
      <NavLink
        className={s.link}
        activeClassName={s.activeLink}
        to={`${url}/reviews`}
      >
        Reviews
      </NavLink>
      <hr />
      <Suspense fallback={<div>Loading..</div>}>
        <Switch>
          <Route path={`${path}/cast`}>
            <MoviesCasts movie={movie} />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews movie={movie} />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
