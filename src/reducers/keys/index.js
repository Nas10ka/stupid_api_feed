import types from '../../actions/posts/types';
import { List } from 'immutable';

const initialState = List([]);

export default (state = initialState, action) => {
    switch (action.type) {
        case types.GET_KEYS: {
            return action.payload;
        }
        default: 
            return state;
    }
}