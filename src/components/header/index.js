import React from 'react';
import logo from '../../logo.svg';
import './header.css';

export default () => {
    return (
        <header className="header">
            <img src={logo} className="header-logo" alt="logo" />
        </header>
    )
}