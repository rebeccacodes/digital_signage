import React from 'react';
import logo from '../../logo.svg';
import './header2.css';
import Nav from '../nav';

export default () => {
    return (
        <header className="header2">
            <img src={logo} className="header-logo2" alt="logo" />
            <Nav />

        </header>
    )
}