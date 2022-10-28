import { data } from "../data";
import React from "react";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";
import { addMovies } from "../actions";

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
    const { favourites } = this.props.store.getState().movies;

    const index = favourites.indexOf(movie);

    if (index !== -1) {
      // found the movie
      return true;
    }
    return false;
  };

  render() {
    const { list } = this.props.store.getState().movies; // movies : {list: Array(12), favourites: Array(2)}

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {list.map((movie, index) => (
              <MovieCard
                movie={movie}
                dispatch={this.props.store.dispatch}
                key={`movies-${index}`}
                isFavourite={this.isMovieFavourite(movie)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
