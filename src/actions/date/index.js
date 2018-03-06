//Instruments
import types from './types';
export default Object.freeze({ 
    setDate: (date) => ({
        type: types.SET_DATE,
        payload: date
    }),
});
