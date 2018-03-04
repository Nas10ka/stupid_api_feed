//Core 
import { takeEvery } from 'redux-saga/effects';

//Instruments
import types from '../../actions/posts/types';
import { fetchPostsWorker } from './workers/fetchPosts';

export default Object.freeze({
    * fetchPostsWatcher () {
        yield takeEvery(types.FETCH_POSTS, fetchPostsWorker);
    },
})