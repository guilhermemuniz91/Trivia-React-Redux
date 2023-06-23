import { SET_NAME, SET_EMAIL } from '../actions/login';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: '',
  gravatarEmail: '',
};

const playerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_NAME:
    return {
      name: state.name + action.payload,
    };
  case SET_EMAIL:
    return {
      gravatarEmail: state.gravatarEmail + action.payload,
    };
  default:
    return state;
  }
};

export default playerReducer;
