import { EDIT_TODO, SET_TODO_INPUT } from './constants'

type InitStateType = {
    todos: Array<any>;
    todoInput: string;
}

const initState: InitStateType = {
    todos: [
        {id: 1, todo: "Pay bills"},
        {id: 2, todo: "Buy eggs"},
        {id: 3, todo: "Hit the gym"},
        {id: 4, todo: "Read a book"},
        {id: 5, todo: "Organize office"}
    ],
    todoInput: "",
}

function reducer(state:any, action:any){
    switch (action.type){
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
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