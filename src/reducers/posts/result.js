import types from '../../actions/posts/types';
import { List, fromJS } from 'immutable';

const initialState = List([]);

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCEED: {
            console.log(fromJS(action.payload.result));
            return fromJS(action.payload.result);
        }
        case types.UPDATE_POSTS_SUCCEED : {
            return fromJS(action.payload.result);
        }
        default: 
            return state;
    }
}