import {todoData, ADDTODOLIST} from './constants';

const todoListReducer = (state = todoData, action) => {
    switch(action.type){
        case ADDTODOLIST:{
            action.payload.id = state.length + 1
            return [...state, action.payload]
        }

        default:{
            return state
        }
    }
}

export default todoListReducer;