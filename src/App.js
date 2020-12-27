import "./App.css";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import Container from "./Container/Container";
// import HomeView from "./views/Home";
// import MoviesView from "./views/Movies";
// import NotFoundView from "./views/NotFoundView";
// import MovieDetailsPage from "./views/MovieDetailsPage/MovieDetailsPage";
// import MoviesCasts from "./views/Credits/Credits";
const HomeView = lazy(() =>
  import("./views/Home.js" /* webpackChunkName:"HomeView" */)
);
const MoviesView = lazy(() =>
  import("./views/Movies.js" /* webpackChunkName:"MoviesView" */)
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView" /* webpackChunkName:"NotFoundView" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName:"MovieDetailsPage" */
  )
);

function App() {
  return (
    <Container>
      {/* <div className="App"> */}
      <Navigation />
      {/* </div> */}
      <Suspense fallback={<div>Loading</div>}>
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
      </Suspense>
      <ToastContainer />
    </Container>
  );
}

export default App;
