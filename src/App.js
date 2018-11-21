import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import Welcome from './components/welcome';
import Classroom from './components/classroom';
import Lobby from './components/lobby';
import SetLobbyTV from './components/set-lobby-tv';
import SetClassroomTV from './components/set-classroom-tv';
import LobbyTV from './components/lobby-tv';
import ClassroomTV from './components/classroom-tv';
import EditLobbyBoard from './components/edit-lobby-board';
import EditDefaultBoard from './components/edit-default-board';
import EditActivity from './components/edit-activity';
import CreateActivityPanel from './components/create-activity-panel';
import ActivityPanels from './components/activity-panels';
import WelcomePanels from './components/welcome-panels';
import CreateWelcomePanel from './components/create-welcome-panel';



class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/welcome' component={Welcome} />
            <Route path='/classroom' component={Classroom} />
            <Route path='/lobby' component={Lobby} />
            <Route path='/set-lobby-tv' component={SetLobbyTV} />
            <Route path='/set-classroom-tv' component={SetClassroomTV} />
            <Route path='/lobby-tv' component={LobbyTV} />
            <Route path='/classroom-tv' component={ClassroomTV} />
            <Route path='/edit-lobby-board' component={EditLobbyBoard} />
            <Route path='/edit-default-board' component={EditDefaultBoard} />
            <Route path='/edit-activity' component={EditActivity} />
            <Route path='/create-activity-panels' component={CreateActivityPanel} />
            <Route path='/activity-panels' component={ActivityPanels} />
            <Route path='/welcome-panels' component={WelcomePanels} />
            <Route path='/create-welcome-panel' component={CreateWelcomePanel} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
