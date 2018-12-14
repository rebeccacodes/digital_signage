import React, { Component } from 'react';
import './lobby-tv.css';
import Header2 from '../header2';
import YouTube from 'react-youtube';

//https://youtu.be/eSYR9iVcGOk
class LobbyTV extends Component {

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };

        return (
            <div>
                <Header2 />
                <h1>Lobby TV</h1>

                <YouTube
                    videoId="eSYR9iVcGOk"
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );
    }


}

export default LobbyTV

