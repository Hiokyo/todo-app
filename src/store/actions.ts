import { SET_TODO_INPUT, EDIT_TODO, ADD_TODO } from "./constants"

export const setTodoInput = (payload:string) => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodo = (payload:string) => ({
    type: ADD_TODO,
    payload
})

export const editTodo = (payload: {todo:string, id:number}) => ({
    type: EDIT_TODO,
    payload
})