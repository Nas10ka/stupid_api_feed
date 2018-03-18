//Core 
import { takeEvery } from 'redux-saga/effects';

//Instruments
import types from '../../actions/posts/types';
import { fetchPostsWorker } from './workers/fetchPosts';
import { updatePostsWorker } from './workers/updatePosts';

export default Object.freeze({
    * fetchPostsWatcher () {
        yield takeEvery(types.FETCH_POSTS, fetchPostsWorker);
    },
    * updatePostsWatcher () {
        yield takeEvery(types.UPDATE_POSTS, updatePostsWorker);
    },
})