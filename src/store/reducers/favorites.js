import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isEmpty: true,
    favoriteDogs: null
}

const addToFavorites = (state, action) => {
    localStorage.setItem('favorites', JSON.stringify(action));
    return {
        ...state,
        isEmpty: false,
        favoriteDogs: {
            ...state.favoriteDogs,
            [action.dogName]: {
                name: action.dogName,
                img: action.img
            }
        }
    }
}

const removeFromFavorites = (state, action) => {
    return {
        ...state
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_FAVORITES: return addToFavorites(state, action);
        case actionTypes.REMOVE_FROM_FAVORITES: return removeFromFavorites(state, action);
        default: return state;
    }
}

export default reducer;