function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
}
export const pageReducer = (state = {currentPage:1 }, action) => {
    switch (action.type) {
        case 'HANDLE_SCROLL': {
            // return {
            //     ...state,
            //     currentPage: action.currentPage
            // }
            // return updateObject (state, action.payload)
            return updateObject (state, {currentPage : action.currentPage})

        }
        default : 
            return state
    }
} 