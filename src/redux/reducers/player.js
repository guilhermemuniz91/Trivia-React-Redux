import { RESET_SCORE, SET_IMG_GRAVATAR } from '../actions/login';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  gravatarImg: '',
  // ranking: [],
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER_INFO':
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.gravatarEmail,
    };
  case SET_IMG_GRAVATAR:
    return {
      ...state,
      gravatarImg: action.payload,
    };
  // case SET_RANKING:
  //   return {
  //     ...state,
  //     ranking: [...state.ranking, action.payload],
  //   };
  case 'ADD_SCORE':
    return {
      ...state,
      score: state.score + action.score,
      assertions: state.assertions + 1,
    };
  case RESET_SCORE:
    return {
      ...state,
      score: 0,
    };
  default:
    return state;
  }
};

export default player;
