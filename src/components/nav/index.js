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
                    <Link to='/welcome/reno'>RENO</Link>
                    <Link to='/welcome/irvine'>IRVINE</Link>

                </div >
            </div >
            <div className="dropdown">
                <button className="dropbtn">LOBBY
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <Link to='/lobby-tv'>LOBBY TV</Link>
                    <Link to='/lobby'>LOBBY BOARD</Link>

                </div >
            </div >
            <div className="dropdown">
                <button className="dropbtn">CLASSROOM
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <Link to='/classroom-tv'>CLASSROOM TV</Link>
                    <Link to='/classroom'>CLASSROOM BOARD</Link>

                </div >
            </div >
            <div className="dropdown">
                <button className="dropbtn">PANELS
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    <Link to='/welcome-panels'>WELCOME PANELS</Link>
                    <Link to='/activity-panels'>ACTIVITY PANELS</Link>
                    <Link to='/activity-list'>ACTIVITY LIST</Link>

                </div >
            </div >

            <Link to='/login'>LOGIN</Link>
        </div >
    )
}
