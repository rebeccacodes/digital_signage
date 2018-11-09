import React from 'react';
import './lobby.css';
import Header2 from '../header2';
import LobbyBoards from '../lobby-boards';
import Teasers from '../escape-room-teasers';

export default () => {
    return (

        <div className="lobby">
            <Header2 />
            <h1>Lobby</h1>
            <LobbyBoards />
            <Teasers />

        </div>
    )
}