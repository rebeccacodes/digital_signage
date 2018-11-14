import React from 'react';
import './login.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';


export default () => {
    return (
        <div>
            <Header2 />
            <h1>Brainy Actz</h1>
            <h2>Content Management System</h2>
            <h1>Please Sign In</h1>
            <input type="text" name="" id="" placeholder="Enter Your User Id" />
            <input type="password" name="" id="" placeholder="Enter Your Password" />

            <Link to='/welcome'> <input class="login-btn" type="submit" value="SUBMIT" /></Link>
            <Link to='/' className="heading-links"> <div className="text-link">BACK</div></Link>

        </div>
    )
}