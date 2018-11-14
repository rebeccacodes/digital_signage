import React, { Component } from 'react';
import './home.css';
import Header from '../header';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ location: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.history.push(`/welcome?location=${this.state.location}`);
    }

    render() {
        console.log('test:', this.state.location);
        return (
            <div>
                <Header />
                <h1>Welcome to Brainy Actz</h1>
                <h2>Content Management System</h2>
                <select name="location" value={this.state.location} onChange={this.handleChange}>
                    <option value="null">Choose Your Location</option>
                    <option value="irvine">Irvine</option>
                    <option value="lake forest">Lake Forest</option>
                    <option value="reno">Reno</option>
                </select>

                <Link to="/welcome"> <input className="go" type="submit" value="GO" onClick={(event) => { this.handleSubmit(event) }} /></Link>

            </div >
        )
    }

}

export default Home;