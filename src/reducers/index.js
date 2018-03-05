//Core
import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux';

//Imstruments
import posts from './posts';
import keys from './keys';

export default combineReducers({
    router,
    posts,
    keys,
});

