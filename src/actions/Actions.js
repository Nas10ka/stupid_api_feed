export const FETCH_POSTS = 'FETCH_POSTS';
export const GET_POSTS = 'GET_POSTS';
export const HANDLE_SCROLL = 'HANDLE_SCROLL';
export const SET_DATE = 'SET_DATE';
export const SET_MONTH = 'SET_MONTH';
export const SET_YEAR = 'SET_YEAR';

export const setDate = (url) => ({
    type: 'SET_DATE',
    url
});


export const setMonth = (month) => ({
    type: 'SET_MONTH',
    month
})

export const setYear = (year) => ({
    type: 'SET_YEAR',
    year
})

export const handleScroll = (currentPage) => ({
    type: 'HANDLE_SCROLL',
    currentPage
    // payload : {
    //     index: currentPage
    // }
    
});

export const fetchPosts = (docs, copyright) => ({
    type: 'FETCH_POSTS',
    // payload: {
    //     docs,
    //     copyright
    // }
    docs,
    copyright

});

export const getPosts = (posts, keys) => ({
    type: 'GET_POSTS',
    // payload: {
        keys,
        posts
    // } 
});

