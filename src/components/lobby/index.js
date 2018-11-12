import React from 'react';
import './lobby.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (

        <div className="lobby">
            <Header2 />
            <h1>Lobby</h1>

            <div className="lobby-links">
                <Link to='/set-lobby-tv' className="add-btn">SET LOBBY TV</Link>
                <Link to='/lobby-tv' className="add-btn">VIEW LOBBY TV</Link>

            </div>
            <div className="view">
                <Link to='/lobby-boards' className="heading-links"><h2>View Text Boards</h2></Link>
            </div>
            <div className="view">
                <Link to='/teasers' className="heading-links"><h2>View Teasers</h2></Link>
            </div>


        </div>
    )
}