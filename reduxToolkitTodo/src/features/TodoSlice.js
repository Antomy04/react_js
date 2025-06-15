import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "hello world"}]
}

// function sayHello() {
//     console.log("sayHello function reference is passed in the reducer")
// }

export const TodoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {           //state==initialState, action: it provide values
            const todo = {
                id: nanoid(),
            //  text: action.payload.text 
            //  or
                text: action.payload
            }
            state.todos.push(todo)
        },     
        
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // sayHello     //reference can be passed 

        // updateTodo: (state, action) => {
        //     const { id, newText} = action.payload
        //     state.todos = state.todos.map((todo) => 
        //         todo.id === id ? {...todo, todo: newText} : todo)
        // },

        // deleteTodo: (state, action) => {
        //     state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        // }
    }
})

// export all the functionalities
export const {addTodo, removeTodo} = TodoSlice.actions

export default TodoSlice.reducer









