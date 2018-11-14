import React from 'react';
import './add-lobby-board.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Header2 />
            <h1>Add Lobby Board</h1>
            <div className="right"><Link to="/lobby" className='lobby-btn'>BACK</Link></div>
            <div>
                <div className="panel">
                    <form>
                        <h3>Welcome Panel</h3>
                        <input type="text" className='panel-forms' name="company" id="company" placeholder="Enter Company / Party Name" />
                        <input type="textarea" className='panel-forms' rows="10" name="event-details" id="event-details" placeholder="Enter Event Details" />
                        <input type="text" className='panel-forms' name="image-link" id="image-link" placeholder="Image Link" />
                        <div className="right">

                            <button className='lobby-btn'>ADD BOARD</button>
                        </div>
                    </form>
                </div>
                <div className="panel">
                    <form>
                        <h3>Activity List Panel</h3>
                        <input type="text" className='panel-forms' name="title" id="title" placeholder="Activity Title" />
                        <input type="textarea" className='panel-forms' rows="10" name="description" id="event-details" placeholder="Description" />
                        <input type="text" className='panel-forms' name="leader-name" id="leader-name" placeholder="Leaderboard Name" />
                        <input type="text" className='panel-forms' name="leader-time" id="leader-time" placeholder="Leaderboard Time" />
                        <input type="text" className='panel-forms' name="youtube-link" id="youtube-link" placeholder="YouTube Link" />
                        <input type="text" className='panel-forms' name="image-link" id="image-link" placeholder="Image Link" />
                        <div className="right">

                            <button className='lobby-btn'>ADD BOARD</button>
                            <button className='lobby-btn'>+ ACTIVITIES</button>
                        </div>
                    </form>
                </div>



            </div>
        </div>
    )
}