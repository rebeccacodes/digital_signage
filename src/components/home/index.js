import React from 'react';
import './home.css';
import Header from '../header';
import { Link } from 'react-router-dom';


export default () => {
    return (
        <div className="home">
            <Header />
            <h1>Welcome to Brainy Actz</h1>
            <h2>Content Management System</h2>
            <select>
                <option value="na">Choose Your Location</option>
                <option value="irvine">Irvine</option>
                <option value="lake forest">Lake Forest</option>
                <option value="reno">Reno</option>
            </select>

            <Link to="/login"> <input class="go" type="submit" value="GO" /> </Link>

        </div>
    )
}