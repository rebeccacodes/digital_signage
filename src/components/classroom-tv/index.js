import React from 'react';
import './classroom-tv.css';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <h1>classroom-tv</h1>
            <Link to='/classrooms' className="heading-links"><div className="add-btn inline-block">BACK</div></Link>
        </div>
    )
}