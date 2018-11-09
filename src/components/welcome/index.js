import React from 'react';
import './welcome.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="welcome">
            <Header2 />
            <h1>Welcome BRAINY ACTZ <span className="city">RENO</span></h1>
            <div className="boards">
                <div className="lobby-main">
                    <Link to='/lobby' className="heading-links"><h2>View Lobby Boards</h2></Link>
                </div>
                <div className="classroom-main">
                    <Link to='/classrooms' className="heading-links"><h2>View Classroom Boards</h2></Link>
                </div>
            </div>
        </div>
    )
}