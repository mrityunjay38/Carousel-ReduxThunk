import actionTypes from '../../utils/actionTypes';
const { CURRENT_SLIDE } = actionTypes;

const slide = (state = {}, action) => {
    switch (action.type) {
        case CURRENT_SLIDE:
            return {...state, ...action.slide};
        default:
            return state;    
    }
}

export default slide;