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
import AddClassroom from './components/add-classroom';
import SetLobbyTV from './components/set-lobby-tv';
import SetClassroomTV from './components/set-classroom-tv';
import LobbyTV from './components/lobby-tv';
import ClassroomTV from './components/classroom-tv';
import NewLobbyBoard from './components/add-lobby-board';
import NewTeaser from './components/add-teaser';


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
          <Route path='/new-classroom' component={AddClassroom} />
          <Route path='/set-lobby-tv' component={SetLobbyTV} />
          <Route path='/set-classroom-tv' component={SetClassroomTV} />
          <Route path='/lobby-tv' component={LobbyTV} />
          <Route path='/classroom-tv' component={ClassroomTV} />
          <Route path='/new-lobby-board' component={NewLobbyBoard} />
          <Route path='/new-teaser' component={NewTeaser} />
        </Switch>
      </div>
    );
  }
}

export default App;
