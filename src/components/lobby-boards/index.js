import React from 'react';
import './lobby-boards.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (

        <div className="lobby-boards">
            <Header2 />
            <h1>Lobby</h1>
            <h2>Text Boards</h2>
            <div className="lobby-board">Default Board</div>
            <div className="lobby-board">Pacific Life</div>
            <div className="lobby-board">Liberty Mutual</div>
            <Link to='/lobby'><div className="back-btn">BACK</div></Link>

        </div>
    )
}