import React, { Component } from 'react';
import './welcome.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: ''
        }

    }
    parseParameters() {
        var queryObject = {};
        var pair = null;
        var sPageURL = window.location.search.substring(1);
        var qArr = sPageURL.split('&');

        for (var i = 0; i < qArr.length; i++) {

            pair = qArr[i].split('=');
            queryObject[pair[0]] = pair[1];
        }
        return queryObject;
    }

    componentDidMount() {
        const location = this.parseParameters();
        this.setState({ location: location.location });
    }
    render() {
        return (
            <div>
                <Header2 />
                <h1>Welcome BRAINY ACTZ <span className="city">{this.state.location}</span></h1>
                <div className="boards">
                    <div className="outer">
                        <div className="center">
                            <Link to='/lobby' className="heading-links"><h2>Lobby Boards</h2></Link>
                        </div>
                    </div>
                    <div className="outer">
                        <div className="center">
                            <Link to='/classrooms' className="heading-links"><h2>Classroom Boards</h2></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Welcome;