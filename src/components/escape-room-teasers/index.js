import React from 'react';
import './escape-room-teasers.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (

        <div className="teasers">
            <Header2 />
            <h1>Lobby</h1>
            <h2>Escape Room Teasers</h2>
            <div><Link to='/new-teaser' className="heading-links"><div className="add-btn inline-block">ADD TEASER</div></Link></div>
            <div className="teaser">
                <h3>Mystery at the Lost Point Lodge</h3>
                <h4>IT'S UP TO YOUR GROUP OF REPORTERS TO UNCOVER THE TRUTH AND REPORT IT TO THE WORLD!</h4>
                <h3>LEADER BOARD</h3>
                <h4>Team Loco</h4>
                <h5>18:32</h5>
            </div>
            <div className="teaser">
                <h3>The Secrets of The Master</h3>
                <h4>YOU’VE BEEN BROUGHT TOGETHER BY AN INTERNATIONAL ART SYNDICATE TO LOCATE THE MASTER’S LAIR...</h4>
                <h3>LEADER BOARD</h3>
                <h4>Team Liberty</h4>
                <h5>24:05</h5>
            </div>
            <div className="teaser">
                <h3>The Legacy</h3>
                <h4>SOLVE THE MYSTERIES AND MAGIC THAT LIE WITHIN TO PROVE THAT YOU ARE WORTHY TO LIVE "THE LEGACY"</h4>
                <h3>LEADER BOARD</h3>
                <h4>Team Banjo</h4>
                <h5>29:01</h5>
            </div>
            <Link to='/lobby'><div className="back-btn">BACK</div></Link>
        </div>
    )
}