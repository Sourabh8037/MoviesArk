import * as act from '../actions/actions';

const initialState = {
  search: {
    query: '',
    tv: {},
    movies: {},
    people: {}
  },
  recentSearch: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case act.ADD_SEARCH_HISTORY:
      return {
        ...state,
        recentSearch: [
          ...state.recentSearch, 
          action.payload
        ]
      };
      break;
    case act.CLEAR_SEARCH_HISTORY:
      return {
        ...state,
        recentSearch: []
      };
      break;
    case act.SEARCH_SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          movies: action.payload.movies,
          tv: action.payload.tv,
          people: action.payload.people
        }
      };
      break;
    case act.SEARCH_MOVIES_SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          movies: action.payload
        }
      };
      break;
    case act.SEARCH_TV_SHOWS_SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          tv: action.payload
        }
      };
      break;
    case act.SEARCH_PEOPLE_SUCCESS:
      return {
        ...state,
        search: {
          ...state.search,
          people: action.payload
        }
      };
      break;
    case act.UPDATE_SEARCH_QUERY:
      return {
        ...state,
        search: {
          ...state.search,
          query: action.payload
        }
      };
      break;
    default: 
      return state;
  }
};
