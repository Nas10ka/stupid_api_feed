//Core
import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux';

//Imstruments
import posts from './posts';

export default combineReducers({
    router,
    posts,
});

