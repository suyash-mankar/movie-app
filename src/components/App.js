import { data } from "../data";
import React from "react";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import { addMovies, setShowFavourites } from "../actions";

class App extends React.Component {
  componentDidMount() {
    // make api call
    // dispatch action

    const { store } = this.props;
    store.subscribe(() => {
      console.log("UPDATED");
      this.forceUpdate();
      console.log("STATE", this.props.store.getState());
    });

    store.dispatch(addMovies(data));

  }

  isMovieFavourite = (movie) => {
    const { movies } = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);

    if (index !== -1) {
      // found the movie
      return true;
    }
    return false;
  };

  onChangeTab = (val) => {
    this.props.store.dispatch(setShowFavourites(val));
  };

  render() {
    const { movies, search } = this.props.store.getState();   // {movies : {...}, search : {...}}
    const { list, favourites, showFavourites } = movies; 
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <Navbar dispatch={this.props.store.dispatch} search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => {
                this.onChangeTab(false);
              }}
            >
              Movies
            </div>
            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => {
                this.onChangeTab(true);
              }}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {displayMovies.map((movie, index) => (
              <MovieCard
                movie={movie}
                dispatch={this.props.store.dispatch}
                key={`movies-${index}`}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>

          {displayMovies.length === 0 ? (
            <div className="no-movies"> No movies to display! </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
