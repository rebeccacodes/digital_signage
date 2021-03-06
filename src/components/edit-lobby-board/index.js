import React from 'react';
import './edit-lobby-board.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Header2 />
            <h1>Lobby Board</h1>
            <h2>Click on the panels to change what is displayed</h2>
            <div className="right"><Link to="/lobby" className='lobby-btn'>BACK</Link></div>
            <div>
                <div className="panel">
                    <form>
                        <h3>Welcome Panel</h3>
                        <div className="text-div">Joe's Birthday</div>
                        <div className="text-div active">Pacific Life</div>
                        <div className="text-div">Allstate Insurance</div>
                        <div className="text-div">Lynn's Graduation Party</div>

                        <div className="right">

                            <button className='lobby-btn'>UPDATE</button>
                        </div>
                    </form>
                </div>
                <div className="panel">
                    <form>
                        <h3>Activity List Panel</h3>
                        <div>
                            <div className="text-div">The Legacy</div>
                            <div className="text-div active">Secrets of the Master</div>
                            <div className="text-div">Mystery at the Lost Lodge Point</div>
                            <div className="text-div">Arrow Tag</div>
                            <div className="text-div">Succulents Plant Workshops</div>
                            <div className="text-div">Nerf Wars</div>

                        </div>



                        <div className="right">
                            <button className='lobby-btn'>UPDATE</button>
                        </div>
                    </form>
                </div>



            </div>
        </div>
    )
}