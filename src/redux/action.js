import {ADDTODOLIST, EDITTODOLIST} from './constants'

const addTodoList = todoList => ({
    type : ADDTODOLIST, payload : todoList
})

const editTodoList = todoList => ({
    type: EDITTODOLIST, payload : todoList
})

export {addTodoList, editTodoList}