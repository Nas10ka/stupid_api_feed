//Instruments
import types from './types';

export default Object.freeze({
    initialize: () => ({
       type: types.INITIALIZE
    }),
    updateUiStart: () => ({
        type: types.UPDATE_UI_START
    }),
    updateUiStop: () => ({
        type: types.UPDATE_UI_STOP
    }),

});