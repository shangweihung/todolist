import React from 'react';
import { Provider } from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import TopBlock from './components/TopBlock';
import MyTask from './components/MyTask';
import './App.css';
import todoListStore from './redux/store';


function App() {
  return (
    <Provider store={todoListStore}>
      <HashRouter>
        <div>
          <TopBlock />
          <Route exact path="/" component={MyTask} />
        </div>
      </HashRouter>
    </Provider>

  );
}

window.store = todoListStore


export default App;
