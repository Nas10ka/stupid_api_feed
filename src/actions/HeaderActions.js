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
