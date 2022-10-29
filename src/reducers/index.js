import {
  ADD_MOVIES,
  ADD_MOVIE_TO_LIST,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  SET_SHOW_FAVOURITES,
  ADD_SEARCH_RESULT,
} from "../actions";

const initialMovieState = {
  list: [],
  favourites: [],
  showFavourites: false,
};

export function movies(state = initialMovieState, action) {
  console.log("MOVIES REDUCER");

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
        favourites: state.favourites.filter(
          (movie) => movie.Title !== action.movie.Title
        ),
      };

    case SET_SHOW_FAVOURITES:
      return {
        ...state,
        showFavourites: action.val,
      };

    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        list: [action.movie, ...state.list],
      };

    default:
      return state;
  }
}

const initialSearchState = {
  result: {},
  showSearchResults: false,
};

export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };

      case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };

    default:
      return state;
  }
}
