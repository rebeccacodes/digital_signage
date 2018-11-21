import React from 'react';
import './welcome-panels.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (

        <div>
            <Header2 />
            <h1 className="remove-margin">Welcome Panels</h1>

            <div className="lobby-links right">
                <Link to='/create-welcome-panel' className="add-btn">ADD PANEL</Link>
                <Link to="/welcome" className="add-btn">BACK</Link>
            </div>
            <div className="welcome-panel">
                <div className="delete-welcome">X</div>
                <h3>Mystery at the Lost Point Lodge</h3>
                <h4>It's up to your group of reporters to uncover the truth and report it to the world!</h4>
                <Link to='/edit-welcome-panel'><div className="edit-welcome">EDIT</div></Link>
            </div>
            <div className="welcome-panel">
                <div className="delete-welcome">X</div>
                <h3>The Secrets of The Master</h3>
                <h4>You’ve been brought together by an international art syndicate to locate the Master’s lair...</h4>
                <Link to='/edit-welcome-panel'><div className="edit-welcome">EDIT</div></Link>
            </div>
            <div className="welcome-panel">
                <div className="delete-welcome">X</div>
                <h3>The Legacy</h3>
                <h4>Solve the mysteries and magic that lie within to prove that you are worthy to live "The Legacy"</h4>
                <Link to='/edit-welcome-panel'><div className="edit-welcome">EDIT</div></Link>
            </div>


        </div>
    )
}
