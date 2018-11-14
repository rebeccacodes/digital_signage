import React from 'react';
import './add-classroom.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Header2 />
            <h1>Add Classroom</h1>
            <form>
                <input type="text" name="classroom-title" id="classroom-title" placeholder="Title" />
                <input type="textarea" rows="10" name="classroom-tagline" id="classroom-tagline" placeholder="Description" />
                <input type="text" name="leader-name" id="leader-name" placeholder="Leader Team Name" />
                <input type="text" name="leader-time" id="leader-time" placeholder="Leader Time" />
                <input type="text" name="image-link" id="image-link" placeholder="Image Link" />
                <input type="text" name="classroom-youtube-link" id="classroom-youtube-link" placeholder="YouTube Link" />
                <div>
                    <Link to="/classrooms" className="add-btn">BACK</Link>
                    <button className="add-btn">ADD CLASSROOM</button>
                </div>
            </form>
        </div>
    )
}
