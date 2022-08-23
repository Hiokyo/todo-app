import { SET_TODO_INPUT, EDIT_TODO, ADD_TODO, SET_TAG_INPUT } from "./constants"

export const setTodoInput = (payload:string) => ({
    type: SET_TODO_INPUT,
    payload
})
export const setTagInput = (payload: string) => ({
    type: SET_TAG_INPUT,
    payload
})

export const addTodo = (payload: {todos: string, tags: string}) => ({
    type: ADD_TODO,
    payload
})

export const editTodo = (payload: {todo: string, id: number}) => ({
    type: EDIT_TODO,
    payload
})