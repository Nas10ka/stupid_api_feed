//Core 
import { call, put, select } from 'redux-saga/effects';
import { normalize } from 'normalizr';

//Instrument 
import uiActions from '../../../../actions/ui';
import postActions from '../../../../actions/posts';
import { post } from '../../../../schemas';

export function* fetchPostsWorker () {
    try {
        yield put(uiActions.updateUiStart());
        const response = yield call(fetch, `https://api.nytimes.com/svc/archive/v1/2016/1.json?api-key=c9f0e0bfcf264c428a56cef6dfef139d`, {
            method: 'GET',
        });
        const data = yield call([response, 'json'])
        // const data1 = yield call(response.json);
        // const data2 = yield call(response);
        console.log('response', data);
        const posts = data.response.docs;
        if(response.status !== 200) {
            throw new Error('message');
        }
        const normalizedPosts = normalize(posts, post);
        console.log(posts[0]._id);

        yield put(postActions.fetchPostsSucceed(normalizedPosts));
    } catch (error) {
        yield put(postActions.fetchPostsFailed(error.message));
        debugger;
    } finally {
        yield put(uiActions.updateUiStop());
        yield put(uiActions.initialize());
    }
}