import * as actionTypes from './actionTypes';
import axios from 'axios';


export const fetchBreeds = () => {
    return dispatch => {
        dispatch(fetchBreedsStart());
        axios.get('https://dog.ceo/api/breeds/list/all')
            .then(response => {
                // console.log(response);
                dispatch(fetchBreedsSuccess(response.data.message));
                dispatch(fetchDogsImage(response.data.message));
            })
            .catch(error => {
                console.log(error);
            })
        
    }
}

export const fetchBreedsStart = () => {
    return {
        type: actionTypes.FETCH_BREEDS_START
    }
}

export const fetchBreedsSuccess = (dogs) => {
    return {
        type: actionTypes.FETCH_BREEDS_SUCCESS,
        dogs: dogs
    }
}

export const fetchImageStart = () => {
    return {
        type: actionTypes.FETCH_IMAGE_START
    }
}

export const fetchDogsImage = (dogs) => {
    return dispatch => {
        dispatch(fetchImageStart());
        const picRequests = [];
        const dogKeys = [];
        for (let key in dogs) {
            picRequests.push(axios.get(`https://dog.ceo/api/breed/${key}/images/random`));
            dogKeys.push(key);
        }
        axios.all(picRequests)
            .then(axios.spread((...responses) => {
                for (let index in responses){
                    // console.log(responses);
                    dispatch(fethImageSuccess(dogKeys[index], responses[index].data.message));
                }                
                dispatch(imagesAreLoaded());
            }))
            .catch(error => {
                console.log(error);
            })
    }
}

export const fethImageSuccess = (key, response) => {
    return {
        type: actionTypes.FETCH_IMAGE_SUCCESS,
        key: key,
        img: response
    }
}

export const imagesAreLoaded = () => {
    return {
        type: actionTypes.IMAGES_ARE_LOADED
    }
}

export const dogIsSelected = (dog) => {
    return dispatch => {
        dispatch(getDogsImagesStart());
        axios.get(`https://dog.ceo/api/breed/${dog}/images`)
            .then(response => {
                dispatch(getDogsImagesSuccess(response.data.message, dog));
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export const getDogsImagesStart = () => {
    return {
        type: actionTypes.GET_DOGS_IMAGE_START
    }
}

export const getDogsImagesSuccess = (images, dog) => {
    return {
        type: actionTypes.GET_DOGS_IMAGE_SUCCESS,
        images: images,
        name: dog,
        redirectPath: `/breed/${dog}`
    }
}