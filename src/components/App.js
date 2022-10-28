import {data} from '../data';
import React from "react";
import MovieCard from "./MovieCard";
import Navbar from "./Navbar";

class App extends React.Component {


  componentDidMount() {
    // make api call
    // dispatch action

    const {store} = this.props;
    store.subscribe(()=> {
      console.log('UPDATED');
      this.forceUpdate();
    })

    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    })

    console.log('STATE', this.props.store.getState());

  }

  render() {
    const {movies} = this.props.store.getState();
    console.log('movies:', movies);
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>

          <div className="list">
            {movies.length!==0 && movies.map((movie, index) => (
              <MovieCard movie={movie} key={`movies-${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
