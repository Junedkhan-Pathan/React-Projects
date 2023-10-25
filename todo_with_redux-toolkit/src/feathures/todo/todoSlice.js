import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                isCompleted: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)
        },
        toggleComplete: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload ? { ...todo, isCompleted: !todo?.isCompleted } : todo)
        }

    }
})

export const { addTodo, removeTodo, updateTodo, toggleComplete } = todoSlice.actions
export default todoSlice.reducer