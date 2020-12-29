import FilmErrorView from "../views/FilmErrorView/FilmErrorView";
import FilmPendingView from "../views/FilmPendingView/FilmPendingView";
import FillmGalleryView from "../views/FillmGalleryView/FillmGalleryView";
import { useState, useEffect } from "react";
import { fetchMoviesByName, POSTER_URL } from "../services/MoviesApi";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function MoviesByNamePage({ filmName, queryURL }) {
  const [error, setError] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const [films, setFilms] = useState([]);

  const fetchMovies = (name) => {
    fetchMoviesByName(name)
      .then((newFilms) => {
        if (newFilms.total_results > 0) {
          setFilms(newFilms.results);
          setStatus(Status.RESOLVED);
        } else return Promise.reject(new Error("Invalid request"));
      })
      .catch((err) => {
        setError(err);
        setStatus(Status.REJECTED);
      });
  };

  useEffect(() => {
    if (filmName === "" && queryURL !== null) {
      fetchMovies(queryURL);
      return;
    }
    if (filmName) {
      fetchMovies(filmName);
    }
  }, [filmName, queryURL]);

  if (status === Status.IDLE) {
    return <p>Please enter your search term</p>;
  }

  if (status === Status.PENDING) {
    return <FilmPendingView />;
  }

  if (status === Status.REJECTED) {
    return <FilmErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <FillmGalleryView films={films} />
      </>
    );
  }
}
