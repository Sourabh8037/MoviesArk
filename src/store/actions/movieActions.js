import * as actionTypes from './actions';
import * as api from '../../api/api';

export const fetchTrendingMovies = (query, page = 1) => ({
  type: actionTypes.FETCH_TRENDING_MOVIES,
  payload: {
    query,
    page
  }
});

export const fetchDiscoverMovies = (query, page = 1) => ({
  type: actionTypes.FETCH_DISCOVER_MOVIES,
  payload: {
    query,
    page
  }
});

export const fetchTvShows = (query, page = 1) => ({
  type: actionTypes.FETCH_TV_SHOWS,
  payload: {
    query,
    page
  }
});

export const fetchPopularMovies = (query, page = 1) => ({
  type: actionTypes.FETCH_POPULAR_MOVIES,
  payload: {
    query,
    page
  }
});

export const fetchTopRatedMovies = (query, page = 1) => ({
  type: actionTypes.FETCH_TOPRATED_MOVIES,
  payload: {
    query,
    page
  }
});

export const fetchUpcomingMovies = (query, page = 1) => {
  return ({
  type: actionTypes.FETCH_UPCOMING_MOVIES,
  payload: {
    query,
    page
  }
})};

export const fetchMainMovies = () => {
  return {type:actionTypes.FETCH_MAIN_MOVIES};
};


export const fetchSelectedMovie = (category, id) => ({
  type: actionTypes.FETCH_SELECTED_MOVIE,
  payload: {
    category,
    id
  }
});

