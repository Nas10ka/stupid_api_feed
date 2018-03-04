function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
}
// const init = {docs: [], copyright: ''};

// export const postReducer = (state= { docs: [], copyright: '', postList: [], objectKeys: []}, action) => {
    export const postReducer = (state= { docs: [], copyright: ''}, action) => {
    switch (action.type) {
        case 'FETCH_POSTS': {
            // return {docs: action.docs, copyright: action.copyright }
            return updateObject(state, {docs: action.docs, copyright: action.copyright } )
        }

        default:
            return state
    }
};

