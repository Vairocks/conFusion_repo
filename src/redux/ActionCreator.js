
import * as ActionTypes from './ActionTypes';
import {baseUrl } from '../shared/baseUrl';
//a function to create action object

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
    });

export const postComment = (dishId, rating, author,comment ) => (dispatch) =>{

    const newComment = {
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments',{
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
           return response;
    }
    else {
        var error = new Error('Error' + response.status+' : '+response.statusText);
        error.response = response;
        throw error;
        }
    },
    error =>{
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => { console.log('Post commments', error.message);
        alert('Your comment could npt be posted \nError: '+error.message);})
    }



export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));
    
    return fetch(baseUrl + 'dishes')
        .then(response => {
            if (response.ok) {
               return response;
        }
        else {
            var error = new Error('Error' + response.status+' : '+response.statusText);
            error.response = response;
            throw error;
        }
    },
    error =>{
        var errmess = new Error(error.message);
        throw errmess;
        })  
        .then(response => response.json())
        .then(dishes=> dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
    }

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
    });

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
    });

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes   
    });

export const fetchComments = () => (dispatch) => {
    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
           return response;
    }
    else {
        var error = new Error('Error' + response.status+' : '+response.statusText);
        error.response = response;
        throw error;
        }
    },
    error =>{
        var errmess = new Error(error.message);
        throw errmess;
    })  
     .then(response => response.json())
     .then(comments=> dispatch(addComments(comments)))
     .catch(error => dispatch(dishesFailed(error.message)));
    }

export const commentsFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
    });

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments   
    });

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    
    return fetch(baseUrl + 'promos')
    .then(response => {
        if (response.ok) {
           return response;
    }
    else {
        var error = new Error('Error' + response.status+' : '+response.statusText);
        error.response = response;
        throw error;
        }
    },
    error =>{
        var errmess = new Error(error.message);
        throw errmess;
    })
        .then(response => response.json())
        .then(promos=> dispatch(addPromos(promos)))
        .catch(error => dispatch(dishesFailed(error.message)));
    }

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
    });

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
    });

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos   
    });



//If you see above only two types of work is happening 
//first, is a fetch function (thunk) of a resource is creacted ,so it fetches resource from the server and call the right action object based on scrutiny of server response
//second, as soon as response from server is obtained it is collected as payload with a action type and
//converted into an object known as action object
//action object is nothing just a wrap of action type and payload together.
//It is an action type based on which the reducer decides what to do with the response/payload.