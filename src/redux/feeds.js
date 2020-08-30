import * as ActionTypes from './ActionTypes';

export const Feeds = (state = "" , action) => {
    switch(action.type) {
        
        case ActionTypes.ADD_PROMOS:
            return state;

        default:
            return state;
    }
}