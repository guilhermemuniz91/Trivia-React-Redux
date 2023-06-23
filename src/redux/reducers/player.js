// import { SET_NAME, SET_EMAIL } from '../actions/login';

const INITIAL_STATE = {
  name: '',
  assertions: '',
  score: '',
  gravatarEmail: '',
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
  default:
    return state;
  }
};

export default player;
