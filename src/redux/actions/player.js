import { slide } from './slide';
import { updateSlide } from './slides';
import actionTypes from '../../utils/actionTypes';
const { NEXT_PREV, LOADING_BAR } = actionTypes;

export const spinner = (spinner) => {
    return {
        type: LOADING_BAR,
        spinner
    }
}

export const nextPrev = (index) => {
    return (dispatch, getState) => {
        const { currentIndex } = index;
        const { slides } = getState();
        dispatch(updateSlide(currentIndex));
        dispatch(slide(slides[currentIndex]));
        return {
            type: NEXT_PREV,
            index
        }
    }
}