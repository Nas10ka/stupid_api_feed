// Core
import { createSelector } from 'reselect';

const getPostsIdsFromState = (state) => state.posts.result;
const getPostsMapFromState = (state) => state.posts.entities;

const getPostShape = createSelector(
    getPostsIdsFromState,
    getPostsMapFromState,
    (postsIds, postsMap) => postsIds.map((id) => postsMap.get(id)).toJS()
);
export default getPostShape;