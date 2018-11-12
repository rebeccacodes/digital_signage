import React from 'react';
import logo from '../../logo.svg';
import './header2.css';
import Nav from '../nav';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <header className="header2">
            <Link to='/welcome'><img src={logo} className="header-logo2" alt="logo" /></Link>
            <Nav />

        </header>
    )
}