import * as types from './../constants/index'
import {v4 as uuidv4} from "uuid";
const initialState = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_TASK: {
            return state;
        }
        case types.ADD_TASK: {
            console.log(action);
            const id = uuidv4();
            const newTask = {
                id,
                ...action.task
            };
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        }
        default: {
            return state;
        }
    }
};

export default reducer;