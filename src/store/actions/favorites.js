import * as actionTypes from './actionTypes';
import axios from 'axios';

export const addToFavorites = (dogName, img) => {
    return {
        type: actionTypes.ADD_TO_FAVORITES,
        dogName: dogName,
        img: img
    }
}

export const loadFavorites = () => {
    return dispatch => {
        localStorage.getItem('favorites');
    }
}