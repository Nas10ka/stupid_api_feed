// import types from '../../actions/posts/types';
// import { Map } from 'immutable';

// const initialState = Map({});

// export default (state = initialState, action) => {
//     switch (action.type) {
//         case types.FETCH_POSTS_SUCCEED: {
//             return action.payload;
//         }
//         case types.UPDATE_POSTS_SUCCEED : {
//             return action.payload;
//         }
//         default: 
//             return state;
//     }
// }

// Core
import { combineReducers } from 'redux';

//Instruments
import entities from './entities';
import result from './result';

export default combineReducers({
    entities,
    result,
});

