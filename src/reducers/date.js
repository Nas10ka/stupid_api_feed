function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
}


let url = "https://api.nytimes.com/svc/archive/v1/2016/1.json?api-key=c9f0e0bfcf264c428a56cef6dfef139d";
let month = 1;
let year = 2007;

export const headerReducer = (state={url, month, year} , action) => {
    switch (action.type) {
        case 'SET_DATE': {
            return updateObject(state, {url: action.url})
        }
        case 'SET_MONTH': {
            return updateObject(state, {month: action.month})
            // return {
            //     month : action.month
            // };
        }   
        case 'SET_YEAR': {
            return updateObject(state, {year: action.year})
            // return {
            //     year: action.year
            // };
        }
       
        default:
            return state
    }
};