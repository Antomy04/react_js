import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/TodoSlice'

export const Store = configureStore({
    reducer: todoReducer
})
