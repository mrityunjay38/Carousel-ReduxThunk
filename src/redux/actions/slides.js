import actionTypes from '../../utils/actionTypes';
const { ADD_SLIDES, UPDATE_SLIDES } = actionTypes;

export const addSlides = (slides) => {
    return {
        type: ADD_SLIDES,
        slides
    }
}


export const updateSlide = (id) => {
    return {
        type: UPDATE_SLIDES,
        id
    }
}

export const appendVisibilityKey = (slides) => {
    return slides.map(slide => {
        return {...slide, visibility: false}
    })
}

export const fetchSlides = () => {
    return async (dispatch, getState) => {
        try {
            const url = 'https://picsum.photos/v2/list';
            let photos = await (await fetch(url)).json();
            photos = appendVisibilityKey(photos);
            dispatch(addSlides(photos));
        }
        catch (err) {
            alert('Error while fetching slides');
            console.log(err);
        }
    }    
}