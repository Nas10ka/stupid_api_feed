export const FETCH_POSTS = 'FETCH_POSTS';
export const GET_POSTS = 'GET_POSTS';

export const fetchPosts = (docs, copyright) => ({
    type: 'FETCH_POSTS',
    // payload: {
    //     docs,
    //     copyright
    // }
    docs,
    copyright

});

export const getPosts = (keys, posts) => ({
    type: 'GET_POSTS',
    // payload: {
        keys,
        posts
    // } 
});

