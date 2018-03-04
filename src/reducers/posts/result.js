import types from '../../actions/posts/types';
import { List, fromJS, is } from 'immutable';

const initialState = List([]);

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCEED: {
            console.log('result reducer:', action.payload);
            return fromJS(action.payload.result);
        }
        default: 
            return state;
    }
}