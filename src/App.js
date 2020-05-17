import React from 'react';
import { Provider } from 'react-redux';
import {HashRouter, Route} from 'react-router-dom';
import TopBlock from './components/TopBlock';
import MyTask from './components/MyTask';
import InProgress from './components/InProgress';
import Completed from './components/Completed';
import './App.css';
import todoListStore from './redux/store';


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
