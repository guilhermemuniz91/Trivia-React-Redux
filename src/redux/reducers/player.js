// import { SET_NAME, SET_EMAIL } from '../actions/login';
// import { SET_IMG_GRAVATAR, SET_SCORE } from '../actions/login';
import { SET_SCORE } from '../actions/login';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: '',
  gravatarEmail: '',
  gravatarImg: '',
  ranking: [],
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // case SET_NAME:
  //   return {
  //     ...state,
  //     name: action.payload,
  //   };
  // case SET_EMAIL:
  //   return {
  //     ...state,
  //     gravatarEmail: action.payload,
  //   };
  case 'USER_INFO':
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: action.payload.gravatarEmail,
    };
  case SET_SCORE:
    return {
      ...state,
      score: action.payload,
    };
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
  default:
    return state;
  }
};

export default player;
