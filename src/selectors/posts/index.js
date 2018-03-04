//Core 
import { createSelector } from 'reselect';

const getPostsIdsFromState = (state) => state.posts.result;
const getPostsMapFromState = (state) => state.posts.entities;


export const selectPosts = createSelector(
    getPostsIdsFromState,
    getPostsMapFromState,
    (postsIds, postsMap) => {
        console.log(postsMap);
        const result = postsIds
            .map((_id) => 
                postsMap.get(_id)).toJS();
        return result;
    }
);