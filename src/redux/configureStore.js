import { createStore, combineReducers } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promos } from './promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promos: Promos,
            leaders: Leaders
        })
    );
    return store; 
}

//combining alll the staes together to form a store and gave a reducer to each one of it
