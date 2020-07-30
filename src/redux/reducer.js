import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOS} from '../shared/promos';

export const initialState = {

        dishes : DISHES,
        comments : COMMENTS,
        promos: PROMOS,
        leaders: LEADERS 
}

export const Reducer = (state =  initialState,action) => {
    return state;
};