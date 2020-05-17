import {ADDTODOLIST} from './constants'

export const addTodoList = todoList => ({
    type : ADDTODOLIST, payload : todoList
})