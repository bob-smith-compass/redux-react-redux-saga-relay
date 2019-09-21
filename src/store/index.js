
import { createStore } from 'redux';

/**
 * 
 */
let defaultState = 0;
let reducer = (state = defaultState , action) => {
    console.log(state);
    switch(action.type) {
        case 'INCREASE':
            return state+1;
        case 'DECREASE':
            return state-1;
        default:
            return state;
    }
};
const store = createStore(reducer);
export default store;