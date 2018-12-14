import React from 'react';
import './lobby.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';
import LobbyBoard from '../lobby-board';

export default (props) => {
    return (

        <div>
            <Header2 />
            <h1 className="remove-margin">Lobby</h1>
            <div className="lobby-links right">
                <Link to='/lobby-tv' className="add-btn">VIEW LOBBY TV</Link>
                <Link to="/welcome" className="add-btn">BACK</Link>
            </div>
            <h2>Select Lobby Display</h2>
            <h4>Current Display Highlighted in White</h4>

            <LobbyBoard />

        </div>
    )
}

