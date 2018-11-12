import React from 'react';
import './set-lobby-tv.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="set-lobby-tv">
            <Header2 />
            <h1>Set Lobby TV</h1>
            <h2>Current Board is: <span className="white">Pacific Life</span></h2>
            <div className='select-text-boards'>
                <h3>Select The Lobby Text Board</h3>
                <div className="white spacing">Default Board</div>
                <div className="white spacing">Pacific Life</div>
                <div className="white spacing">Liberty Mutual</div>

            </div>
            <Link to='/lobby-boards' className="heading-links"><div className="add-btn">BACK</div></Link>
        </div>
    )
}