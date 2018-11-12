import React from 'react';
import './add-lobby-board.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div className="add-lobby-board">
            <Header2 />
            <h1>Add Lobby Text Board</h1>
            <form>
                <input type="text" name="text-board-title" id="text-board-title" placeholder="Text Board Title" />
                <input type="textarea" rows="10" name="text-board-subheading" id="text-board-subheading" placeholder="Text Board Subheading" />
                <input type="textarea" rows="10" name="text-board-details" id="text-board-details" placeholder="Text Board Details" />
                <div>
                    <Link to="/lobby-boards" className="add-btn">BACK</Link>
                    <button className="add-btn">ADD TEXT BOARD</button></div>
            </form>
        </div>
    )
}