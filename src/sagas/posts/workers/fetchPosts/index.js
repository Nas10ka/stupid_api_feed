//Core 
import { call, put } from 'redux-saga/effects';

//Instrument 
import uiActions from '../../../../actions/ui';
import postActions from '../../../../actions/posts';

export function* fetchPostsWorker () {
    try {
        yield put(uiActions.updateUiStart());
        const response = yield call(fetch, `https://api.nytimes.com/svc/archive/v1/2016/1.json?api-key=c9f0e0bfcf264c428a56cef6dfef139d`, {
            method: 'GET',
        });
        const data = yield call([response, 'json']);

        const posts = data.response.docs;

        const objectKeys = Object.keys(posts[0]);
        console.log('objectKeys',objectKeys);

    
        if(response.status !== 200) {
            throw new Error('Error! Response status is not 200!');
        }
        yield put(postActions.getKeys(objectKeys));
        yield put(postActions.fetchPostsSucceed(posts));
    } catch (error) {
        yield put(postActions.fetchPostsFailed(error.message));
        debugger;
    } finally {
        yield put(uiActions.updateUiStop());
        yield put(uiActions.initialize());
    }
}