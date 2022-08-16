type InitStateType = {
    todos: Array<[]>;
    todoInput: string;
}

const initState: InitStateType = {
    todos: [],
    todoInput: "",
}

function reducer(state:any, action:any){
    switch (action.type){
        // Code here
    }

    return state;
}


export { initState }
export type { InitStateType }
export default reducer