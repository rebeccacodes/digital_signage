import React from 'react';
import './login.css';
import Header from '../header';
import { Link } from 'react-router-dom';


export default () => {
    return (
        <div className="login">
            <Header />
            <h1>Brainy Actz</h1>
            <h2>Please Sign In</h2>
            <input type="text" name="" id="" placeholder="Enter Your User Id" />
            <input type="password" name="" id="" placeholder="Enter Your Password" />

            <Link to='/welcome'> <input class="login-btn" type="submit" value="SUBMIT" /></Link>

        </div>
    )
}