import types from '../../actions/posts/types';
import { Map, fromJS, is } from 'immutable';

const initialState = Map({});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCEED: {
            console.log(fromJS(action.payload.entities.posts));
            return fromJS(action.payload.entities.posts);
        }
        default: 
            return state;
    }
}