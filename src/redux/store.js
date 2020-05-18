import {createStore} from 'redux';
import todoListReducer from './reducer';

/*store 會保管一個應用程式中所有的資料 */
const todoListStore = createStore(todoListReducer)

export default todoListStore;