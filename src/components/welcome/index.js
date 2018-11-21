import React, { Component } from 'react';
import './welcome.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { location } from '../../actions/index';

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
        //this.props.location();
    }
    render() {
        return (
            <div>
                <Header2 />
                {/* will need to change out this.state.location to this.props.location */}
                <h1>Welcome BRAINY ACTZ <span className="city">{this.state.location}</span></h1>
                <div className="boards">
                    <div className="outer">
                        <div className="center">
                            <Link to='/lobby-tv' className="heading-links"><h2>View Lobby TV</h2></Link>
                            <Link to='/lobby' className="heading-links"><h2>Edit Lobby</h2></Link>
                        </div>
                    </div>
                    <div className="outer">
                        <div className="center">
                            <Link to='/classroom-tv' className="heading-links"><h2>View Classroom TV</h2></Link>
                            <Link to='/classroom' className="heading-links"><h2>Edit Classroom</h2></Link>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        location: state.location.location
    }
}

export default connect(mapStateToProps, { location: location })(Welcome);