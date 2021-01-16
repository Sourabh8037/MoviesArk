import { FETCH_PEOPLE_SUCCESS, FETCH_SELECTED_PERSON_SUCCESS } from '../actions/actions';

const initialState  = {
  people: {},
  person: {
    actor: {},
    casting: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        people: { ...action.payload }
      };   
      break;
    case FETCH_SELECTED_PERSON_SUCCESS:
      return {
        ...state,
        person: {
          ...state.person,
          actor: action.payload.actor,
          casting: action.payload.casting
        }
      };
      break;
    default:
      return state;
  }
}