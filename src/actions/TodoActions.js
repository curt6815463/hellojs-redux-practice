// action type
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const CLICK_TODO = 'CLICK_TODO';

// action creator
export function addTodo(text) {
    return {
        type:ADD_TODO,
        text
    }
}

export function toggleTodo(index) {
    return {
        type:TOGGLE_TODO,
        index
    }
}

export function deleTodo(index) {
    return {
        type:CLICK_TODO,
        index
    }
}