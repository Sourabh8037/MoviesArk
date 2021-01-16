import { FETCH_GENRES_SUCCESS, FETCH_GENRE_CATEGORY_SUCCESS } from '../actions/actions';

const initialState = {
  genres: [],
  genreMovies: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRES_SUCCESS:
      return {
        ...state,
        genres: [...action.payload.genres]
      }; 
      break;
    case FETCH_GENRE_CATEGORY_SUCCESS:
      return {
        ...state,
        genreMovies: action.payload
      };
      break;
    default:
      return state;
  }
};
