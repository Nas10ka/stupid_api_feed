import types from '../../actions/date/types';
import { Map } from 'immutable';

const initialState = Map({ 'month': 1, 'year': 2016 });

export default (state = initialState, action) => {
    switch (action.type) {
        case types.SET_DATE: {
            return action.payload;
        }
        default: 
            return state;
    }
}