import React from 'react';
import './edit-classroom.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Header2 />
            <h1>Edit Classroom</h1>
            <div className="classroom-panel">
                <form>
                    <h2>Update Classroom Panel</h2>
                    <label>Activity Title</label>
                    <input type="text" className='classroom-form' value="The Legacy" name="title" id="title" />
                    <label>Activity Description</label>
                    <input type="textarea" className='classroom-form' value="SOLVE THE MYSTERIES AND MAGIC THAT LIE WITHIN TO PROVE THAT YOU ARE WORTHY TO LIVE THE LEGACY" rows="10" name="description" id="event-details" />
                    <label>Leader Team Name</label>
                    <input type="text" className='classroom-form inline-block' value='Team Smith' name="leader-name" id="leader-name" />
                    <label>Leaderboard Time</label>
                    <input type="text" className='classroom-form inline-block' value='18:59' name="leader-time" id="leader-time" />
                    <label>YouTube Link</label>
                    <input type="text" className='classroom-form inline-block' value='youtube link info' name="youtube-link" id="youtube-link" />
                    <label>Image Link</label>
                    <input type="text" className='classroom-form inline-block' value='image link info' name="image-link" id="image-link" />
                    <div className="right">
                        <Link to="/classrooms" className='lobby-btn'>BACK</Link>
                        <button className='lobby-btn'>UPDATE CLASSROOM</button>

                    </div>
                </form>
            </div>
        </div>
    )
}