import actionTypes from '../../utils/actionTypes';
const { ADD_SLIDES } = actionTypes;

const slides = (state = [], action) => {
    switch (action.type) {
        case ADD_SLIDES:
            return [...action.slides];
        default:
            return state;    
    }
}

export default slides;