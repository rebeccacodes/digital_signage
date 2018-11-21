import React from 'react';
import './create-welcome-panel.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';


export default () => {
    return (
        <div>
            <Header2 />
            <h1>Create New Welcome Panel</h1>
            <div className="new-welcome-panel">
                <form>

                    <input type="text" className='panel-forms' name="company" id="company" placeholder="Enter Company / Party Name" />
                    <input type="textarea" className='panel-forms' rows="10" name="event-details" id="event-details" placeholder="Enter Event Details" />
                    <input type="text" className='panel-forms' name="image-link" id="image-link" placeholder="Image Link" />
                    <div className="right">
                        <Link to="/welcome-panels" className='lobby-btn'>CANCEL</Link>
                        <button className='lobby-btn'>ADD WELCOME</button>

                    </div>
                </form>
            </div>


        </div>
    )
}