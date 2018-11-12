import React from 'react';
import './lobby-boards.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (

        <div className="lobby-boards">
            <Header2 />
            <h1>Lobby</h1>
            <h2>Text Boards</h2>
            <div>
                <Link to='/new-lobby-board' className="heading-links"><div className="add-btn inline-block">ADD TEXT BOARD</div></Link>
                <Link to='/set-lobby-tv' className="heading-links"><div className="add-btn inline-block">SET TEXT BOARD</div></Link>
            </div>
            <div className="lobby-board">
                <div className="delete-lobby">X</div>
                <h3>Default Board</h3>
                <h4>Default Info</h4>
                <h3>Today's Schedule</h3>
                <h4>12pm - 1:30pm : Lunch</h4>
                <h4>2pm - 3pm : The Legacy</h4>
                <div className="edit-lobby">EDIT</div>
            </div>
            <div className="lobby-board">
                <div className="delete-lobby">X</div>
                <h3>Pacific Life</h3>
                <h4>Team Building Day</h4>
                <h3>Today's Schedule</h3>
                <h4>12pm - 1:30pm : Lunch</h4>
                <h4>2pm - 3pm : The Legacy</h4>
                <div className="edit-lobby">EDIT</div>
            </div>
            <div className="lobby-board">
                <div className="delete-lobby">X</div>
                <h3>Liberty Mutual</h3>
                <h4>Quarterly Outing</h4>
                <h3>Today's Schedule</h3>
                <h4>12pm - 1:30pm : Lunch</h4>
                <h4>2pm - 3pm : The Legacy</h4>
                <div className="edit-lobby">EDIT</div>
            </div>
            <Link to='/lobby'><div className="back-btn">BACK</div></Link>

        </div>
    )
}