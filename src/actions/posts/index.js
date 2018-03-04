//Instruments
import types from './types';

export default Object.freeze({
    fetchPosts: () => ({
        type: types.FETCH_POSTS
    }),
    fetchPostsSucceed: (posts) => ({
        type: types.FETCH_POSTS_SUCCEED,
        payload: posts
    }),
    fetchPostsFailed: (error) => ({
        type: types.FETCH_POSTS_FAILED,
        payload: error,
        error: true
    }),

});