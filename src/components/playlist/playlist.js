import React from 'react';
import { TrackList } from '../trackList/trackList.js';
import './playlist.css';

export class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} />
                <TrackList />
                <button classname="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
            );
    }
}