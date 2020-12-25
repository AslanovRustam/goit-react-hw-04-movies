import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Container from "./Container/Container";
import HomeView from "./views/Home";
import MoviesView from "./views/Movies";
import NotFoundView from "./views/NotFoundView";
import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";

function App() {
  return (
    <Container>
      {/* <div className="App"> */}
      <Navigation />
      {/* </div> */}
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies" exact>
          <MoviesView />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
