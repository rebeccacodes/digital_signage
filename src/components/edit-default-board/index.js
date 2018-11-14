import React from 'react';
import './edit-default-board.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            <Header2 />
            <h1>Edit Default Board</h1>
            <div className="right"><Link to="/lobby" className='lobby-btn'>BACK</Link></div>
            <div>
                <div className="panel">
                    <form>
                        <h3>Welcome Panel</h3>
                        <input type="text" className='panel-forms' value="Default Board" name="default-title" id="default-title" />
                        <input type="textarea" className='panel-forms' value="Default Info" rows="10" name="default-info" id="default-info" />

                        <div className="right">

                            <button className='lobby-btn'>UPDATE BOARD</button>
                        </div>
                    </form>
                </div>
                <div className="panel">
                    <form>
                        <h3>Activity List Panel</h3>
                        <div className='default-activity'>
                            <input type="text" className='panel-forms' value="The Legacy" name="title" id="title" />
                            <input type="text" className='panel-forms' value='image link info' name="image-link" id="image-link" />
                        </div>
                        <div className='default-activity'>
                            <input type="text" className='panel-forms' value="The Legacy" name="title" id="title" />
                            <input type="text" className='panel-forms' value='image link info' name="image-link" id="image-link" />
                        </div>


                        <div className="right">
                            <button className='lobby-btn'>UPDATE BOARD</button>
                            <button className='lobby-btn'>+ ACTIVITIES</button>
                        </div>
                    </form>
                </div>



            </div>
        </div>
    )
}