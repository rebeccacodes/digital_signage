import React from 'react';
import './edit-default-board.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Header2 />
            <h1>Default Board</h1>
            <h2>Click on the panels to change what is displayed</h2>
            <div className="right"><Link to="/lobby" className='lobby-btn'>BACK</Link></div>
            <div>
                <div className="panel">
                    <form>
                        <h3>Welcome Panel</h3>
                        <div className="text-div">BrainyActs Weekend</div>
                        <div className="text-div active">BrainyActs Weekday</div>

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
                            <div className="text-div">Activity List</div>
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