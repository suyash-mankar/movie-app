import { ADD_MOVIES, ADD_TO_FAVOURITE, REMOVE_FROM_FAVOURITE } from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
};

export default function movies(state = initialMovieState, action) {
  //   if (action.type === ADD_MOVIES) {
  //     return {
  //       ...state,
  //       list: action.movies,
  //     };
  //   }
  //   return state;

  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };

    case ADD_TO_FAVOURITE:
      return {
        ...state,
        favourites: [action.movie, ...state.favourites],
      };

    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourites: state.favourites.filter((movie) => movie.Title !== action.movie.Title),
      };

    default:
      return state;
  }
}
