import moviesReducer from './moviesReducer';
import filtersReducer from './filtersReducer';
import genreReducer from './genreReducer';
import peopleReducer from './peopleReducer';
import searchReducer from './searchReducer';

export default {
  movies: moviesReducer,
  search: searchReducer,
  genre: genreReducer,
  filters: filtersReducer,
  people: peopleReducer,
};
