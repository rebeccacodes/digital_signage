import React from 'react';
import './classroom.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Header2 />
            <h1>Classroom</h1>
            <h2>Click on the panels to change what is displayed</h2>
            <div className="right">
                <Link to='/classroom-tv' className="add-btn">VIEW CLASSROOM TV</Link>
                <Link to="/welcome" className='lobby-btn'>BACK</Link></div>
            <div>

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