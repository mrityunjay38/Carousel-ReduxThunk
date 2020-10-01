import actionTypes from '../../utils/actionTypes';
const { CURRENT_SLIDE } = actionTypes;

export const slide = (slide) => {
    return {
        type: CURRENT_SLIDE,
        slide
    }
}