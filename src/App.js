import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom'
import './App.css';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
