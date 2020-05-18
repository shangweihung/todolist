import React from 'react';
import { Provider } from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';

import TopBlock from './components/topButton/TopBlock';
import MyTask from './components/pages/MyTask';
import InProgress from './components/pages/InProgress';
import Completed from './components/pages/Completed';

import todoListStore from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={todoListStore}>
      <HashRouter>
        <div class="alignCenter">
          <TopBlock />
          <Route exact path="/" component={MyTask} />
          <Route exact path="/inProgress" component={InProgress} />
          <Route exact path="/completed" component={Completed} />
        </div>
      </HashRouter>
    </Provider>

  );
}

window.store = todoListStore


export default App;
