import { createStore, combineReducers,applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promos } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promos: Promos,
            leaders: Leaders
        }),
        applyMiddleware(thunk,logger)
    );
    return store; 
}

//combining alll the staes together to form a store and gave a reducer to each one of it
