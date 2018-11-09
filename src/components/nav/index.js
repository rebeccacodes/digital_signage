import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="navbar">
            <Link to='/welcome'>HOME</Link>
            <div className="dropdown">
                <button className="dropbtn">LOBBY
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <Link to='/lobby-boards'>TEXT BOARDS</Link>
                    <Link to='/teasers'>ESCAPE ROOM TEASERS</Link>
                </div >
            </div >
            <Link to='/classrooms'>CLASSROOMS</Link>
            <Link to='/'>LOGOUT</Link>
        </div >
    )
}
