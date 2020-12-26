import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { fetchMoviesCasts, POSTER_URL } from "../../services/MoviesApi";
import { useParams } from "react-router-dom";
import s from "../Credits/Credits.module.css";

export default function MoviesCasts({ movieId }) {
  const [cast, setCast] = useState([]);
  const { url } = useRouteMatch();
  console.log(url);
  useEffect(() => {
    fetchMoviesCasts(movieId).then((request) => setCast(request.cast));
  }, [movieId]);
  return (
    <>
      {cast && (
        <>
          <ul className={s.list}>
            {cast.map((item) => (
              <>
                {item.profile_path && (
                  <li key={item.profile_path} className={s.item}>
                    <img
                      className={s.image}
                      src={POSTER_URL + item.profile_path}
                      alt={item.name}
                      widht="100"
                      height="150"
                    />
                    <p> {item.name}</p>
                  </li>
                )}
              </>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
