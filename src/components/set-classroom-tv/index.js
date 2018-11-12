import React from 'react';
import './set-classroom-tv.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="set-classroom-tv">
            <Header2 />
            <h1>Set Classroom TV</h1>
            <h2>CURRENT THEME IS: <span className="white">THE LEGACY</span></h2>
            <div className="set-theme">
                <h3>Select The Classroom Theme</h3>
                <div className="white spacing">MYSTERY AT THE LOST POINT LODGE</div>
                <div className="white spacing">THE SECRETS OF THE MASTER</div>
                <div className="white spacing">THE LEGACY</div>
                <div className="white spacing">ARROW TAG</div>
                <div className="white spacing">SUCCULENTS PLANT WORKSHOPS</div>
                <div className="white spacing">NERF WARS</div>
            </div>
            <Link to='/classrooms' className="heading-links"><div className="add-btn">BACK</div></Link>
        </div>
    )
}