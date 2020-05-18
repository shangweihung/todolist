import {ADDTODOLIST, EDITTODOLIST} from './constants'


//動作指令設定

/*設定的動作是異動資料的意思，像是更改資料內容、新增或刪除等等，
但是看到這裡也許會覺得很奇怪，因為資料是從server端撈出來的，
所以最源頭的資料應該是不能更改的
 */

 /*
 type: 動作的指令
 payload: 執行動作要傳入的資料
  */
const addTodoList = todoList => ({
    type : ADDTODOLIST, payload : todoList
})

const editTodoList = todoList => ({
    type: EDITTODOLIST, payload : todoList
})

export {addTodoList, editTodoList}