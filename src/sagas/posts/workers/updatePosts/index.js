//Core 
import { call, put } from 'redux-saga/effects';

//Instrument 
import uiActions from '../../../../actions/ui';
import postActions from '../../../../actions/posts';

export function* updatePostsWorker ({payload: date}) {
    try {
        const { month, year } = date;
        yield put(uiActions.updateUiStart());
        const response = yield call(fetch, `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=c9f0e0bfcf264c428a56cef6dfef139d`, {
            method: 'GET',
        });
        const data = yield call([response, 'json']);

        const posts = data.response.docs;
    
        if(response.status !== 200) {
            throw new Error('Error! Response status is not 200!');
        }

        yield put(postActions.updatePostsSucceed(posts));
    } catch (error) {
        yield put(postActions.updatePostsFailed(error.message));
        debugger;
    } finally {
        yield put(uiActions.updateUiStop());
        yield put(uiActions.initialize());
    }
}