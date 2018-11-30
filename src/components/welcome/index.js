import React, { Component } from 'react';
import './welcome.css';
import Header2 from '../header2';
import { Link } from 'react-router-dom';
import fb from '../../base';
import { connect } from 'react-redux';

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: '',
            location_name: ''
        }

    }

    componentDidMount() {
        this.getCity();
    }

    async getCity() {
        const city = this.props.match.params.location;
        const city_name = fb.ref(`location/${city}/city_name`);
        const location = await city_name.once('value').then((snapshot) => {
            return snapshot.val();
        });

        this.setState({
            location_name: location,
            location: city
        });

    };

    render() {
        return (
            <div>
                <Header2 />

                <h1>Welcome BRAINY ACTZ <span className="city">{this.state.location_name}</span></h1>
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

export default Welcome;