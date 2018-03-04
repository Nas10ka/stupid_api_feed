function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
}
// const init = {
//     postList: [], objectKeys: []
// };

// export const postReducer = (state= { docs: [], copyright: '', postList: [], objectKeys: []}, action) => {
    export const getPostReducer = (state= {postList: [], objectKeys: []}, action) => {
    switch (action.type) {
        case 'GET_POSTS' : {
            return updateObject (state, {
                postList: action.posts,
                objectKeys: action.keys
            })
        } 
        default: return state
    }
};

