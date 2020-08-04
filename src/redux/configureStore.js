import { createStore, combineReducers,applyMiddleware } from 'redux';
import { createForms} from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promos } from './promotions';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promos: Promos,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk,logger)
    );
    return store; 
}

//above all reducers are combined
// their states thus also combined to forn a store for our app
//the store is like that: {dishes,comments,promos,leaders,errMess,isLoading,errMess,isLoading,errMess,isloading,errMess}
//the changing values of these store variables is like changing vales of the store which can only be done by reducer fuctions.
//at a point of the the collective resouces and values in a store is state of the app
