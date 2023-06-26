const INITIAL_STATE = {
  questions: [],
  currentIndex: 0,
};

const gameReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case 'FETCH_QUESTIONS':
    return {
      ...state,
      questions: [...payload.questions],
    };
  default:
    return state;
  }
};

export default gameReducer;
