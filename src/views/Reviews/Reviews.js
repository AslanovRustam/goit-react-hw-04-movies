import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { fetchMovieReviews, POSTER_URL } from "../../services/MoviesApi";
import { useParams } from "react-router-dom";
import s from "../Reviews/Reviews.module.css";
import { ImPacman } from "react-icons/im";
// import {sorry} from '../../'

export default function Reviews({ movie }) {
  const [reviews, setReviews] = useState([]);
  //   const { url } = useRouteMatch();
  const url = useRouteMatch();
  const { movieId } = useParams();
  console.log(url);
  useEffect(() => {
    fetchMovieReviews(movieId).then((request) => setReviews(request.results));
  }, [movieId]);
  return (
    <>
      {reviews.length > 0 ? (
        <>
          <ul>
            {reviews.map((item) => (
              <>
                <li key={item.id}>
                  <p> {item.author}</p>
                  <p> {item.content}</p>
                </li>
              </>
            ))}
          </ul>
        </>
      ) : (
        <h2>
          This movie has not reviews yet <ImPacman />
        </h2>
      )}
    </>
  );
}
