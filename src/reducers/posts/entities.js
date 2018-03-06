import types from '../../actions/posts/types';
import { Map, fromJS } from 'immutable';

const initialState = Map({});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCEED: {
            return fromJS(action.payload.entities.posts);
        }
        case types.UPDATE_POSTS_SUCCEED : {
            return fromJS(action.payload.entities.posts);
        }
        default: 
            return state;
    }
}