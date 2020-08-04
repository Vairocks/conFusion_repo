import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
        isLoading: true,
        errMess: null,
        dishes: []
}, action) => {
    switch(action.type) {
            case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []};

        case ActionTypes.DISHES_FAILED:
        return {...state, isLoading: false, errMess: action.payload, dishes: []};

        default:
            return state;
    }
}

//a reducer recieves an action type and sometimes a resource in payload.
//based on action type the reducer decides which variable/resource of store is needed to change
//and what to do with recieved payload