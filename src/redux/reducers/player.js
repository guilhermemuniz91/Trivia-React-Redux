// import { SET_NAME, SET_EMAIL } from '../actions/login';
// import { SET_IMG_GRAVATAR, SET_SCORE } from '../actions/login';
// import { SET_SCORE } from '../actions/login';

const INITIAL_STATE = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
  gravatarImg: '',
  ranking: [],
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'USER_INFO':
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.gravatarEmail,
    };
  // case SET_SCORE:
  //   return {
  //     ...state,
  //     score: action.payload,
  //   };
  // case SET_IMG_GRAVATAR:
  //   return {
  //     ...state,
  //     gravatarImg: action.payload,
  //   };
  // case SET_IMG_GRAVATAR:
  //   return {
  //     ...state,
  //     ranking: [action.payload],
  //   };
  case 'ADD_SCORE':
    return {
      ...state,
      score: state.score + action.score,
      assertions: state.assertions + 1,
    };
  default:
    return state;
  }
};

export default player;
