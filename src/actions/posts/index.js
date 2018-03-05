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
    updatePosts: (date) => ({
        type: types.UPDATE_POSTS,
        payload: date
    }),
    updatePostsSucceed: (posts) => ({
        type: types.UPDATE_POSTS_SUCCEED,
        payload: posts
    }),
    updatePostsFailed: (error) => ({
        type: types.update_POSTS_FAILED,
        payload: error,
        error: true
    }),
    getKeys: (postKeys) => ({
        type: types.GET_KEYS,
        payload: postKeys
    }) 

});