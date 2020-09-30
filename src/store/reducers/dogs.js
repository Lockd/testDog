import * as actionTypes from '../actions/actionTypes';

const initialState = {
    dogs: null,
    areImagesLoaded: false,
    selectedDog: null,
    redirectPath: '/'
}

const fetchBreedsSuccess = (state, action) => {
    return {
        ...state,
        dogs: action.dogs
    }
}

const fetchImageStart = (state, action) => {
    return {
        ...state
    }
}

const fetchImageSuccess = (state, action) => {
    return {
        ...state,
        dogs: {
            ...state.dogs,
            [action.key]: {
                ...state.dogs[action.key],
                name: action.key,
                img: action.img
            }
        }
    }
}

const imagesAreLoaded = (state, action) => {
    return {
        ...state,
        areImagesLoaded: true
    }
}

const dogIsSelected = (state, action) => {
    return {
        ...state,
        selectedDog: action.selectedDog
    }
}

const getDogsImageStart = (state, action) => ({...state})

const getDogsImageSuccess = (state, action) => {
    return {
        ...state,
        selectedDog: {
            ...state.selectedDog,
            name: action.name,
            imgs: action.images,
        },
        redirectPath: action.redirectPath
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_BREEDS_SUCCESS: return fetchBreedsSuccess(state, action);
        case actionTypes.FETCH_IMAGE_START: return fetchImageStart(state, action);
        case actionTypes.FETCH_IMAGE_SUCCESS: return fetchImageSuccess(state, action);
        case actionTypes.IMAGES_ARE_LOADED: return imagesAreLoaded(state, action);
        case actionTypes.DOG_IS_SELECTED: return dogIsSelected(state, action);
        case actionTypes.GET_DOGS_IMAGE_START: return getDogsImageStart(state, action);
        case actionTypes.GET_DOGS_IMAGE_SUCCESS: return getDogsImageSuccess(state, action);
        default: return state;
    }
}

export default reducer;