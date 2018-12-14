import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fb from '../../base';
import './lobby-board.css';


class LobbyBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            welcome: '',
            content: ''
        }

    }


    componentDidMount() {
        this.getBoard();
    }

    async getBoard() {

        const boardWelcome = fb.ref('location/irvine/rooms/lobby/lobby_boards/custom_board/welcome');
        const welcomeValue = await boardWelcome.once('value').then((snapshot) => {
            return snapshot.val();
        });
        const boardContent = fb.ref('location/irvine/rooms/lobby/lobby_boards/custom_board/content');
        const contentValue = await boardContent.once('value').then((snapshot) => {
            return snapshot.val();
        });

        this.setState({
            welcome: welcomeValue,
            content: contentValue
        });

    };

    render() {
        return (
            <div className="view">

                <div className="lobby-board active">
                    <h3>{this.state.welcome}</h3>
                    <h4>{this.state.content}</h4>

                    <Link to='/edit-lobby-board'><div className="edit-lobby">EDIT</div></Link>
                </div>


            </div>
        )
    }
}

export default LobbyBoard;