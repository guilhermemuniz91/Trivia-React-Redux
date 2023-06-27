export const RESET_SCORE = 'SET_SCORE';
export const SET_IMG_GRAVATAR = 'SET_IMG_GRAVATAR';
// export const SET_RANKING = 'SET_RANKING';

export function resetScore(score) {
  return {
    type: RESET_SCORE,
    payload: score,
  };
}

export function setImgGravatar(responseGravatar) {
  return {
    type: SET_IMG_GRAVATAR,
    payload: responseGravatar,
  };
}

// export function setRanking(playerToSave) {
//   return {
//     type: SET_RANKING,
//     payload: playerToSave,
//   };
// }
