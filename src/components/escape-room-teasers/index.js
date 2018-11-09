import React from 'react';
import './escape-room-teasers.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (

        <div className="teasers">
            <Header2 />
            <h1>Lobby</h1>
            <h2>Escape Room Teasers</h2>
            <div className="teaser">Mystery at the Lost Point Lodge</div>
            <div className="teaser">The Secrets of The Master</div>
            <div className="teaser">The Legacy</div>
            <Link to='/lobby'><div className="back-btn">BACK</div></Link>
        </div>
    )
}