//Core
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import createSagaMiddlware from 'redux-saga';

//Instruments
import { saga } from '../sagas';
import reducers from '../reducers';

//Environment check
const dev = process.env.NODE_ENV === 'development'; // eslint-disable-line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddlware();
const middleware = [ sagaMiddleware, routerMiddleware(history)];


//This is middleware
const logger = createLogger({
    duration: true,
    collapsed: true,
    diff: true,
    colors: {
        title: () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',

    },
})
if(dev) {
    middleware.push(logger);
}

export { history };
export default createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(saga);