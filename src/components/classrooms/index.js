import React from 'react';
import './classrooms.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (

        <div className="classrooms">
            <Header2 />
            <h1>Classrooms</h1>
            <div className="right"><Link to='/new-classroom' className="heading-links"><div className="add-btn">ADD CLASSROOM</div></Link></div>
            <div className="classroom">
                <h3>Mystery at the Lost Point Lodge</h3>
                <h4>It's up to your group of reporters to uncover the truth and report it to the world!</h4>
                <div className="edit-classroom">EDIT</div>
            </div>
            <div className="classroom">
                <h3>The Secrets of The Master</h3>
                <h4>You’ve been brought together by an international art syndicate to locate the Master’s lair...</h4>
                <div className="edit-classroom">EDIT</div>
            </div>
            <div className="classroom">
                <h3>The Legacy</h3>
                <h4>Solve the mysteries and magic that lie within to prove that you are worthy to live "The Legacy"</h4>
                <div className="edit-classroom">EDIT</div>
            </div>
            <div className="classroom">
                <h3>Arrow Tag</h3>
                <h4>If you can dodge a ball you can dodge an arrow!</h4>
                <div className="edit-classroom">EDIT</div>
            </div>
            <div className="classroom">
                <h3>Succulents Plant Workshops</h3>
                <h4>Be Creative #PlantNight</h4>
                <div className="edit-classroom">EDIT</div>
            </div>
            <div className="classroom">
                <h3>Nerf Wars</h3>
                <h4>Time to fire up the ol'Nerf blaster!</h4>
                <div className="edit-classroom">EDIT</div>
            </div>
            <Link to='/welcome'><div className="back-btn">BACK</div></Link>
        </div>
    )
}



