import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import TasksList from './TasksList';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/TaskList:tarefa'} render={(props) => <TasksList name='tarefa1' {...props}/>}/>
      </BrowserRouter>
    )
  }
}

export default App;
