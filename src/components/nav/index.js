import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="navbar">
            <div className="dropdown">
                <button className="dropbtn">LOCATIONS
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <Link to='/welcome'>RENO</Link>
                    <Link to='/welcome'>IRVINE</Link>
                    <Link to='/welcome'>LAKE FOREST</Link>
                </div >
            </div >
            <div className="dropdown">
                <button className="dropbtn">LOBBY
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <Link to='/lobby-tv'>LOBBY TV</Link>
                    <Link to='/lobby'>LOBBY BOARDS</Link>

                </div >
            </div >
            <div className="dropdown">
                <button className="dropbtn">CLASSROOM
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <Link to='/classroom-tv'>CLASSROOM TV</Link>
                    <Link to='/classrooms'>CLASSROOM BOARDS</Link>

                </div >
            </div >

            <Link to='/login'>LOGIN</Link>
        </div >
    )
}
