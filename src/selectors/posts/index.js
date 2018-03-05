//Core
import { createSelector } from 'reselect';

const getPosts = (state) => state.posts;

export const postsSelector = createSelector(
    getPosts
);