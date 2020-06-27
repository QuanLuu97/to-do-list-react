import * as types from './../constants/index';

export const taskList = () => {
    return {
        type: types.LIST_TASK
    }
};

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
};

