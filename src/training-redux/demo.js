import { createStore } from 'redux';

var initialState = {
    status: false
};

var reducer = (state= initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_STATUS': {
            state.status = !state.status;
        }
    }
    return state;
};

var action = {
  type: 'TOGGLE_STATUS'
};

var store = createStore(reducer);

store.dispatch(action);

console.log(store.getState());