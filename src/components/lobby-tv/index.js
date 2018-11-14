import React from 'react';
import './lobby-tv.css';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <h1>lobby-tv</h1>
            <Link to='/lobby' className="heading-links"><div className="add-btn">BACK TO LOBBY</div></Link>
        </div>
    )
}