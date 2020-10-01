import actionTypes from '../../utils/actionTypes';
const { ADD_SLIDES, UPDATE_SLIDES } = actionTypes;

const slides = (state = [], action) => {
  switch (action.type) {
    case ADD_SLIDES:
      return [...action.slides];
    case UPDATE_SLIDES:
      if (action.id - 1 < 0) {
        state[state.length - 1].visibility = false;
      } else {
        state[action.id - 1].visibility = false;
      }
      if (action.id + 1 > state.length - 1) {
        state[0].visibility = false;
      } else {
        state[action.id + 1].visibility = false;
      }
      state[action.id].visibility = true;
      return [...state];
    default:
      return state;
  }
};

export default slides;