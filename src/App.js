import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import TopBlock from './components/TopBlock';
import MyTask from './components/MyTask';
import './App.css';

//匯入store和建構動作的事件
import todoListStore from './redux/store';
import {addTodoList} from './redux/action';

function App() {
  return (
    <HashRouter>
      <div>
        <TopBlock />
        <Route exact path="/" component={MyTask} />
      </div>
    </HashRouter>
  );
}

window.store = todoListStore
window.addTodlList = addTodoList

export default App;
