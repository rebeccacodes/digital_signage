import React from 'react';
import './edit-lobby-board.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Header2 />
            <h1>Edit Lobby Board</h1>
            <div className="right"><Link to="/lobby" className='lobby-btn'>BACK</Link></div>
            <div>
                <div className="panel">
                    <form>
                        <h3>Welcome Panel</h3>
                        <input type="text" className='panel-forms' value="Pacific Life" name="company" id="company" placeholder="Enter Company / Party Name" />
                        <input type="textarea" className='panel-forms' value="Team Building Day" rows="10" name="event-details" id="event-details" placeholder="Enter Event Details" />
                        <input type="text" className='panel-forms' value="www.image.com/image.png" name="image-link" id="image-link" placeholder="Image Link" />
                        <div className="right">

                            <button className='lobby-btn'>UPDATE BOARD</button>
                        </div>
                    </form>
                </div>
                <div className="panel">
                    <form>
                        <h3>Activity Panel</h3>
                        <input type="text" className='panel-forms' value="The Legacy" name="title" id="title" placeholder="Activity Title" />
                        <input type="textarea" className='panel-forms' value="12PM - 1:30PM : LUNCH 2PM - 3PM : THE LEGACY" rows="10" name="description" id="event-details" placeholder="Description" />
                        <input type="text" className='panel-forms' value='Team Smith' name="leader-name" id="leader-name" placeholder="Leaderboard Name" />
                        <input type="text" className='panel-forms' value='18:59' name="leader-time" id="leader-time" placeholder="Leaderboard Time" />
                        <input type="text" className='panel-forms' value='youtube link info' name="youtube-link" id="youtube-link" placeholder="YouTube Link" />
                        <input type="text" className='panel-forms' value='image link info' name="image-link" id="image-link" placeholder="Image Link" />
                        <div className="right">

                            <button className='lobby-btn'>UPDATE BOARD</button>
                            <button className='lobby-btn'>+ ACTIVITIES</button>
                        </div>
                    </form>
                </div>



            </div>
        </div>
    )
}