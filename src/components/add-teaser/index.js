import React from 'react';
import { Link } from 'react-router-dom';
import './add-teaser.css';
import Header2 from '../header2';

export default () => {
    return (
        <div className="add-teaser">
            <Header2 />
            <h1>Add A New Teaser</h1>
            <form>
                <input type="text" name="teaser-title" id="teaser-title" placeholder="Title" />
                <input type="text" name="teaser-subtitle" id="teaser-subtitle" placeholder="Subtitle" />
                <input type="textarea" rows="10" name="teaser-description" id="teaser-description" placeholder="Teaser Description" />
                <input type="text" name="teaser-image-link" id="teaser-image-link" placeholder="Teaser Image Link" />
                <input type="text" name="teaser-leader-name" id="teaser-leader-name" placeholder="Leaderboard Team Name" />
                <input type="text" name="teaser-leader-time" id="teaser-leader-time" placeholder="Leaderboard Team Time" />
                <div>
                    <Link to="/teasers" className="add-btn">BACK</Link>
                    <button className="add-btn">ADD TEASER</button>
                </div>
            </form>

        </div>

    )
}