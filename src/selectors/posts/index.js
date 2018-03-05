//Core
import { createSelector } from 'reselect';


const postsSelector = state => state.posts;

export const postKeys = createSelector(
    postsSelector,
    (posts) => {
        return Object.keys(postsSelector);
    }

)