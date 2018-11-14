import React from 'react';
import './lobby.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (

        <div>
            <Header2 />
            <h1>Lobby Boards</h1>

            <div className="lobby-links">
                <Link to='/set-lobby-tv' className="add-btn">SET LOBBY TV</Link>
                <Link to='/lobby-tv' className="add-btn">VIEW LOBBY TV</Link>
                <Link to='/new-lobby-board' className="add-btn">ADD NEW BOARD</Link>

            </div>
            <div className="view">
                <div className="lobby-board">

                    <h3>Default Board</h3>
                    <h4>Default Info</h4>
                    <h3>Today's Schedule</h3>
                    <h4>12pm - 1:30pm : Lunch</h4>
                    <h4>2pm - 3pm : The Legacy</h4>
                    <Link to='/edit-default-board'><div className="edit-lobby">EDIT</div></Link>
                </div>
                <div className="lobby-board">
                    <div className="delete-lobby">X</div>
                    <h3>Pacific Life</h3>
                    <h4>Team Building Day</h4>
                    <h3>Today's Schedule</h3>
                    <h4>12pm - 1:30pm : Lunch</h4>
                    <h4>2pm - 3pm : The Legacy</h4>
                    <Link to='/edit-lobby-board'><div className="edit-lobby">EDIT</div></Link>
                </div>
                <div className="lobby-board">
                    <div className="delete-lobby">X</div>
                    <h3>Liberty Mutual</h3>
                    <h4>Quarterly Outing</h4>
                    <h3>Today's Schedule</h3>
                    <h4>12pm - 1:30pm : Lunch</h4>
                    <h4>2pm - 3pm : The Legacy</h4>
                    <Link to='/edit-lobby-board'><div className="edit-lobby">EDIT</div></Link>
                </div>
                <div className="right"><Link to="/welcome" className="add-btn">BACK</Link></div>
            </div>


        </div>
    )
}

