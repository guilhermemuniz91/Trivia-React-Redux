export const actionPlay = (name, email) => ({
  type: 'PLAY',
  payload: {
    name,
    email,
  },
});

export const scoreAction = (payload) => ({
  type: 'ADD_SCORE',
  score: parseInt(payload, 10),
});
