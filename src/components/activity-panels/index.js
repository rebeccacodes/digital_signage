import React from 'react';
import './activity-panels.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (

        <div>
            <Header2 />
            <h1 className="remove-margin">Activity Panels</h1>

            <div className="lobby-links right">
                <Link to='/create-activity-panels' className="add-btn">ADD PANEL</Link>
                <Link to="/welcome" className="add-btn">BACK</Link>
            </div>
            <div className="activity">
                <div className="delete-activity">X</div>
                <h3>Mystery at the Lost Point Lodge</h3>
                <h4>It's up to your group of reporters to uncover the truth and report it to the world!</h4>
                <Link to='/edit-activity'><div className="edit-activity">EDIT</div></Link>
            </div>
            <div className="activity">
                <div className="delete-activity">X</div>
                <h3>The Secrets of The Master</h3>
                <h4>You’ve been brought together by an international art syndicate to locate the Master’s lair...</h4>
                <Link to='/edit-activity'><div className="edit-activity">EDIT</div></Link>
            </div>
            <div className="activity">
                <div className="delete-activity">X</div>
                <h3>The Legacy</h3>
                <h4>Solve the mysteries and magic that lie within to prove that you are worthy to live "The Legacy"</h4>
                <Link to='/edit-activity'><div className="edit-activity">EDIT</div></Link>
            </div>
            <div className="activity">
                <div className="delete-activity">X</div>
                <h3>Arrow Tag</h3>
                <h4>If you can dodge a ball you can dodge an arrow!</h4>
                <Link to='/edit-activity'><div className="edit-activity">EDIT</div></Link>
            </div>
            <div className="activity">
                <div className="delete-activity">X</div>
                <h3>Succulents Plant Workshops</h3>
                <h4>Be Creative #PlantNight</h4>
                <Link to='/edit-activity'><div className="edit-activity">EDIT</div></Link>
            </div>
            <div className="activity">
                <div className="delete-activity">X</div>
                <h3>Nerf Wars</h3>
                <h4>Time to fire up the ol'Nerf blaster!</h4>
                <Link to='/edit-activity'><div className="edit-activity">EDIT</div></Link>
            </div>

        </div>
    )
}
