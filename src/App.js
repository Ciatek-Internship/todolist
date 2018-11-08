import React, { Component } from 'react';
import './App.css';

import Counter from './Counter.js'

import TodoList from './TodoList'

import { Switch, Route } from 'react-router-dom'
class App extends Component {
 
  render() {
    return (
      <div className="App">
        {/* <Counter></Counter> */}
        {/* <br/> */}
        {/* <TodoList></TodoList> */}
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/">Todo List </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/counter">Counter</a>
              </li>
            </ul>
          </div>
        </nav>

        <br/>

        <Switch>
          <Route exact path='/' component={TodoList}/>
          <Route path='/counter' component={Counter}/>
        </Switch>
      </div>
    );
  }
}

export default App;
