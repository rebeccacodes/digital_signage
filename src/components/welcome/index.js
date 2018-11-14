import React from 'react';
import './welcome.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Header2 />
            <h1>Welcome BRAINY ACTZ <span className="city">RENO</span></h1>
            <div className="boards">
                <div className="outer">
                    <div className="center">
                        <Link to='/lobby' className="heading-links"><h2>Lobby Boards</h2></Link>
                    </div>
                </div>
                <div className="outer">
                    <div className="center">
                        <Link to='/classrooms' className="heading-links"><h2>Classroom Boards</h2></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}