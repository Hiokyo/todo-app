import { ADD_TODO, EDIT_TODO, SET_TODO_INPUT, SET_TAG_INPUT } from './constants'

type InitStateType = {
    todos: Array<any>;
    todoInput: string;
    tagInput: string;
}

const initialTodos = JSON.parse(localStorage.getItem("todo") ?? '') ?? []
const initState: InitStateType = {
    todos: initialTodos,
    todoInput: "",
    tagInput: ""
}

function reducer(state:any, action:any){
    switch (action.type){
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case SET_TAG_INPUT:
            return {
                ...state,
                tagInput: action.payload
            }
        case ADD_TODO:
            const newId = state.todos.length + 1
            return {
                ...state,
                todos: [...state.todos, {id:newId, todo:action.payload.todos, tags:action.payload.tags}]
            }
        case EDIT_TODO:
            const newTodo = [...state.todos]
            const item = newTodo.find(todo => todo.id === action.payload.id)
            item.todo = action.payload.todo
            return {
                ...state,
                todos: newTodo
            };
        default:
            throw new Error('Invalid action.')
    }
}


export { initState }
export type { InitStateType }
export default reducer