// import MovieDetailsPage from "./MovieDetailsPage/MovieDetailsPage";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Searchbar from "./Searchbar";

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const [filmName, setFilmName] = useState("");
  const [films, setFilms] = useState([]);

  const searchQuery = (query) => {
    history.push(...location, (query = `${query}`));
  };

  const onSubmit = () => {
    console.log(history);
    console.log(location);
    history.push("/");
  };
  return <Searchbar onSubmit={onSubmit} />;
}
