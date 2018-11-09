import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Welcome from './components/welcome';
import Classrooms from './components/classrooms';
import Lobby from './components/lobby';
import LobbyBoards from './components/lobby-boards';
import Teasers from './components/escape-room-teasers';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/classrooms' component={Classrooms} />
          <Route path='/lobby' component={Lobby} />
          <Route path='/lobby-boards' component={LobbyBoards} />
          <Route path='/teasers' component={Teasers} />
        </Switch>
      </div>
    );
  }
}

export default App;
