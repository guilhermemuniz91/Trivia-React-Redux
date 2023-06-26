// export const SET_EMAIL = 'SET_EMAIL';
// export const SET_NAME = 'SET_NAME';
export const SET_SCORE = 'SET_SCORE';
export const SET_IMG_GRAVATAR = 'SET_IMG_GRAVATAR';

// export function setEmail(gravatarEmail) {
//   return {
//     type: SET_EMAIL,
//     payload: gravatarEmail,
//   };
// }

// export function setName(name) {
//   return {
//     type: SET_NAME,
//     payload: name,
//   };
// }

export function setScore(score) {
  return {
    type: SET_SCORE,
    payload: score,
  };
}

export function setImgGravatar(responseGravatar) {
  return {
    type: SET_IMG_GRAVATAR,
    payload: responseGravatar,
  };
}
