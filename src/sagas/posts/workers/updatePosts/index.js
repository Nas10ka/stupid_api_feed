//Core 
import { call, put } from 'redux-saga/effects';
import { normalize } from 'normalizr';

//Instrument 
import uiActions from '../../../../actions/ui';
import postActions from '../../../../actions/posts';
import postsSchema from '../../../../schemas/posts';

export function* updatePostsWorker ({payload: date}) {
    try {
        const { month, year } = date;
        yield put(uiActions.updateUiStart());
        const response = yield call(fetch, `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=c9f0e0bfcf264c428a56cef6dfef139d`, {
            method: 'GET',
        });
        const data = yield call([response, 'json']);

        const denormalizedPosts = data.response.docs;
        let firstTenPosts = [];
        for (let i=0; i<100; i++) {
            firstTenPosts.push(denormalizedPosts[i]);
        }

        const posts = normalize(firstTenPosts, postsSchema );
    
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