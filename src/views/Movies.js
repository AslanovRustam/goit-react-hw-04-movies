// import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Searchbar from "./Searchbar";
import MoviesByNamePage from "../MoviesByNamePage/MoviesByNamePage";

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const [filmName, setFilmName] = useState("");
  const [films, setFilms] = useState([]);

  const queryURL = new URLSearchParams(location.search).get(`query`);

  console.log(queryURL);

  const searchQuery = (query) => {
    history.push({ ...location, search: `query=${query}` });
  };

  const onSubmit = (name) => {
    // console.log(history);
    // console.log(location);
    // history.push("/");
    setFilmName(name);
    setFilms([]);
    searchQuery(name);
  };
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <MoviesByNamePage filmName={filmName} queryURL={queryURL} />
    </>
  );
}
