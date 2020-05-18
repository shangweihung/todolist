import {todoData, ADDTODOLIST, EDITTODOLIST} from './constants';


/*
reducer 會在裡面描述每個動作對資料發生的事情, 而因為動作通常不只一個,
所以會用switch來判斷目前收到的指令
 */
const todoListReducer = (state = todoData, action) => {
    switch(action.type){
        case ADDTODOLIST:{
            action.payload.id = state.length + 1
            return [...state, action.payload]
        }

        case EDITTODOLIST: {
            //先以目前的資料去複製另一個全新的陣列
            let newState = state.slice(0)
            //下迴圈比對id值
            for (let i = 0; i <= newState.length - 1; i++) {
                if (newState[i].id === action.payload.id){
                    //將新的資料用splice()取代原本的位置中的資料
                    newState.splice(i, 1, action.payload)
                    break;
                }
            }
            //回傳處理後的新資料
            return newState
        }

        default:{
            return state
        }
    }
}



export default todoListReducer;