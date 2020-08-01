import {COMMENTS} from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = COMMENTS.length;
            comment.date = new Date().toISOString;
            return state.concat(comment);
            //concat will create a copy of previous object add new comment to it
            //and return new object
            //only a in memory thing for now when app closed the new info is gone 
        default:
            return state;
    }
}