import actionTypes from '../../utils/actionTypes';
const { NEXT_PREV, LOADING_BAR } = actionTypes;

const initState = {
    currentIndex: 0,
    loading: true
}

const player = (state = initState, action) => {
    switch (action.type) {
        case LOADING_BAR:
            return {...state, ...action.spinner}
        case NEXT_PREV:
            return {...state, ...action.index}
        default:
            return state;    
    }
}

export default player;