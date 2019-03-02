import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Login from './page/Login'
import Index from './page/Index'
// import Home from './page/Home'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route  exact path="/" component={Login}/>
            <Index/>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
